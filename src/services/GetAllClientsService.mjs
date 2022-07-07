import { ClientRepository } from "../repositories/ClientRepository.mjs"

export class GetAllClientsService {
  async execute() {
    const clientsRepository = new ClientRepository()
    return await clientsRepository.getAll()
  }
}