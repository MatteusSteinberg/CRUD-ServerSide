import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
    },
    role: {
        type: String,
    },
})

export default mongoose.models.User || mongoose.model("User", UserSchema, "User")
