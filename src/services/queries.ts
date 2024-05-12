import { groq } from "next-sanity";

export const getAllBlogs = groq`
*[_type == "blog"]| order(_createdAt desc)  {
  title,
  description,
  "currentSlug": slug.current,
  titleImage
}
`;

export const getBlogBySlug = groq`
*[_type == "blog" && slug.current ==  $slug]{
  title,
  content,
  titleImage,
  "currentSlug": slug.current
}[0]
`;
