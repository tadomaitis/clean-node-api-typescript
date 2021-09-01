import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { MissingParamError } from '@/presentation/errors'
import { badRequest } from '@/presentation/helpers/http-helper'
import { EmailValidator } from '@/presentation/protocols/email-validator'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
    if (!httpRequest.body.password) {
      return badRequest(new MissingParamError('password'))
    }
    this.emailValidator.isValid(httpRequest.body.email)
  }
}
