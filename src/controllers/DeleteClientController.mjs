import { DeleteClientService } from "../services/DeleteClientService.mjs";

export class DeleteClientController {
  async handle(request, response) {
    const { id } = request.params
    const deleteClientService = new DeleteClientService()
    try {
      await deleteClientService.execute(id);
      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}