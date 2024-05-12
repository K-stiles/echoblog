# 📖 Echo Journal

Echo Journal is a simple blog app built with Next.js, Tailwind CSS, and Sanity CMS.

## 🪂 Features

- **Next.js**: Utilizes the power of Next.js for server-side rendering, routing, and more.
- **Tailwind CSS**: Uses Tailwind CSS for rapid UI development with utility-first CSS.
- **Sanity CMS**: Content management system for managing blog posts and content.

## ⚖️ Setup

### Prerequisites

- Node.js (>=20.x)
- pnpm

### Installation

1. Clone the repository:

```
git clone https://github.com/K-stiles/echojournal.git
cd echojournale
```

2. Install dependencies:

```
pnpm install
```

3. Set up Sanity CMS:

   - Sign up for a free account on [Sanity.io](https://www.sanity.io/).
   - Create a new Sanity project.
   - Follow the [official documentation](https://www.sanity.io/docs) to set up your Sanity project and schema.

4. Set up environment variables:

   Create a `.env.local` file in the root directory of the project and add the following:

   ```
   SANITY_PROJECT_ID=your_project_id
   SANITY_DATASET=your_dataset_name
   ```

   Replace `your_project_id` and `your_dataset_name` with your actual Sanity project ID and dataset name.

### 🧑🏽‍🚒 Development

Run the development server:

```
pnpm run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 🚀 Deployment

Deploy your Next.js app using your preferred hosting platform. Make sure to set up environment variables for production as well.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
