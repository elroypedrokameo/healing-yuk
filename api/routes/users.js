import express from "express";
import { updateUser, deleteUser, getUsers, getUser } from "../controllers/user.js"
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello user you are loged in")
})

//UPDATE
router.put("/:id", updateUser)

//DELETE
router.delete("/:id", deleteUser)

//GET
router.get("/:id", getUser)

//GETALL
router.get("/", getUsers)


export default router