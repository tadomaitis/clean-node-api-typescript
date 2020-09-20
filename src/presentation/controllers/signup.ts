import { HttpReponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpReponse {
    const { name, email } = httpRequest.body
    if (!name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!email) {
      return {
        statusCode: 400,
        body: new MissingParamError('e-mail')
      }
    }
  }
}
