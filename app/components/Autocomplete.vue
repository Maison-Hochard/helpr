<script setup lang="ts">
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/vue";

interface PropsItems {
  name: string;
  value: string;
  img?: string;
}

const props = defineProps<{
  items: PropsItems[];
  label: string;
  value: any;
  placeholder: string;
}>();

const query = ref("");
const selectedItem = ref(props.value);

const filteredItems = computed(() => {
  return props.items.filter((item) => {
    return item.name.toLowerCase().includes(query.value.toLowerCase());
  });
});
</script>

<template>
  <Combobox as="div" v-model="selectedItem">
    <ComboboxLabel class="block text-sm font-medium text-gray-700">
      {{ props.label }}
    </ComboboxLabel>
    <div class="relative mt-1">
      <ComboboxInput
        class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        @change="query = $event.target.value"
        :display-value="selectedItem.name"
      />
      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </ComboboxButton>

      <ComboboxOptions
        v-if="filteredItems.length > 0"
        class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        <ComboboxOption
          v-for="item in filteredItems"
          :key="item.value"
          :value="item"
          as="template"
          v-slot="{ active, selected }"
        >
          <li
            :class="[
              'relative cursor-default select-none py-2 pl-3 pr-9',
              active ? 'bg-indigo-600 text-white' : 'text-gray-900',
            ]"
          >
            <div class="flex items-center">
              <img :src="item.img" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" v-if="item.img" />
              <span :class="['ml-3 truncate', selected && 'font-semibold']">
                {{ item.name }}
              </span>
            </div>

            <span
              v-if="selected"
              :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']"
            >
              <CheckIcon class="h-5 w-5" aria-hidden="true" />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>
