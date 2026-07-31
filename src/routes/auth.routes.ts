import { Router } from "express";
import { register, login, getProfile} from "../controllers/auth.controller";
import { verifyToken } from "../middleware/auth.middleware";


const router = Router();

router.post("/register", register);
router.get("/profile", verifyToken, getProfile);
router.post("/login", login);

export default router;
