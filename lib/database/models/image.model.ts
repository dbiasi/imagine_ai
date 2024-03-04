import { Document } from "mongodb";
import { Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string; // URL type is represented as string in TypeScript for the interface
  width?: number; // Optional property
  height?: number; // Optional property
  config?: object; // Consider specifying a more specific type if the object structure is known
  transformationUrl?: string; // Optional, URL type is represented as string in TypeScript for the interface
  aspectRation?: string; // Optional, but note there's a typo in your schema ("aspectRation" should probably be "aspectRatio")
  color?: string; // Optional property
  prompt?: string; // Optional property
  author: { _id: string; firstName: string; lastName: string }; // Assuming the ObjectId is represented as a string in TypeScript
  createdAt?: Date; // Optional, has a default value
  updatedAt?: Date; // Optional, has a default value
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRation: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
