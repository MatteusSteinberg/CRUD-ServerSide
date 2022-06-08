import nc from "next-connect"
import dbConnect from "../../lib/dbConnect"
import User from "../../models/User"

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack)
        res.status(500).end("Something broke!")
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found")
    },
}).post(async (req, res) => {
    const { firstName, lastName, username, role } = req.body

    await dbConnect()

    const user = new User({
        firstName,
        lastName,
        username,
        role,
    })
    await user.save()
    res.status(200).json({ success: true })
})
export default handler
