import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "../user/user.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { AuthService, JwtPayload } from "./auth.service";
import { Request, Response } from "express";
import { ApiTags } from "@nestjs/swagger";
import { LocalGuard } from "./guards/local-auth.guard";
import { User } from "@prisma/client";
import { CurrentUser } from "./decorators/current-user.decorator";
import { JwtAuthGuard } from "./guards/jwt.guard";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post("register")
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @UseGuards(LocalGuard)
  @Post("login")
  async login(
    @Body("login") login: string,
    @Body("password") password: string,
    @Res({ passthrough: true }) response: Response,
  ): Promise<User> {
    const user = await this.authService.validateUser(login, password);
    const authToken = await this.authService.createAccessToken(user);
    const resetToken = await this.authService.createRefreshToken(user);
    return await this.userService.createSession(
      user,
      authToken,
      resetToken,
      response,
    );
  }

  @HttpCode(HttpStatus.OK)
  @Post("logout")
  @UseGuards(JwtAuthGuard)
  async logout(
    @CurrentUser() user: JwtPayload,
    @Res({ passthrough: true }) response: Response,
  ): Promise<{ message: string }> {
    return this.userService.deleteTokens(user.id, response);
  }

  @HttpCode(HttpStatus.OK)
  @Post("refresh")
  async refresh(@Req() request: Request): Promise<{ authToken: string }> {
    return this.authService.refreshToken(request);
  }
}
