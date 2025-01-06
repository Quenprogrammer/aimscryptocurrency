import { Component } from '@angular/core';

@Component({
  selector: 'app-frame-works',
  standalone: true,
  imports: [],
  templateUrl: './frame-works.component.html',
  styleUrl: './frame-works.component.scss'
})
export class FrameWorksComponent {
   frameworks = [
    {
      name: "React",
      logo: "https://reactjs.org/logo-og.png",
      websiteLink: "https://reactjs.org",
      description: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces, mainly for single-page applications. It allows developers to build reusable UI components that manage their own state.",
      uses: "Web development, single-page applications (SPAs).",
      rating: 4.8,
      globalUsage: "70%"
    },
    {
      name: "Angular",
      logo: "https://angular.io/assets/images/logos/angular/angular.png",
      websiteLink: "https://angular.io",
      description: "Angular is a platform and framework for building client-side applications using HTML, CSS, and TypeScript. It is designed to make it easier to build single-page applications (SPAs) and large-scale enterprise applications.",
      uses: "Web development, enterprise-level applications.",
      rating: 4.5,
      globalUsage: "45%"
    },
    {
      name: "Vue.js",
      logo: "https://vuejs.org/images/logo.png",
      websiteLink: "https://vuejs.org",
      description: "Vue.js is a progressive JavaScript framework for building modern user interfaces. It is known for its simplicity, flexibility, and high performance, allowing developers to scale from small to large applications with ease.",
      uses: "Web development, SPAs, interactive UIs.",
      rating: 4.7,
      globalUsage: "40%"
    },
    {
      name: "Svelte",
      logo: "https://svelte.dev/svelte-logo-horizontal.svg",
      websiteLink: "https://svelte.dev",
      description: "Svelte is a modern JavaScript framework that compiles your components into highly optimized vanilla JavaScript code, eliminating the need for a virtual DOM, resulting in faster performance and smaller bundles.",
      uses: "Web development, SPAs, lightweight apps.",
      rating: 4.6,
      globalUsage: "10%"
    },
    {
      name: "Next.js",
      logo: "https://nextjs.org/static/favicon/favicon.ico",
      websiteLink: "https://nextjs.org",
      description: "Next.js is a powerful React framework for building server-rendered or statically generated websites. It enables easy routing, static site generation, server-side rendering, and optimized performance.",
      uses: "Web development, server-side rendering (SSR), static sites.",
      rating: 4.9,
      globalUsage: "25%"
    },
    {
      name: "Nuxt.js",
      logo: "https://nuxtjs.org/meta_400.png",
      websiteLink: "https://nuxtjs.org",
      description: "Nuxt.js is a framework for Vue.js that enables developers to create universal applications with automatic server-side rendering and static site generation.",
      uses: "SSR, static site generation (SSG).",
      rating: 4.6,
      globalUsage: "10%"
    },
    {
      name: "Express",
      logo: "https://expressjs.com/images/express-facebook-share.png",
      websiteLink: "https://expressjs.com",
      description: "Express.js is a fast, unopinionated, and minimal Node.js framework for building web servers and APIs. It provides a robust set of features for web and mobile applications.",
      uses: "Web servers, APIs, backend services.",
      rating: 4.8,
      globalUsage: "60%"
    },
    {
      name: "NestJS",
      logo: "https://nestjs.com/img/logo_text.svg",
      websiteLink: "https://nestjs.com",
      description: "NestJS is a progressive Node.js framework that uses TypeScript by default, built for building efficient, scalable, and reliable server-side applications, particularly for microservices and APIs.",
      uses: "Server-side applications, APIs, microservices.",
      rating: 4.7,
      globalUsage: "15%"
    },
    {
      name: "Laravel",
      logo: "https://laravel.com/img/logotype.min.svg",
      websiteLink: "https://laravel.com",
      description: "Laravel is a PHP framework for web artisans that provides an elegant syntax for web development. It includes powerful tools for routing, authentication, database migrations, and more.",
      uses: "Web development, APIs, backend services.",
      rating: 4.8,
      globalUsage: "40%"
    },
    {
      name: "Django",
      logo: "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
      websiteLink: "https://www.djangoproject.com",
      description: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It provides an easy way to build secure and scalable web applications.",
      uses: "Web development, backend services, REST APIs.",
      rating: 4.7,
      globalUsage: "35%"
    },
    {
      name: "Ruby on Rails",
      logo: "https://rubyonrails.org/images/rails-logo.svg",
      websiteLink: "https://rubyonrails.org",
      description: "Ruby on Rails is a full-stack web application framework written in Ruby, following the convention over configuration philosophy to make development faster and more enjoyable.",
      uses: "Web development, rapid prototyping, full-stack apps.",
      rating: 4.5,
      globalUsage: "20%"
    },
    {
      name: "Flask",
      logo: "https://flask.palletsprojects.com/en/2.0.x/_images/flask-logo.png",
      websiteLink: "https://flask.palletsprojects.com",
      description: "Flask is a lightweight Python web framework designed to be simple and flexible, making it ideal for building small to medium-sized applications and APIs.",
      uses: "Microservices, REST APIs, lightweight apps.",
      rating: 4.6,
      globalUsage: "25%"
    },
    {
      name: "Spring",
      logo: "https://spring.io/images/spring-logo-2021-dark.svg",
      websiteLink: "https://spring.io",
      description: "Spring is a comprehensive framework for Java-based enterprise applications, offering a wide range of features for building everything from microservices to large-scale applications.",
      uses: "Enterprise applications, backend development.",
      rating: 4.7,
      globalUsage: "40%"
    },
    {
      name: "ASP.NET Core",
      logo: "https://dotnet.microsoft.com/static/images/brand/net-core.png",
      websiteLink: "https://dotnet.microsoft.com/apps/aspnet",
      description: "ASP.NET Core is a cross-platform, high-performance framework for building modern web applications and APIs. It supports cloud-native development and is optimized for speed.",
      uses: "Web apps, APIs, enterprise-level solutions.",
      rating: 4.6,
      globalUsage: "30%"
    },
    {
      name: "Flutter",
      logo: "https://flutter.dev/assets/flutter-logo-sharing-478b6f9c7c2e801946d5b8dd573e6c8a9e506a8af76d3c3b84da1e488a3c5bc1.png",
      websiteLink: "https://flutter.dev",
      description: "Flutter is a UI toolkit developed by Google for building natively compiled applications for mobile, web, and desktop from a single codebase, enabling fast development and expressive UIs.",
      uses: "Mobile apps, web apps, cross-platform development.",
      rating: 4.8,
      globalUsage: "30%"
    },
    {
      name: "Bootstrap",
      logo: "https://getbootstrap.com/docs/5.0/assets/img/bootstrap-logo.svg",
      websiteLink: "https://getbootstrap.com",
      description: "Bootstrap is a front-end framework that provides pre-designed UI components and responsive design principles for building fast and mobile-first web applications.",
      uses: "Responsive web design, UI components.",
      rating: 4.5,
      globalUsage: "60%"
    },
    {
      name: "Tailwind CSS",
      logo: "https://tailwindcss.com/_next/static/media/logo-dark.78865d33.svg",
      websiteLink: "https://tailwindcss.com",
      description: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs quickly and efficiently, with a focus on flexibility and responsiveness.",
      uses: "Customizable UI designs, responsive layouts.",
      rating: 4.7,
      globalUsage: "50%"
    },
    {
      name: "jQuery",
      logo: "https://jquery.com/jquery-logo.svg",
      websiteLink: "https://jquery.com",
      description: "jQuery is a fast, small, and feature-rich JavaScript library that simplifies DOM manipulation, event handling, and AJAX requests, making it easier to develop interactive web pages.",
      uses: "DOM manipulation, animations, AJAX requests.",
      rating: 4.4,
      globalUsage: "40%"
    },
    {
      name: "Gatsby",
      logo: "https://www.gatsbyjs.com/static/og-image-f9f2047b9de4f3ea7e79d635e5b1c850.png",
      websiteLink: "https://www.gatsbyjs.com",
      description: "Gatsby is a React-based framework for building static websites and applications. It enables fast, optimized static site generation and offers rich plugin integrations for modern web development.",
      uses: "Static site generation, modern web development.",
      rating: 4.7,
      globalUsage: "15%"
    },
    {
      name: "Meteor",
      logo: "https://www.meteor.com/images/logos/meteor-4.png",
      websiteLink: "https://www.meteor.com",
      description: "Meteor is a full-stack JavaScript platform for building real-time web applications. It offers an integrated environment for developing, testing, and deploying applications.",
      uses: "Real-time apps, web development.",
      rating: 4.3,
      globalUsage: "10%"
    },
    {
      name: "Pyramid",
      logo: "https://docs.pylonsproject.org/projects/pyramid/en/latest/_images/pyramid-logo.png",
      websiteLink: "https://trypyramid.com",
      description: "Pyramid is a lightweight, flexible Python web framework that allows developers to build a wide variety of web applications, from simple to complex systems.",
      uses: "Web applications, REST APIs.",
      rating: 4.6,
      globalUsage: "5%"
    },
    {
      name: "CakePHP",
      logo: "https://cakephp.org/images/cakephp-logo.png",
      websiteLink: "https://cakephp.org",
      description: "CakePHP is a PHP framework for building modern web applications. It offers powerful tools for rapid development with a focus on convention over configuration.",
      uses: "Web applications, MVC architecture.",
      rating: 4.5,
      globalUsage: "20%"
    },
    {
      name: "CodeIgniter",
      logo: "https://codeigniter.com/assets/images/logo-header.png",
      websiteLink: "https://codeigniter.com",
      description: "CodeIgniter is a powerful PHP framework for building dynamic web applications. It provides a rich set of libraries and helpers to simplify the development process.",
      uses: "Web development, APIs, MVC framework.",
      rating: 4.4,
      globalUsage: "30%"
    },
    {
      name: "Hapi.js",
      logo: "https://hapi.dev/static/favicon.ico",
      websiteLink: "https://hapi.dev",
      description: "Hapi.js is a rich framework for building applications and services in Node.js. It offers powerful features for building scalable and secure web services.",
      uses: "Web services, APIs, RESTful architecture.",
      rating: 4.5,
      globalUsage: "15%"
    },
    {
      name: "Quasar",
      logo: "https://quasar.dev/quasar-logo.png",
      websiteLink: "https://quasar.dev",
      description: "Quasar is a Vue.js framework for building cross-platform applications, including responsive web apps, mobile apps, and Electron apps, with a unified development process.",
      uses: "Cross-platform applications, web apps.",
      rating: 4.7,
      globalUsage: "10%"
    },
    {
      name: "Foundation",
      logo: "https://get.foundation/sites/docs/assets/images/logos/foundation-logo.svg",
      websiteLink: "https://get.foundation",
      description: "Foundation is a responsive front-end framework for building websites and apps. It includes a set of customizable UI components and layouts for building mobile-first web applications.",
      uses: "Responsive web design, mobile-first design.",
      rating: 4.4,
      globalUsage: "20%"
    },
    {
      name: "Alpine.js",
      logo: "https://alpinejs.dev/images/alpine-logo.svg",
      websiteLink: "https://alpinejs.dev",
      description: "Alpine.js is a minimal JavaScript framework for adding interactivity to HTML. It provides reactive data binding and component-based architecture in a lightweight and easy-to-use package.",
      uses: "Frontend, small interactive components.",
      rating: 4.6,
      globalUsage: "5%"
    }
  ];
}
