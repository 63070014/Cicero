const express = require("express")
const pool = require("../config")
const Joi = require('joi')
const { generateToken } = require("../utils/token");
const bcrypt = require('bcrypt');
// const { isLoggedIn } = require('../middlewares')

router = express.Router();

// const passwordValidator = (value, helpers) => {
//     if (value.length < 8) {
//         throw new Joi.ValidationError('Password must contain at least 8 characters')
//     }
//     if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
//         throw new Joi.ValidationError('Password must be harder')
//     }
//     return value
// }

// const usernameValidator = async (value, helpers) => {
//     const [rows, _] = await pool.query("SELECT username FROM users WHERE username = ?", [value])
//     if (rows.length > 0) {
//         const message = 'This username is already taken'
//         throw new Joi.ValidationError(message, { message })
//     }
//     return value
// }

const signupSchema = Joi.object({
    firstname: Joi.string().required().max(150),
    lastname: Joi.string().required().max(150),
    birth_date: Joi.date().required(),
    phone: Joi.string().required().pattern(/0[0-9]{9}/),
    email: Joi.string().required().email(),
    password: Joi.string().required()
    // confirm_password: Joi.string().required().valid(Joi.ref('password')),
})

router.post('/user/signup', async (req, res, next) => {
    try {
        await signupSchema.validateAsync(req.body, { abortEarly: false })
    } catch (err) {
        return res.status(400).send(err)
    }

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const birth_date = req.body.birth_date
    const phone = req.body.phone
    const email = req.body.email
    const password = await bcrypt.hash(req.body.password, 5)
    const user_img = ""

    try {
        await conn.query(
            'INSERT INTO users(firstname, lastname, birth_date, phone, email, password, user_img) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [firstname, lastname, birth_date, phone, email, password, user_img]
        )
        conn.commit()
        res.status(201).send("eiei")
    } catch (err) {
        conn.rollback()
        res.status(400).json(err.toString());
    } finally {
        conn.release()
    }
})
const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})

router.post('/user/login', async (req, res, next) => {
    try {
        await loginSchema.validateAsync(req.body, { abortEarly: false })
    } catch (err) {
        return res.status(400).send(err)
    }
    const email = req.body.email
    const password = req.body.password

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
        // Check if username is correct
        const [users] = await conn.query(
            'SELECT * FROM users WHERE email=?', 
            [email]
        )
        const user = users[0]
        console.log(user);
        if (!user) {    
            throw new Error('Incorrect username or password')
        }

        if (!(await bcrypt.compare(password, user.password))) {
            throw new Error('Incorrect username or password')
        }
        res.status(200).json(user)
        conn.commit()
    } catch (error) {
        conn.rollback()
        res.status(400).json(error.toString())
    } finally {
        conn.release()
    }
})
// router.get('/user/me', isLoggedIn, async (req, res, next) => {
//     // req.user ถูก save ข้อมูล user จาก database ใน middleware function "isLoggedIn"
//     res.json(req.user)
// })





exports.router = router