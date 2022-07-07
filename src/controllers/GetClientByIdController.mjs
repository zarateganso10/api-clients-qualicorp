import { GetClientByIdService } from "../services/GetClientByIdService.mjs";

export class GetClientByIdController {
  async handle(request, response) {
    const { id }= request.params;
    const getClientByIdService = new GetClientByIdService();
    try {
      
      const client = await getClientByIdService.execute(id);
      return response.status(200).json(client)
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}