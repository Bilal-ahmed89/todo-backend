import { User } from "../model/userSchema.js";



export const registerUser = async (req, res, next) => {

    const user = req.body;

    try {
        await User.create(user)
        res.json({
            message: 'The User has been registered'
        })
    } catch (err) {
        next(err)
    }
}

export const loginUser = async (req, res, next) => {

    const { username, password } = req.body;

    try {
      

    } catch (error) {
        next(error)
    }


}

