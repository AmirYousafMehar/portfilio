// Mock data for project showcase
// In a real application, this would be fetched from a database or CMS

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  category: string;
  technologies: string[];
  features: string[];
  process: string;
  challenges: string;
  outcomes: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    slug: 'e-commerce-platform',
    description: 'A fully-featured e-commerce platform with product listing, cart, checkout, and user authentication.',
    coverImage: 'https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg',
    category: 'Web',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    features: [
      'User authentication and profile management',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Payment integration with Stripe',
      'Order tracking and history',
      'Admin dashboard for inventory management'
    ],
    process: 'I started by designing the database schema and API endpoints, followed by implementing the backend using Node.js and Express. Then I built the frontend with React, focusing on creating a smooth user experience from browsing to checkout.',
    challenges: 'Integrating the payment system and ensuring a secure checkout process was challenging. I had to carefully implement proper validation and error handling to prevent issues during the payment flow.',
    outcomes: 'The platform increased sales by 30% for the client and provided a much better user experience compared to their previous solution. The admin dashboard significantly reduced the time spent managing inventory.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    slug: 'task-management-app',
    description: 'A Kanban-style task management application for teams to track projects and collaborate efficiently.',
    coverImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    category: 'Web',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    features: [
      'Drag-and-drop task management',
      'Real-time updates using Firebase',
      'Team collaboration features',
      'Task commenting and attachments',
      'Due date tracking and notifications',
      'Customizable workflows'
    ],
    process: "I used React with TypeScript for type safety, and Firebase for real-time database functionality. I implemented a drag-and-drop interface for intuitive task management, and ensured all changes sync instantly across team members.",
    challenges: 'Implementing the real-time synchronization while maintaining a smooth user experience was the biggest challenge. I had to carefully optimize database reads and writes to prevent performance issues.',
    outcomes: 'The app was well-received by users, with feedback highlighting the intuitive interface and seamless collaboration features. It\'s currently being used by several teams to manage their projects.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 3,
    title: 'Fitness Tracking Mobile App',
    slug: 'fitness-tracking-app',
    description: 'A mobile application for tracking workouts, nutrition, and fitness progress with personalized plans.',
    coverImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    category: 'Mobile',
    technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    features: [
      'Workout tracking and planning',
      'Nutrition and meal planning',
      'Progress tracking with charts',
      'Custom workout routines',
      'Integration with wearable devices',
      'Social sharing features'
    ],
    process: 'I developed this cross-platform app using React Native, with a Node.js backend to handle user data and authentication. I focused on creating a clean, intuitive interface that makes tracking fitness data simple.',
    challenges: 'Creating a reliable synchronization system between the mobile app and the backend was challenging, especially for offline usage scenarios. I implemented a sophisticated queueing system for data uploads when connectivity is restored.',
    outcomes: 'The app has over 10,000 active users and has helped many people achieve their fitness goals. User feedback has been overwhelmingly positive, particularly regarding the ease of use and comprehensive tracking features.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 4,
    title: 'Real-time Chat Application',
    slug: 'real-time-chat-app',
    description: 'A modern chat application with real-time messaging, file sharing, and group conversations.',
    coverImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    category: 'Web',
    technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Real-time messaging with typing indicators',
      'File and image sharing',
      'Group chats and direct messages',
      'Read receipts',
      'User presence indicators',
      'Message search and history'
    ],
    process: 'I built this application using Next.js for the frontend and Socket.io for real-time communication. MongoDB was used to store message history and user data.',
    challenges: 'Ensuring message delivery and maintaining connection stability across different network conditions was challenging. I implemented a robust system for message acknowledgment and retry logic for failed message delivery.',
    outcomes: 'The application is now used by several small businesses for internal communication, replacing their previous tools. Users appreciate the clean interface and reliable message delivery.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 5,
    title: 'AI-Powered Content Generator',
    slug: 'ai-content-generator',
    description: 'A tool that uses AI to generate marketing content, blog posts, and social media updates based on user prompts.',
    coverImage: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg',
    category: 'Web',
    technologies: ['React', 'OpenAI API', 'Node.js', 'Express'],
    features: [
      'Content generation from simple prompts',
      'Multiple content formats (blog posts, social media, etc.)',
      'Content editing and refinement',
      'Content calendar planning',
      'Brand voice customization',
      'Export to various platforms'
    ],
    process: 'I integrated the OpenAI API with a React frontend to create an intuitive interface for generating and editing content. The backend handles API calls and user authentication.',
    challenges: 'Working with AI model responses required careful prompt engineering and result parsing. I had to develop sophisticated methods to ensure the generated content was relevant and high-quality.',
    outcomes: 'The tool has helped marketing teams reduce content creation time by up to 60%, allowing them to focus more on strategy and less on writing. It\'s particularly popular with small businesses that lack dedicated content teams.',
    githubUrl: 'https://github.com'
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    slug: 'analytics-dashboard',
    description: 'A comprehensive analytics dashboard for businesses to monitor performance metrics and visualize data.',
    coverImage: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg',
    category: 'Web',
    technologies: ['Vue.js', 'D3.js', 'Python', 'Flask', 'PostgreSQL'],
    features: [
      'Real-time data visualization',
      'Customizable dashboard widgets',
      'Data filtering and segmentation',
      'Report generation and export',
      'User permission management',
      'Data source integration'
    ],
    process: 'I used Vue.js and D3.js to create interactive visualizations, with a Python/Flask backend for data processing and API endpoints. PostgreSQL was used for data storage.',
    challenges: 'Handling large datasets while maintaining dashboard performance was a significant challenge. I implemented data aggregation and caching strategies to ensure fast loading times even with substantial data volumes.',
    outcomes: 'The dashboard has helped businesses make more data-driven decisions by providing clear visualizations of key metrics. Users particularly value the customization options and the ability to export reports for stakeholders.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}