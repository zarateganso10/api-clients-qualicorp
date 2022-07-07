import { connection } from "../drivers/neo4jDriver.mjs"

export class ClientRepository {
  constructor() {
    this.connection = connection;
  }
  
  async create({id, name, email, phone, cpf }) {
    const result = await this.connection.run(
      'CREATE (a:Client { id: $id, name: $name, email: $email, phone: $phone, cpf: $cpf }) RETURN a',
      { id, name, email, phone, cpf }
    )
    const singleRecord = result.records[0]
    const formattedRecord = singleRecord.get(0).properties
    return formattedRecord;
  }

  async getAll() {
    const result = await this.connection.run('MATCH (n:Client) RETURN n');
    const formattedRecords = result.records.map(record => record.get(0).properties)
    return formattedRecords;
  }

  async getById(id) {
    const result = await this.connection.run(
      'MATCH (n:Client { id: $id }) RETURN n',
      {id}
    );
    const singleRecord = result.records[0]
    const formattedRecord = singleRecord.get(0).properties
    return formattedRecord;
  }

  async update({ id, name, email, phone, cpf }) {
    const result = await this.connection.run(
      `MATCH (n {id: $id }) SET n.name=$name, n.email=$email, n.phone=$phone, n.cpf=$cpf RETURN n`,
      {id, name, email, phone, cpf}
    );
  }

  async delete(id) {
    await this.connection.run(
      `MATCH (n:Client {id: $id}) DELETE n`,
      {id}
    );
  }
}