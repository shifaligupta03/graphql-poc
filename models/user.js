import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  items: [
    {
      ref: "item",
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  ]
});

export default mongoose.model("user", UserSchema);
