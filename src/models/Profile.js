import { Schema, models, model } from "mongoose";

const profileSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    price: { type: Number, required: true },
    realState: { type: String, required: true },
    category: { type: String, required: true, enum: ["villa", "apartment", "store", "office"]},
    constructionDate: { type: Date, required: true },
    facilities: { type: [String], dafault: [] },
    rules: { type: [String], dafault: [] },
    userId: { type: Schema.Types.ObjectId, ref: "Client" },
    published: { type: Boolean , default: false },
  },
  { timestamps: true }
);

const Profile = models.Profile || model ("Profile" , profileSchema)

export default Profile;