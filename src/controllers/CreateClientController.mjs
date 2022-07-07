import { CreateClientService } from "../services/CreateClientService.mjs";

export class CreateClientController {
  async handle(request, response) {
    const { name, email, phone, cpf } = request.body
    const createClientService = new CreateClientService()
    try {
      const clientCreated = await createClientService.execute({
        name,
        email,
        phone,
        cpf
      });
      return response.status(201).json(clientCreated)
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}