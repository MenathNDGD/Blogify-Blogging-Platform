"use server";

import { CreateBlogParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Blog from "../database/models/blog.model";

export const createBlog = async ({ blog, userId, path }: CreateBlogParams) => {
  try {
    await connectToDatabase();

    const blogger = await User.findById(userId);

    if (!blogger) {
      throw new Error("Blogger not found");
    }

    const newBlog = await Blog.create({
      ...blog,
      category: blog.categoryId,
      blogger: userId,
    });

    return JSON.parse(JSON.stringify(newBlog));
  } catch (error) {
    handleError(error);
  }
};
