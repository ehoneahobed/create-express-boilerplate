import express from "express"

import {login,register} from "../controllers/authController.js"

const router= express.Router()

// @desc    Authenticate a user
// @route   POST /api/v1/auth/login
router.route("/login").post(login)

// @desc    Register a new user
// @route   POST /api/v1/auth/register
router.route("/register").post(register)

export default router;