export default {
  title: 'Echo Journal Blog',
  name: 'blog',
  type: 'document',
  fields: [
    {
      // type = string gives you a normal text input
      name: 'title',
      type: 'string',
      title: 'blog title',
    },
    {
      // type = slug gives you a slug input
      name: 'slug',
      type: 'slug',
      title: 'blog slug',
      // options object allows you to set your blog title as the source to generate thes slug name from.
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      // type = image gives you an image input
      name: 'titleImage',
      type: 'image',
      title: 'blog  Image',
    },
    {
      // type = text gives you a textarea input
      name: 'description',
      type: 'text',
      title: 'blog  description',
    },
    {
      // type = array and the of = [{type: 'block'}] gives you a rich text-editor
      name: 'content',
      type: 'array',
      title: 'content',
      of: [{type: 'block'}], // rich text-editor
    },
  ],
}
