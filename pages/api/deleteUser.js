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
    await dbConnect()
console.log(req.body)
    await User.findByIdAndDelete(req.body.id)
    res.status(200).json({ success: true, msg: 'User deleted' })
})
export default handler 