import express from "express";
import { updateUser, deleteUser, getUsers, getUser } from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are loged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are loged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello user, you are loged in and you can delete all accounts")
// })

//UPDATE
router.put("/:id", verifyUser, updateUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET
router.get("/:id", verifyUser, getUser)

//GETALL
router.get("/", verifyAdmin, getUsers)


export default router