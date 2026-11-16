export const profile = {
  name: 'Shyam Makwana',
  role: 'Full-stack software engineer',
  email: 'makwanashyam6@gmail.com',
  resume: '/docs/Resume.pdf',
  about: [
    "I'm a full-stack software engineer at Bolster AI. I hold a Master of Science in Computer Science from Indiana University Bloomington and a gold medal in Information Technology from Dharmsinh Desai University.",
    'I like building things end to end: secure banking systems, machine learning models, network protocols and booking platforms. I enjoy learning new technology and turning it into something people can use.',
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/Shyam-Makwana' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shyammakwana' },
    { label: 'LeetCode', url: 'https://leetcode.com/ShyamMakwana' },
    { label: 'X', url: 'https://twitter.com/ShyamMakwana_' },
    { label: 'Instagram', url: 'https://www.instagram.com/_sshyam_' },
  ],
};

export interface Role {
  company: string;
  short?: string;
  role: string;
  start: string;
  end: string;
  months: number;
  url?: string;
  docs?: { label: string; href: string }[];
}

export const roles: Role[] = [
  { company: 'Bolster AI', role: 'Software Engineer', start: 'Jun 2024', end: 'Present', months: 29, url: 'https://bolster.ai' },
  { company: 'Synopsys Inc.', short: 'Synopsys', role: 'Software Engineer Intern', start: 'May 2023', end: 'Aug 2023', months: 4, url: 'https://www.synopsys.com/' },
  { company: 'Indiana University Bloomington', short: 'Indiana University', role: 'Graduate Associate Instructor', start: 'Aug 2022', end: 'May 2024', months: 21, url: 'https://luddy.indiana.edu/' },
  {
    company: 'Indian Space Research Organisation (ISRO)', short: 'ISRO', role: 'Software Engineer Intern', start: 'Dec 2021', end: 'Mar 2022', months: 4, url: 'https://www.isro.gov.in/',
    docs: [{ label: 'Certificate', href: '/docs/ISRO_Certificate.pdf' }, { label: 'Project report', href: '/docs/ISRO_Project_Report.pdf' }],
  },
  { company: 'Four Clowns', role: 'Software Engineer Intern', start: 'May 2021', end: 'Jul 2022', months: 14, docs: [{ label: 'Certificate', href: '/docs/FourClowns_Certificate.pdf' }] },
  { company: 'Institution of Electronics and Telecommunication Engineers (IETE)', short: 'IETE', role: "Member of Students' Forum", start: 'Dec 2019', end: 'Nov 2021', months: 23, url: 'https://www.iete.org/' },
  {
    company: 'CodeChef DDU Chapter', short: 'CodeChef DDU', role: 'Executive Team Member', start: 'Feb 2019', end: 'Jun 2021', months: 28, url: 'https://www.linkedin.com/company/codechef-ddu-chapter/',
    docs: [{ label: 'Certificate', href: '/docs/CodeChef_DDU_Chapter_Certificate.pdf' }],
  },
];

export type Kind = 'web' | 'ml' | 'systems';
export interface Project {
  title: string;
  short?: string;
  summary: string;
  techs: string[];
  kind: Kind;
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  { title: 'CyberBank', kind: 'web', featured: true, summary: 'A secure banking web application built around strong security, clear interfaces and efficient everyday banking.', techs: ['React', 'Python', 'Flask', 'MUI', 'JavaScript', 'MySQL'], github: 'https://github.com/Shyam-Makwana/CyberBank', live: 'https://cyberbank.netlify.app/' },
  { title: 'BookEasy', kind: 'web', featured: true, summary: 'A hotel booking app that takes travelers from search to selection to payment in one smooth flow.', techs: ['React', 'Node.js', 'AWS', 'Azure', 'MySQL'], github: 'https://github.com/Shyam-Makwana/BookEasy', live: 'https://bookeasy.netlify.app/' },
  { title: 'FoodSaver', kind: 'web', featured: true, summary: 'Connects food donors with recipients to cut food waste, with Google Maps for addresses and SendGrid for email.', techs: ['React', 'Node.js', 'REST API', 'MongoDB', 'Express', 'Bootstrap'], github: 'https://github.com/Shyam-Makwana/FoodSaver', live: 'https://thefoodsaver.netlify.app/' },
  { title: 'Home Credit Default Risk', short: 'Home Credit Risk', kind: 'ml', featured: true, summary: 'Machine learning models that predict the probability of a loan default, from data exploration to tuned models.', techs: ['Python', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy'], github: 'https://github.com/Shyam-Makwana/Home-Credit-Default-Risk' },
  { title: 'GraphQL Playground', kind: 'web', featured: true, summary: 'An interactive playground for learning GraphQL with instant results, example queries and a practice dataset.', techs: ['React', 'Node.js', 'GraphQL', 'MUI', 'Apollo'], github: 'https://github.com/Shyam-Makwana/GraphQL', live: 'https://graph--ql.vercel.app/' },
  { title: 'All In One Compiler', kind: 'systems', featured: true, summary: 'A web calculator for compiler design: first and follow, left factoring, left recursion, tokens and a self-designed compiler.', techs: ['Flex', 'Yacc', 'C', 'Node.js', 'JavaScript', 'jQuery'], github: 'https://github.com/Shyam-Makwana/All-In-One-Compiler', live: 'https://all-in-one-compiler.onrender.com' },
  { title: 'Content-Based Book Recommendation System', short: 'Book Recommender', kind: 'ml', summary: 'Finds which books are close to each other by topic and shows the groups as a dendrogram.', techs: ['Python', 'Pandas', 'NLTK', 'Gensim', 'SciPy'], github: 'https://github.com/Shyam-Makwana/Content-Based-Book-Recommendation-System' },
  { title: 'Customer Clustering for Marketing', short: 'Customer Clustering', kind: 'ml', summary: 'Groups unlabelled customers into six clusters with PCA and K-means, then visualizes the result.', techs: ['Python', 'MySQL', 'Django', 'JavaScript'], github: 'https://github.com/Shyam-Makwana/Customer-Clustering-for-marketing-purpose' },
  { title: 'Restaurant Search and Booking Chatbot', short: 'Restaurant Chatbot', kind: 'ml', summary: 'A chatbot that finds restaurants by preference and books or cancels a table.', techs: ['Python', 'RASA', 'MySQL', 'Django'], github: 'https://github.com/Shyam-Makwana/Chatbot-for-Searching-Restaurants-and-Booking-Table' },
  { title: 'Real-time Insights from Social Media Data', short: 'Social Insights', kind: 'ml', summary: 'A deep dive into trending tweets to understand how Twitter data is structured and what it shows.', techs: ['Python', 'JSON', 'Pandas', 'Matplotlib'] },
  { title: 'Grad School Admission Recommendation System', short: 'Admission Advisor', kind: 'ml', summary: 'An expert system in Prolog that suggests US and Canadian graduate schools based on a student profile.', techs: ['Prolog', 'Python', 'JavaScript'] },
  { title: 'CoronaMap', kind: 'web', summary: 'A Mapbox map showing COVID-19 cases, deaths and recoveries.', techs: ['Mapbox', 'JavaScript', 'CSS', 'HTML'], github: 'https://github.com/Shyam-Makwana/CoronaMap' },
  { title: 'Chrome Extension', kind: 'systems', summary: 'Shows the meaning of any word you select on a web page.', techs: ['JavaScript', 'CSS', 'HTML'], github: 'https://github.com/Shyam-Makwana/Chrome-Extension' },
  { title: 'Text Utility', kind: 'web', summary: 'A handy tool to change case, capitalize and reformat text.', techs: ['Django', 'Python', 'JavaScript'], github: 'https://github.com/Shyam-Makwana/Text-Utility' },
  { title: 'E-Commerce Database System', short: 'E-Commerce Database', kind: 'systems', summary: 'ER and schema design, tables, views, procedures and more than 25 queries.', techs: ['MySQL', 'PL/SQL'], github: 'https://github.com/Shyam-Makwana/Database-Management-System' },
];

export const skills = [
  { title: 'Core', items: ['Full-stack web development', 'Software engineering', 'Data structures and algorithms', 'Artificial intelligence', 'Machine learning', 'Competitive programming', 'Databases'] },
  { title: 'Languages', items: ['Python', 'Java', 'C', 'C++', 'C#', 'R', 'HTML', 'CSS', 'JavaScript', 'SQL', 'PL/SQL', 'Verilog', 'Prolog', 'Assembly', 'LaTeX'] },
  { title: 'Frameworks and libraries', items: ['React', 'Node.js', 'Angular', 'Vue', 'Django', 'Spring Boot', 'Spring MVC', '.NET Core', 'ASP.NET', 'Hibernate', 'JSP', 'Servlets', 'JUnit', 'GraphQL', 'Bootstrap', 'jQuery', 'MUI', 'Express', 'AJAX', 'NumPy', 'Pandas', 'SciPy', 'TensorFlow'] },
  { title: 'Software and tools', items: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub Actions', 'Jira', 'Postman', 'Linux', 'Wireshark', 'Colab', 'Anaconda', 'VS Code', 'IntelliJ IDEA', 'PyCharm', 'Eclipse', 'NetBeans', 'Packet Tracer'] },
  { title: 'Databases and cloud', items: ['MySQL', 'Postgres', 'MongoDB', 'Neo4j', 'Microsoft SQL Server', 'Oracle', 'AWS', 'Azure', 'Firebase', 'Netlify', 'Render', 'Heroku', 'GitHub Pages'] },
];

// Skills shown in the orbit. Ring 0 is the centre ring.
export const orbitSkills = [
  { label: 'Python', ring: 0 }, { label: 'JavaScript', ring: 0 }, { label: 'Java', ring: 0 }, { label: 'C++', ring: 0 },
  { label: 'React', ring: 1 }, { label: 'Node.js', ring: 1 }, { label: 'Django', ring: 1 }, { label: 'GraphQL', ring: 1 }, { label: 'Spring Boot', ring: 1 },
  { label: 'MySQL', ring: 2 }, { label: 'MongoDB', ring: 2 }, { label: 'AWS', ring: 2 }, { label: 'Postgres', ring: 2 },
  { label: 'Docker', ring: 3 }, { label: 'Kubernetes', ring: 3 }, { label: 'Git', ring: 3 }, { label: 'TensorFlow', ring: 3 },
];
export const skillRings = ['Language', 'Framework', 'Database and cloud', 'Tool'];

export const education = [
  {
    school: 'Indiana University Bloomington', place: 'Bloomington, Indiana', degree: 'Master of Science in Computer Science', years: 'Aug 2022 to May 2024',
    stat: '4.0', statLabel: 'GPA out of 4.0', url: 'https://www.indiana.edu/',
    docs: [{ label: 'Transcript', href: '/docs/IUB_Transcript.pdf' }],
  },
  {
    school: 'Dharmsinh Desai University', place: 'Nadiad, Gujarat', degree: 'Bachelor of Technology in Information Technology', years: 'Aug 2018 to May 2022',
    stat: '9.32', statLabel: 'GPA out of 10, Gold Medalist', url: 'https://ddu.ac.in/',
    docs: [{ label: 'Degree', href: '/docs/DDU_Degree.pdf' }, { label: 'Transcript', href: '/docs/DDU_Transcript.pdf' }, { label: 'Gold medal letter', href: '/docs/DDU_Letter.pdf' }],
  },
  {
    school: 'Divine Buds English School', place: 'Ahmedabad, Gujarat', degree: 'Primary to Higher Secondary, Gujarat Board (GSEB)', years: 'Jul 2006 to Mar 2018',
    stat: '', statLabel: '', url: '', docs: [],
  },
];

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
