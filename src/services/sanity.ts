import { client } from "@/lib/sanity_client";
import { getAllBlogs, getBlogBySlug } from "./queries";

export async function getBlogs(): Promise<PartialBlog[]> {
  return await client.fetch(getAllBlogs);
}

export async function getBlog(slug: string): Promise<Blog> {
  return await client.fetch(getBlogBySlug, { slug });
}

export async function addBlog() {}

export async function updateBlog() {}

export async function deleteBlog() {}
