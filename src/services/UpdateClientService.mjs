import { ClientRepository } from "../repositories/ClientRepository.mjs"

export class UpdateClientService {
  async execute({ id, name, email, phone, cpf}) {
    const clientsRepository = new ClientRepository();
    return await clientsRepository.update({id, name, email, phone, cpf})
  }
}