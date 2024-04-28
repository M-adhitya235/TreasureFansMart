import express from "express";
import {
    getCart,
    getCartById,
    createCart,
    updateCart,
    deleteCart
} from "../controllers/Carts.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/carts',verifyUser, getCart);
router.get('/carts/:id',verifyUser, getCartById);
router.post('/carts',verifyUser, createCart);
router.patch('/carts/:id',verifyUser, updateCart);
router.delete('/carts/:id',verifyUser, deleteCart);

export default router;