import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        // username: String,
        // email: String,
        // isActive: Boolean   

        // It is exactly perfect but professionally big projects m aise hota h .

        username : {
            type: String,
            required: true,
            unique: true,
            lowecase: true
        }, 
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true
        },
        password: {
            type: String,
            required: true
        }
    } , {timestamps: true}
)



export const User = mongoose.model("User" , userSchema) // Ye do chize puchta h kya model bnau and kiske base pr bnau.

// Interview Ques - "User" ye database m jake kaise store hoga-> "users" singular se plural m ho jati h ye jb bhi is trh ka model bnega.

