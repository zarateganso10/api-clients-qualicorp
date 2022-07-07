import { ClientRepository } from "../repositories/ClientRepository.mjs"

export class GetClientByIdService {
  async execute(id) {
    const clientsRepository = new ClientRepository()
    return await clientsRepository.getById(id)
  }
}