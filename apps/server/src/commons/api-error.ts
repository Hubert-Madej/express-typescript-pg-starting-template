import { serialize } from "class-transformer";
import { StatusCodes } from "http-status-codes";

export class ApiError extends Error {
  private readonly rawMessage: string | string[];
  private readonly additionalData: object | undefined;

  constructor(message: string | string[], additionalData: object) {
    super();
    this.message = serialize(message);
    this.rawMessage = message;
    this.additionalData = additionalData;
  }

  public getCode(): number {
    if (this instanceof BadRequest) return StatusCodes.BAD_REQUEST;

    if (this instanceof NotFound) return StatusCodes.NOT_FOUND;

    if (this instanceof UnprocessableEntity)
      return StatusCodes.UNPROCESSABLE_ENTITY;

    if (this instanceof AccessDenied) return StatusCodes.FORBIDDEN;

    if (this instanceof Unauthorized) return StatusCodes.UNAUTHORIZED;

    return StatusCodes.INTERNAL_SERVER_ERROR;
  }

  public getRawMessage(): string | string[] {
    return this.rawMessage;
  }
}

export class BadRequest extends ApiError {}
export class NotFound extends ApiError {}
export class UnprocessableEntity extends ApiError {}
export class AccessDenied extends ApiError {}
export class Unauthorized extends ApiError {}
