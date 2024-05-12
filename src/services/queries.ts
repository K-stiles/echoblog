export const getAllBlogs = `
*[_type == "blog"]| order(_createdAt desc)  {
  title,
  description,
  "currentSlug": slug.current,
  titleImage
}
`;

export const getBlogBySlug = `
*[_type == "blog" && slug.current ==  $slug]{
  title,
  content,
  titleImage,
  "currentSlug": slug.current
}[0]
`;
