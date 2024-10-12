"use server";

import { CreateBlogParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "@/lib/database/models/user.model";
import Blog from "@/lib/database/models/blog.model";
import { revalidatePath } from "next/cache";

export async function createBlog({ userId, blog, path }: CreateBlogParams) {
  try {
    await connectToDatabase();

    const blogger = await User.findById(userId);

    if (!blogger) throw new Error("Blogger not found");

    const newBlog = await Blog.create({
      ...blog,
      category: blog.categoryId,
      blogger: userId,
    });

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newBlog));
  } catch (error) {
    handleError(error);
  }
}
