import { Document, model, models, Schema } from "mongoose";

export interface IBlog extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  readingTime: number;
  publishedDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string };
  blogger: { _id: string; firstName: string; lastName: string };
}

const BlogSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  readingTime: { type: Number, required: true },
  publishedDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  blogger: { type: Schema.Types.ObjectId, ref: "User" },
});

const Blog = models?.Blog || model("Blog", BlogSchema);

export default Blog;
