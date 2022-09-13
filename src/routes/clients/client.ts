import { Router } from "express";
import { createClient, getAllClients, getByIdClient } from "../../controllers/client/client";

const router = Router();

router.get('/clients', getAllClients);
router.get('/client', getByIdClient);
router.post('/register-client', createClient);

export default router;