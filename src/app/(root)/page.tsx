import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { urlFor } from "@/lib/sanity_client";
import { getBlogs } from "@/services/sanity";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const blogs: PartialBlog[] = await getBlogs();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {blogs.map((blog, idx) => {
        const imageurl = urlFor(blog.titleImage).url();
        return (
          <Card key={blog.currentSlug}>
            <Image
              src={imageurl}
              alt="blog image"
              className="rounded-t-lg h-[200px] w-full object-cover"
              width={500}
              height={500}
            />

            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{blog.title}</h3>
              <p className="text-sm line-clamp-3 mt-2 text-gray-400 dark:text-gray-300">
                {blog.description}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`blog/${blog.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
