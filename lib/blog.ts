// Mock data for blog posts
// In a real application, this would be fetched from a database or CMS

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  readTime: number;
  excerpt: string;
  coverImage: string;
  content: string[];
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable Web Applications with React and Node.js',
    slug: 'building-scalable-web-applications',
    date: 'June 15, 2023',
    readTime: 8,
    excerpt: 'Learn how to architect and build scalable web applications using React for the frontend and Node.js for the backend.',
    coverImage: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
    content: [
      'Modern web applications need to be scalable, maintainable, and performant. In this article, I\'ll share my approach to building such applications using React and Node.js.',
      
      'React has become the go-to library for building user interfaces due to its component-based architecture and efficient rendering through the virtual DOM. When paired with Node.js on the backend, you can create full-stack JavaScript applications that are powerful and efficient.',
      
      'First, let\'s talk about frontend architecture. I recommend organizing your React applications using a feature-based approach rather than splitting by technical concerns. This means grouping components, hooks, utilities, and tests by the features they support, making it easier to understand and maintain the codebase as it grows.',
      
      'State management is another critical aspect of scalable applications. While Redux has been the standard for years, consider newer solutions like React Query for data fetching and caching, combined with Context API for UI state. This approach leads to cleaner code with less boilerplate.',
      
      'On the backend, a well-structured Node.js application should follow clean architecture principles, separating concerns into layers: controllers for handling HTTP requests, services for business logic, and repositories for data access.',
      
      'API design is crucial for scalability. REST is still widely used, but GraphQL offers more flexibility by allowing clients to request exactly the data they need. This can significantly reduce bandwidth usage and improve performance, especially for mobile applications.',
      
      'For database interactions, consider using an ORM like Prisma or TypeORM with TypeScript to ensure type safety throughout your application, from database to frontend.',
      
      'Authentication and authorization are complex but essential components. JWT (JSON Web Tokens) combined with refresh tokens offers a secure approach for modern applications, especially when implemented with proper security considerations.',
      
      'Finally, don\'t forget about testing and CI/CD. A comprehensive test suite with unit, integration, and end-to-end tests, combined with automated deployments, ensures your application remains stable as it evolves.',
      
      'By following these principles, you can build web applications that not only perform well at launch but can scale effectively as your user base and feature set grow.'
    ],
    tags: ['React', 'Node.js', 'Web Development', 'Architecture']
  },
  {
    id: 2,
    title: 'The Impact of TypeScript on Team Productivity',
    slug: 'typescript-team-productivity',
    date: 'July 23, 2023',
    readTime: 6,
    excerpt: 'How adopting TypeScript can improve code quality, reduce bugs, and increase overall team productivity in software projects.',
    coverImage: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
    content: [
      'TypeScript has transformed from an optional addition to a must-have tool in modern JavaScript development. In this article, I\'ll discuss how TypeScript has impacted my team\'s productivity and code quality based on our experiences over the last three years.',
      
      'When we first considered adopting TypeScript, there was significant resistance. Developers were concerned about the learning curve, additional setup time, and whether the benefits would outweigh the costs. These concerns are valid, but our experience has shown that the initial investment pays substantial dividends.',
      
      'The most immediate benefit we observed was catching errors before runtime. TypeScript\'s static type checking identified many potential bugs during development that would have otherwise made it to production. This alone reduced our bug-related incidents by approximately 40% in the first six months.',
      
      'Beyond error prevention, TypeScript dramatically improved our developer experience. Code navigation, autocompletion, and refactoring became more powerful with accurate type information. Tasks that previously required careful manual checking could now be automated with confidence.',
      
      'For new team members, TypeScript served as built-in documentation. Type definitions made it clear how functions should be used and what data structures looked like without needing extensive written documentation. This reduced onboarding time and helped maintain consistency across the codebase.',
      
      'Another significant advantage came during major refactoring efforts. When changing core interfaces or data structures, TypeScript immediately highlighted all affected areas that needed updates. This prevented the all-too-common scenario of discovering broken code in production after a large refactoring.',
      
      'That said, TypeScript is not without challenges. Finding the right balance of type strictness took time. Too lenient, and we missed the benefits; too strict, and development became cumbersome. We eventually settled on a gradually increasing strictness approach, starting with basic types and adding more advanced features as the team became comfortable.',
      
      'Integration with third-party libraries was occasionally problematic, especially for less popular packages without good type definitions. Creating and maintaining our own type definitions added some overhead.',
      
      'Despite these challenges, the overall impact on productivity has been overwhelmingly positive. Our deployment failures decreased by 38%, while feature delivery speed increased after the initial adoption period. The codebase is more maintainable, and developers report higher confidence when making changes.',
      
      'For teams considering TypeScript, I recommend a gradual adoption strategy starting with new features or bounded contexts rather than attempting to convert an entire codebase at once. Invest in team training and establish coding standards specific to TypeScript to maximize the benefits.'
    ],
    tags: ['TypeScript', 'JavaScript', 'Team Productivity', 'Code Quality']
  },
  {
    id: 3,
    title: 'Implementing Authentication in React Applications',
    slug: 'react-authentication-implementation',
    date: 'August 10, 2023',
    readTime: 10,
    excerpt: 'A comprehensive guide to implementing secure authentication in React applications using modern best practices.',
    coverImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    content: [
      'Authentication is a fundamental aspect of most web applications, yet implementing it securely and effectively remains challenging. In this guide, I\'ll walk through a modern approach to authentication in React applications.',
      
      'Let\'s start by understanding the key components of authentication: user identification, secure credential validation, session management, and protected route access. Each component requires careful implementation to create a secure system.',
      
      'For modern React applications, there are several authentication approaches: JWT (JSON Web Tokens), session cookies, OAuth/OpenID Connect, or specialized authentication services. Each has its strengths, but I\'ll focus on the JWT approach as it\'s widely used in React SPAs.',
      
      'The foundation of our authentication system begins with proper user registration and login forms. These should implement client-side validation for user experience, but never rely on it for security. Always validate on the server. For React, libraries like Formik or React Hook Form provide excellent form management capabilities.',
      
      'When implementing JWT authentication, we need to handle token storage, validation, and refresh mechanisms. LocalStorage is convenient but vulnerable to XSS attacks, while HttpOnly cookies offer better security against XSS but require additional CSRF protections. A recommended approach is using memory storage combined with a refresh token in an HttpOnly cookie.',
      
      'Here\'s a simplified example of an authentication context in React:',
      
      '```jsx\nconst AuthContext = React.createContext();\n\nfunction AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  async function login(credentials) {\n    setLoading(true);\n    try {\n      const response = await api.post(\'/auth/login\', credentials);\n      setUser(response.data.user);\n      // Store access token in memory\n      api.setToken(response.data.token);\n      return response.data.user;\n    } catch (error) {\n      throw new Error(error.response?.data?.message || \'Failed to login\');\n    } finally {\n      setLoading(false);\n    }\n  }\n\n  // Additional auth methods...\n\n  useEffect(() => {\n    // On mount, check if user is already logged in\n    checkAuth();\n  }, []);\n\n  return (\n    <AuthContext.Provider value={{ user, login, logout, loading }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n```',
      
      'Protected routes are essential for controlling access to authenticated content. In React Router, we can create a PrivateRoute component:',
      
      '```jsx\nfunction PrivateRoute({ children }) {\n  const { user, loading } = useAuth();\n  const location = useLocation();\n\n  if (loading) return <LoadingSpinner />;\n\n  return user ? (\n    children\n  ) : (\n    <Navigate to="/login" state={{ from: location }} replace />\n  );\n}\n```',
      
      'Token refreshing is another critical aspect of JWT authentication. Since access tokens have short lifespans for security reasons, we need a mechanism to obtain new tokens without requiring users to log in again:',
      
      'On the backend, implement secure password handling using bcrypt or Argon2, proper rate limiting to prevent brute force attacks, and secure token generation with appropriate expiration times.',
      
      'Finally, don\'t forget about logout functionality. This should invalidate tokens on the server and clear any client-side storage. For enhanced security, consider implementing a token blacklist on the server for revoked tokens.',
      
      'Remember that authentication is just one part of application security. Always combine it with proper authorization checks, data validation, and protection against common web vulnerabilities like XSS and CSRF.'
    ],
    tags: ['React', 'Authentication', 'Security', 'JWT']
  },
  {
    id: 4,
    title: 'Optimizing React Performance: Beyond the Basics',
    slug: 'optimizing-react-performance',
    date: 'September 5, 2023',
    readTime: 12,
    excerpt: 'Advanced techniques for improving React application performance, focusing on rendering optimization and data management.',
    coverImage: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    content: [
      'React applications can sometimes suffer from performance issues, especially as they grow in complexity. In this article, I\'ll explore advanced techniques for optimizing React performance beyond the basic recommendations.',
      
      'While most developers are familiar with React.memo, useMemo, and useCallback for preventing unnecessary re-renders, there are many other optimization strategies that can significantly improve your application\'s performance.',
      
      'Let\'s start with component architecture. The way you structure your components can have a major impact on rendering performance. Consider implementing a technique called "component splitting" where you separate static and dynamic parts of your UI:',
      
      '```jsx\n// Instead of this\nfunction ProductPage({ product, relatedProducts }) {\n  return (\n    <div>\n      <ProductDetails product={product} />\n      <RelatedProducts products={relatedProducts} />\n    </div>\n  );\n}\n\n// Do this\nfunction ProductPage({ productId }) {\n  return (\n    <div>\n      <ProductDetails productId={productId} />\n      <RelatedProductsContainer productId={productId} />\n    </div>\n  );\n}\n```',
      
      'This approach allows React to update only the components that need to change when data updates, rather than re-rendering entire sections of your UI.',
      
      'Another important optimization concerns state management. Context API is convenient but can cause performance issues when overused. When a context value changes, all components that use that context will re-render, regardless of whether they actually use the changed values.',
      
      'To address this, consider splitting your contexts by domain or update frequency:',
      
      '```jsx\n// Instead of one large context\nconst AppContext = React.createContext();\n\n// Split into domain-specific contexts\nconst UserContext = React.createContext();\nconst ThemeContext = React.createContext();\nconst NotificationContext = React.createContext();\n```',
      
      'For lists and large collections, virtualization is essential. Libraries like react-window or react-virtualized can dramatically improve performance by only rendering items that are currently visible in the viewport. This is particularly important for mobile devices with limited resources.',
      
      'Data fetching patterns also impact performance. Implementing techniques like pagination, infinite scrolling, or windowing can significantly reduce initial load times and memory usage. Consider using React Query or SWR for efficient data fetching, caching, and synchronization.',
      
      'Code splitting is another powerful technique. Instead of loading your entire application at once, split it into smaller chunks that can be loaded on demand:',
      
      '```jsx\nconst Dashboard = React.lazy(() => import(\'./Dashboard\'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Loading />}>\n      <Dashboard />\n    </Suspense>\n  );\n}\n```',
      
      'Web Workers can be used to move heavy computations off the main thread, preventing UI blocking. Libraries like Comlink make it easier to work with Web Workers in modern applications.',
      
      'For form-heavy applications, consider implementing controlled components only where necessary. Uncontrolled components or libraries like react-hook-form can provide better performance for complex forms.',
      
      'Finally, don\'t overlook the importance of measuring performance. Use the React DevTools Profiler, Lighthouse, and performance monitoring tools in production to identify actual bottlenecks rather than optimizing prematurely.',
      
      'By implementing these advanced techniques strategically based on measured performance issues, you can create React applications that remain fast and responsive even as they grow in complexity.'
    ],
    tags: ['React', 'Performance', 'Optimization', 'JavaScript']
  },
  {
    id: 5,
    title: 'Building Accessible Web Applications: A Developer\'s Guide',
    slug: 'building-accessible-web-applications',
    date: 'October 12, 2023',
    readTime: 9,
    excerpt: 'Learn how to create web applications that are accessible to all users, including those with disabilities.',
    coverImage: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg',
    content: [
      'Web accessibility is not just a legal requirement for many organizations but also a moral imperative for developers. Creating applications that everyone can use, regardless of their abilities, should be a core part of our development process. In this guide, I\'ll cover practical steps for building accessible web applications.',
      
      'First, let\'s understand the WCAG (Web Content Accessibility Guidelines), which provide the standards for web accessibility. WCAG is organized around four principles: perceivable, operable, understandable, and robust (POUR). Each principle has testable success criteria at levels A, AA, and AAA.',
      
      'Semantic HTML is the foundation of accessible websites. Using the right HTML elements for their intended purpose provides built-in accessibility benefits:',
      
      '```html\n<!-- Instead of this -->\n<div class="button" onclick="submit()">Submit</div>\n\n<!-- Use this -->\n<button type="submit">Submit</button>\n```',
      
      'Proper heading structure is essential for screen reader users to navigate your content. Use `<h1>` through `<h6>` elements to create a logical document outline rather than styling text to look like headings.',
      
      'For forms, always use `<label>` elements properly associated with inputs, provide clear error messages, and ensure forms can be completed using only a keyboard:',
      
      '```html\n<div class="form-group">\n  <label for="email">Email address</label>\n  <input \n    type="email" \n    id="email" \n    aria-describedby="email-help" \n    required\n  />\n  <small id="email-help">We\'ll never share your email.</small>\n</div>\n```',
      
      'Focus management is critical for keyboard users. Ensure all interactive elements are focusable and that focus is managed appropriately, especially in SPAs where content changes dynamically:',
      
      '```jsx\n// In React, after a modal opens\nuseEffect(() => {\n  if (isOpen) {\n    // Focus the first interactive element in the modal\n    modalRef.current.querySelector(\'button, [href], input\').focus();\n    \n    // Store the element that had focus before opening\n    previousFocus.current = document.activeElement;\n  } else if (previousFocus.current) {\n    // Restore focus when modal closes\n    previousFocus.current.focus();\n  }\n}, [isOpen]);\n```',
      
      'ARIA (Accessible Rich Internet Applications) attributes can enhance accessibility when native HTML isn\'t sufficient. However, it\'s important to use ARIA correctly:',
      
      '1. Use native HTML elements and attributes whenever possible\n2. Don\'t change native semantics unless absolutely necessary\n3. Make all interactive elements keyboard accessible\n4. Don\'t use role="presentation" or aria-hidden="true" on focusable elements',
      
      'Color and contrast are important aspects of accessibility. Ensure text has sufficient contrast with its background (4.5:1 for normal text, 3:1 for large text), and never use color alone to convey information.',
      
      'For dynamic content and SPAs, use ARIA live regions to announce important updates to screen reader users:',
      
      '```html\n<div aria-live="polite" aria-atomic="true">\n  <!-- Dynamic content updates here -->\n</div>\n```',
      
      'Testing is a crucial part of ensuring accessibility. Use a combination of automated testing tools (like axe or Lighthouse), keyboard testing, screen reader testing, and, ideally, testing with actual users with disabilities.',
      
      'Finally, remember that accessibility is not a one-time task but an ongoing process. Build it into your design and development workflows, conduct regular audits, and continue learning about best practices. By making accessibility a priority, you create better experiences for all users and build more robust applications.'
    ],
    tags: ['Accessibility', 'WCAG', 'Web Development', 'HTML']
  }
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}