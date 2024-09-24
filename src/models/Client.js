import { Schema, models, model } from "mongoose";

const clientSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "USER" },
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
});

const Client = models.Client || model("Client", clientSchema);

export default Client;
