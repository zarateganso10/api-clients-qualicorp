import { Router } from "express";
import { CreateClientController } from "./controllers/CreateClientController.mjs";
import { DeleteClientController } from "./controllers/DeleteClientController.mjs";
import { GetAllClientsController } from "./controllers/GetAllClientsController.mjs";
import { GetClientByIdController } from "./controllers/GetClientByIdController.mjs";
import { UpdateClientController } from "./controllers/UpdateClientController.mjs";

const router = Router();

router.post('/clients', new CreateClientController().handle);
router.get('/clients', new GetAllClientsController().handle);
router.get('/clients/:id', new GetClientByIdController().handle);
router.put('/clients/:id', new UpdateClientController().handle);
router.delete('/clients/:id', new DeleteClientController().handle);

export { router };