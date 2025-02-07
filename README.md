# Premium Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React Three Fiber, and Tailwind CSS. Features a stunning 3D hero section, interactive project showcase, and smooth animations.

![Portfolio Preview](https://sjc.microlink.io/fCjHacO8yr5WmVWNWvyvOsivSayOifq7YHP4DyA1KICiy7TmKfyKe1kJsA_wHqghyD0NkvdhOH7SyahGY34O_w.jpeg)

## 🌟 Features

- **3D Interactive Hero Section** - Eye-catching 3D elements using React Three Fiber
- **Dynamic GitHub Projects** - Automatically fetches and displays your latest GitHub repositories
- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark Mode Support** - Elegant dark mode implementation with system preference detection
- **Interactive UI** - Smooth animations and transitions using Framer Motion
- **Contact Form** - Integrated EmailJS for handling contact form submissions
- **Modern Tech Stack** - Built with Next.js 14, TypeScript, and Tailwind CSS

## 🚀 Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework for production
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Static type checking

2. Install dependencies:

```shellscript
cd premium-me
npm install
```


3. Create a `.env.local` file in the root directory and add your environment variables:

```plaintext
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```


4. Start the development server:

```shellscript
npm run dev
```




## 🔧 Configuration

1. Update your personal information in `app/layout.tsx`
2. Modify the GitHub username in `components/projects.tsx`
3. Configure EmailJS credentials in `components/contact.tsx`
4. Customize the skills list in `components/skills.tsx`


## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)


## 🎨 Customization

### Theme

You can customize the theme by modifying the `tailwind.config.ts` file. The default theme includes:

- Custom color schemes
- Typography settings
- Animation configurations
- Responsive breakpoints


### Components

All components are built using shadcn/ui and can be customized in the `components/ui` directory.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/saikothasan/premium-me/issues).

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com) and can be accessed at [premium-me.pages.dev](https://premium-me.pages.dev/).

## 📧 Contact

For any questions or feedback, please reach out through the contact form on the website or create an issue in the repository.

---

Built with ❤️ using [Next.js](https://nextjs.org/)
