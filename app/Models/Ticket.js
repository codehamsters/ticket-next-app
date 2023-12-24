import mongoose, { Schema, mongo } from "mongoose";
import { NextResponse } from "next/server";

const connect = async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connection made successfully");
    })
    .catch((error) => {
      console.log("An error occurred!");
    });
};

connect();
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
