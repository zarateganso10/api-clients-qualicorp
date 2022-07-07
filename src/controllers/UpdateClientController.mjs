import { UpdateClientService } from "../services/UpdateClientService.mjs";

export class UpdateClientController {
  async handle(request, response) {
    const { id } = request.params;
    const { name, email, phone, cpf } = request.body;
    const updateClientService = new UpdateClientService();
    try {
      const client = await updateClientService.execute({ id, name, email, phone, cpf });
      return response.status(200).json(client)
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}