const emptyProject = {
  name: "",
  description: "",
  liveLink: "",
  githubLink: "",
  thumbnail: "",
  tags: [],
  technologies: {
    frontend: [],
    backend: [],
    deployment: [],
  },
  keyFeatures: [],
  technicalChallenges: [],
  architecture: {
    description: "",
    diagram: "",
  },
  codeQuality: {
    standards: [],
    codeReviews: "",
  },
  deployment: {
    platform: "",
    ciCd: "",
  },
  lessonsLearned: [],
};

export const works1 = [
  {
    name: "AILogue",
    description:
      "AILogue is a platform that empowers users to create, share, and explore AI-powered dialogues. With a vibrant community and expert prompting guidance, users can discover new possibilities and connect with others who share their passion for AI content. ",
    liveLink: "https://aireader-six.vercel.app/",
    githubLink: "https://github.com/Anadudev/aireader",
    thumbnail: "/projects/work8.png",
    tags: [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 17],
    technologies: {
      frontend: [3, 4, 5, 6, 7, 10],
      backend: [1, 5, 6, 7, 8],
      deployment: [3, 4],
    },
    keyFeatures: [
      "Responsive design for mobile and desktop",
      "Complex modern ui with tailwind css",
      "Smooth scroll to anchor links",
      "Browser friendly animations",
      "Complex relational database design",
    ],
    technicalChallenges: [
      {
        challenge: "Sharing state across components",
        solution: "Implemented global state management using zustand",
      },
      {
        challenge: "Consistent and responsive design for mobile and desktop",
        solution:
          "Implemented responsive design using Tailwind CSS and Shadcn UI components.",
      },
      {
        challenge: "Handling Complex form inputs from users",
        solution:
          "Form validation and error handling using Zod and React Hook Form.",
      },
    ],
    architecture: {
      description:
        "Full-stack separated client-server architecture with Next.js for the frontend and Nest.js for the backend.",
      diagram: "",
    },
    codeQuality: {
      standards: [
        "Reusable UI components",
        "Airbnb JavaScript Style Guide",
        "Object Oriented Programming",
      ],
      codeReviews:
        "Regular code reviews performed for key components and features.",
    },
    deployment: {
      platform: "Vercel",
      ciCd: "GitHub, Vercel, and Render",
    },
    lessonsLearned: [
      "Deep understanding of complex relational database design.",
      "Improved experience in building complex relational database design.",
      "Improved skills in React.js and frontend development.",
      "Importance of mobile first design approach.",
      "Deep understanding complex form validation and error handling.",
      "Improved skills in Tailwind CSS and CSS.",
      "Improved understanding of route protection in the frontend.",
    ],
  },
  emptyProject,
  {
    name: "Chatty",
    description:
      "A real-time chat application built with React, Node.js, and Socket.io.",
    liveLink: "https://chat-app-e8jl.onrender.com/login",
    githubLink: "https://github.com/Anadudev/chatty",
    thumbnail: "/projects/work6.png",
    tags: [1, 2, 3, 5, 7, 12, 14, 15, 16],
    technologies: {
      frontend: [3, 4, 5, 7, 8],
      backend: [1, 2, 3, 4, 7, 8, 9],
      deployment: [4],
    },
    keyFeatures: [
      "Real-time messaging via Socket.io",
      "User authentication and authorization (JWT) and cookies",
      "Online/offline user status indicators",
      "Message history persistence",
      "Responsive design for mobile and desktop",
    ],
    technicalChallenges: [
      {
        challenge: "Consistent and responsive design for mobile and desktop",
        solution:
          "Implemented responsive design using Tailwind CSS and Daisy UI components.",
      },
      {
        challenge: "Real-time messaging via Socket.io",
        solution:
          "Implemented real-time messaging functionality using Socket.io.",
      },
      {
        challenge: "User authentication and authorization",
        solution:
          "Implemented user authentication and authorization using JWT.",
      },
      {
        challenge: "Online/offline user status indicators",
        solution:
          "Implemented online/offline user status indicators using Socket.io.",
      },
      {
        challenge: "Message history persistence",
        solution:
          "Implemented message history persistence using REST API for initial load from the server.",
      },
    ],
    architecture: {
      description:
        "Full-stack separated client-server architecture with React.js for the frontend and Node.js for the backend.",
      diagram: "/projects/chatty-architecture.png",
    },
    codeQuality: {
      standards: ["Reusable UI components", "Airbnb JavaScript Style Guide"],
      codeReviews: "Regular code reviews performed for key components.",
    },
    deployment: {
      platform: "Render",
    },
    lessonsLearned: [
      "Deep understanding of user authentication and authorization.",
      "Experience with building real-time chat applications.",
      "Improved skills in React.js and frontend development.",
      "Importance of writing unit tests and performing code reviews.",
      "Understanding and using Socket.io for real-time messaging.",
    ],
  },
  emptyProject,
  {
    name: "Creatify",
    description: "A fully responsive SAAS landing page for design token.",
    liveLink: "https://creatify-blond.vercel.app/",
    githubLink: "https://github.com/Anadudev/creatify",
    thumbnail: "/projects/work7.png",
    tags: [1, 2, 5, 7, 9, 16],
    technologies: {
      frontend: [3, 4, 5, 6, 7],
      backend: [],
      deployment: [3],
    },
    keyFeatures: [
      "Responsive design for mobile and desktop",
      "Complex modern ui with tailwind css",
    ],
    technicalChallenges: [
      {
        challenge: "Consistent and responsive design for mobile and desktop",
        solution:
          "Implemented responsive design using Tailwind CSS and Daisy UI components.",
      },
    ],
    architecture: {
      description: "Frontend-only architecture with Next.js.",
      diagram: "/projects/creatify-architecture.png",
    },
    codeQuality: {
      standards: ["Reusable UI components", "Airbnb JavaScript Style Guide"],
      codeReviews: "Regular code reviews performed for key components.",
    },
    deployment: {
      platform: "Vercel",
    },
    lessonsLearned: [
      "Deep understanding of complex dashboard layout.",
      "Experience with building dashboard we application UI.",
      "Improved skills in React.js and frontend development.",
      "Importance of mobile first design approach.",
    ],
  },
  emptyProject,
];

export const works2 = [
  {
    name: "MiraTends",
    description:
      "A comprehensive online market place where you can buy, sell and manage products with an integrated admin dashboard to manage your store.",
    motivation:
      "To learn and implement a complex e-commerce platform with a user-friendly interface and a robust admin dashboard.",
    role: "Solo Developer",
    targetAudience: "Users who want to buy and sell products online.",
    liveLink: "https://mira-trends.vercel.app/",
    // githubLink: "https://github.com/Anadudev/mira-tends",
    thumbnail: "/projects/work3.png",
    tags: [1, 2, 3, 4, 5, 7, 8, 9, 12, 14, 16, 17],
    technologies: {
      frontend: [3, 4, 5, 6, 7],
      backend: [1, 5, 6, 7],
      deployment: [3],
    },
    keyFeatures: [
      "User authentication and authorization (JWT)",
      "Product catalog with filtering and pagination",
      "Cart and checkout functionality",
      "Responsive design for mobile and desktop",
      "Admin dashboard for managing products and users",
      "Unauthenticated user cart functionality with local storage",
      "Order history and order details",
      "Order status indicators",
    ],
    technicalChallenges: [
      {
        challenge: "Consistent and responsive design for mobile and desktop",
        solution:
          "Implemented responsive design using Tailwind CSS and shadcn UI components.",
      },
      {
        challenge: "Cart and checkout functionality",
        solution:
          "Implemented optimized database queries for cart and checkout functionality.",
      },
      {
        challenge:
          "Consistent data migration from local storage to database on user authentication",
        solution:
          "Implemented a reusable asynchronous function with optimized algorithms.",
      },
      {
        challenge: "Handling relational data and database queries",
        solution: "Used Prisma ORM in combination with PostgreSQL.",
      },
    ],
    architecture: {
      description:
        "Full-stack client-server architecture with Next.js for both frontend and backend.",
      diagram: "/projects/miratends-architecture.png",
    },
    codeQuality: {
      standards: ["Reusable UI components", "Airbnb JavaScript Style Guide"],
      codeReviews: "Regular code reviews performed for key components.",
    },
    deployment: {
      platform: "Vercel",
      ciCd: "Integrated with GitHub Actions for continuous integration and deployment.",
    },
    lessonsLearned: [
      "Deep understanding of user authentication and authorization.",
      "Experience with building complex e-commerce platforms.",
      "Improved skills in React.js and frontend development.",
      "Importance of writing unit tests and performing code reviews.",
      "Understanding and using Prisma ORM for relational data and database queries.",
    ],
  },
  emptyProject,
  {
    name: "Legacy Perfume Store",
    description: "An online e-commerce platform for perfumes and fragrances.",
    liveLink: "https://shopatlegacy.com/",
    // githubLink: "#",
    thumbnail: "/projects/work2.jpg",
    tags: [1, 2, 3, 4, 5, 7, 8, 9, 12, 14, 16, 17],
    technologies: {
      frontend: [3, 4, 5, 6, 7],
      backend: [1, 5, 6, 7],
      deployment: [3],
    },
    keyFeatures: [
      "User authentication and authorization (JWT)",
      "Product catalog with filtering and pagination",
      "Cart and checkout functionality",
      "Responsive design for mobile and desktop",
      "Admin dashboard for managing products and users",
      "Unauthenticated user cart functionality with local storage",
      "Order history and order details",
      "Order status indicators",
    ],
    technicalChallenges: [
      {
        challenge: "Consistent and responsive design for mobile and desktop",
        solution:
          "Implemented responsive design using Tailwind CSS and shadcn UI components.",
      },
      {
        challenge: "Cart and checkout functionality",
        solution:
          "Implemented optimized database queries for cart and checkout functionality.",
      },
      {
        challenge:
          "Consistent data migration from local storage to database on user authentication",
        solution:
          "Implemented a reusable asynchronous function with optimized algorithms.",
      },
      {
        challenge: "Handling relational data and database queries",
        solution: "Used Prisma ORM in combination with PostgreSQL.",
      },
    ],
    architecture: {
      description:
        "Full-stack client-server architecture with Next.js for both frontend and backend.",
      diagram: "/projects/miratends-architecture.png",
    },
    codeQuality: {
      standards: ["Reusable UI components", "Airbnb JavaScript Style Guide"],
      codeReviews: "Regular code reviews performed for key components.",
    },
    deployment: {
      platform: "Vercel",
      ciCd: "Integrated with GitHub Actions for continuous integration and deployment.",
    },
    lessonsLearned: [
      "Deep understanding of user authentication and authorization.",
      "Experience with building complex e-commerce platforms.",
      "Improved skills in React.js and frontend development.",
      "Importance of writing unit tests and performing code reviews.",
      "Understanding and using Prisma ORM for relational data and database queries.",
    ],
  },
  emptyProject,
  {
    name: "Porthree",
    description:
      "A personal portfolio management website built with react, Django and Tailwind CSS.",
    liveLink: "https://porthree-app.vercel.app/",
    githubLink: "https://github.com/Anadudev/porthree",
    thumbnail: "/projects/work5.png",
    tags: [1, 2, 3, 5, 6, 7, 10, 12, 13, 16],
    technologies: {
      frontend: [3, 4, 5, 9],
      backend: [7, 8, 10, 11, 12],
      deployment: [3, 4],
    },
    keyFeatures: [
      "User authentication and authorization (JWT) and cookies",
      "Online/offline user status indicators",
      "Rich text editor for users' portfolio and blog posts",
      "Responsive design for mobile and desktop",
    ],
    technicalChallenges: [
      {
        challenge: "Consistent and responsive design for mobile and desktop",
        solution:
          "Implemented responsive design using MUI components and CSS in JS.",
      },
      {
        challenge: "User authentication and authorization",
        solution:
          "Implemented user authentication and authorization using JWT.",
      },
    ],
    architecture: {
      description:
        "Full-stack separated client-server architecture with React.js for the frontend and Django for the backend.",
      diagram: "/projects/porthree-architecture.png",
    },
    codeQuality: {
      standards: ["Reusable UI components", "Airbnb JavaScript Style Guide"],
      codeReviews: "Regular code reviews performed for key components.",
    },
    deployment: {
      platform: "Vercel",
    },
    lessonsLearned: [
      "Deep understanding of user authentication and authorization.",
      "Experience with building personal portfolio management applications.",
      "Improved skills in React.js and frontend development.",
      "Importance of writing unit tests and performing code reviews.",
      "Understanding and using Django for backend development.",
      "Understanding and using MUI for responsive design.",
      "Building REST APIs with Python Django.",
    ],
  },
  emptyProject,
  {
    name: "Anadu Portfolio",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS.",
    liveLink: "/",
    githubLink: "https://github.com/Anadudev/portfolio",
    thumbnail: "/projects/work1.png",
    tags: [1, 2, 5, 7, 9, 11, 16],
    technologies: {
      frontend: [3, 4, 5, 6, 7, 9],
      backend: [],
      deployment: [3],
    },
    keyFeatures: [
      "Responsive design for mobile and desktop",
      "Dark/Light mode toggle",
      "Smooth scroll to anchor links",
      "Browser friendly animations",
    ],
    technicalChallenges: [
      {
        challenge: "Consistent and responsive design for mobile and desktop",
        solution:
          "Implemented responsive design using Tailwind CSS and Daisy UI components.",
      },
    ],
    architecture: {
      description: "Frontend-only architecture with Next.js.",
      diagram: "/projects/portfolio-architecture.png",
    },
    codeQuality: {
      standards: ["Reusable UI components", "Airbnb JavaScript Style Guide"],
      codeReviews: "Regular code reviews performed for key components.",
    },
    deployment: {
      platform: "Vercel",
    },
  },
  emptyProject,
  {
    name: "Workgen dashboard",
    description: "A mobile responsive CRM dashboard page .",
    liveLink: "https://workgen.vercel.app/leads",
    githubLink: "https://github.com/Anadudev/workgen",
    thumbnail: "/projects/works4.png",
    tags: [1, 2, 5, 7, 9, 16, 18],
    technologies: {
      frontend: [3, 4, 5, 6, 7, 9],
      backend: [],
      deployment: [3],
    },
    keyFeatures: [
      "Responsive design for mobile and desktop",
      "Complex modern ui with tailwind css",
    ],
    technicalChallenges: [
      {
        challenge: "Consistent and responsive design for mobile and desktop",
        solution:
          "Implemented responsive design using Tailwind CSS and Daisy UI components.",
      },
    ],
    architecture: {
      description: "Frontend-only architecture with Next.js.",
      diagram: "/projects/workgen-architecture.png",
    },
    codeQuality: {
      standards: ["Reusable UI components", "Airbnb JavaScript Style Guide"],
      codeReviews: "Regular code reviews performed for key components.",
    },
    deployment: {
      platform: "Vercel",
    },
    lessonsLearned: [
      "Deep understanding of complex dashboard layout.",
      "Experience with building dashboard we application UI.",
      "Improved skills in React.js and frontend development.",
      "Importance of mobile first design approach.",
    ],
  },
  emptyProject,
];

export const allWorks = [...works1, ...works2];
