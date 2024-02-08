import express  from "express";
import { test } from "../controller/user.controller.js";


const router=new express.Router()

router.get("/test",test)

export default router;