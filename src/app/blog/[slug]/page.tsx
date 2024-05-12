import { urlFor } from "@/lib/sanity_client";
import { getBlog } from "@/services/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { FC } from "react";

interface BlogArticleProps {
  params: { slug: string };
}

const BlogArticle: FC<BlogArticleProps> = async ({ params }) => {
  const blog: Blog = await getBlog(params.slug);
  const imageurl = urlFor(blog.titleImage).url();

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-widxe uppercase">
          Kwaku Stiles Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {blog.title}
        </span>
      </h1>

      <Image
        src={imageurl}
        alt="blog image"
        width={800}
        height={800}
        priority
        className="mt-8 rounded-lg border"
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert">
        <PortableText value={blog.content} />
      </div>
    </div>
  );
};

export default BlogArticle;
