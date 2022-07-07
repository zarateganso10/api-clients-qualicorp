import { GetAllClientsService } from "../services/GetAllClientsService.mjs";

export class GetAllClientsController {
  async handle(request, response) {
    try {
      const getAllClientsService = new GetAllClientsService()
      const clients = await getAllClientsService.execute();
      return response.status(200).json(clients)
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}