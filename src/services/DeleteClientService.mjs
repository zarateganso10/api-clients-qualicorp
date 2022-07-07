import { ClientRepository } from "../repositories/ClientRepository.mjs"

export class DeleteClientService {
  async execute(id) {
    const clientsRepository = new ClientRepository()
    await clientsRepository.delete(id)
  }
}