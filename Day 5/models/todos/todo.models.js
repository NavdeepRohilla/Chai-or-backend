import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,    // Jb bhhi ye mongoose me dikhta h iska mtlb hota h aap kisi na kisi chiz ka reference dena chahte ho.
            ref: "User"
        },
        subtodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ] // Array of Sub-Todos
    } , {timestamps: true})



export const Todo = mongoose.model("Todo" , todoSchema)