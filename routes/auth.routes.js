const { genSaltSync, compareSync } = require('bcryptjs');
const User = require('../models/User.model');
const router = require('express').Router();




router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    // encrypt password

    const salt = genSaltSync(11)
    const hashedPassword = hashSync(password, salt)

    // record to database

    await User.create({ username, hashedPassword })
    res.status(201).json({ message: 'User created' })
})


router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const currentUser = await User.findOneAndDelete({ username })

    console.log(currentUser)

    // checking if user exists

    if (currentUser) {
        // checking if password is correct
        if (compareSync(password, currentUser.hashedPassword)) {
            const userCopy = { ...currentUser._doc }
            delete userCopy.hashedPassword

            //  Generate token - JWT - (don't forget to put a secret in .env file)

            const authToken = jwt.sign(
                {
                    expiresIn: '6h',
                    userCopy,
                },
                process.env.TOKEN_SECRET,
                {
                    algorithm: 'HS256',
                }
            )

            res.status(200).json({ status: 200, token: authToken })
        } else {
            res.status(400).json({ message: 'Wrong password' })
        }
    } else {
        res.status(404).json({ message: 'No user with this username' })
    }
})



router.get('/verify', isAuthenticated, (req, res) => {
    // isAuthenticated middleware and made available on `req.payload`
    console.log(`req.payload`, req.payload)

    // sending back the object with user data
    // previously set as the token payload
    res.status(200).json({ payload: req.payload, message: 'Token OK' })
})

module.exports = router;
