import { HttpReponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpReponse {
    const { name, email } = httpRequest.body
    if (!name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!email) {
      return badRequest(new MissingParamError('e-mail'))
    }
  }
}
