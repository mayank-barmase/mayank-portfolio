// ============================================================
//  EDIT THIS FILE to update everything on the site.
//  Empty strings ("") for links show a disabled "Add link" button.
// ============================================================

export const site = {
  name: 'Mayank Barmase',
  initials: 'MB',
  role: 'Full Stack Web Developer',
  headline: "Hi, I'm Mayank Barmase",
  intro:
    "I'm a Computer Science and Technology student passionate about building responsive web applications and solving real-world problems.",
  location: 'Amla, Madhya Pradesh, India',
  goal: 'Software Development / Full Stack Web Development Internship',
  year: new Date().getFullYear(),
}

export const links = {
  // PLACEHOLDER: replace with your real email. Anything containing "YOUR_" is treated as unset.
  email: 'mayankbarmase4@example.com',
  linkedin: 'https://www.linkedin.com/in/mayank-barmase',
  github: 'https://github.com/mayank-barmase',
  // PLACEHOLDER: put your PDF in /public/resume/ and keep this path (or change it).
  resume: '/resume/Mayank_Barmase_Resume.pdf',
  // Paste your Formspree endpoint here, e.g. 'https://formspree.io/f/abcdwxyz'. Empty = form not connected.
  formEndpoint: '',
}

export const nav = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Certificates', 'Contact']

export const about = [
  "I'm a B.Tech CST student at Madhav Institute of Technology & Science (MITS), Gwalior, and I enjoy turning ideas into working web applications. I started with a Diploma in Computer Science Engineering at Government Polytechnic College, Harda, which gave me a solid base before moving into the B.Tech program.",
  "I mostly work with the MERN stack (MongoDB, Express.js, React, Node.js) and like understanding how the front end and back end fit together. I also practise Data Structures and Algorithms in Java, because solving problems carefully makes me a better developer.",
  "I'm always learning something new, and right now I'm looking for an internship in software or full stack web development where I can contribute and grow.",
]

export const skills = [
  { title: 'Frontend', icon: 'Globe', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend', icon: 'Server', items: ['Node.js', 'Express.js'] },
  { title: 'Database', icon: 'Database', items: ['MongoDB', 'MySQL'] },
  { title: 'Programming & CS', icon: 'Code2', items: ['Java', 'DSA'] },
  { title: 'Tools', icon: 'Wrench', items: ['Git', 'GitHub', 'VS Code'] },
]

export const projects = [
  {
    title: 'College Management System',
    description:
      'A web-based college management application designed to organize student, faculty, academic, and administrative information.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Bootstrap'],
    features: ['Role-based access', 'Student and faculty management', 'Notices', 'Academic information', 'Modular dashboard'],
    //note: 'Confirm which features are fully implemented before publishing.',
    github: 'https://github.com/mayank-barmase/college-management-system', // PLACEHOLDER
    demo: '', // PLACEHOLDER
  },
  {
    title: 'Image Compression and Visualization',
    description:
      'An image compression and visualization project focused on reducing image data while comparing original and reconstructed images.',
    tech: ['Python'], // PLACEHOLDER: replace with the technologies you actually used
    features: ['Original vs. reconstructed comparison', 'Compression visualization', 'Compression ratio and image quality metrics'],
    //note: 'Confirm technologies and features before publishing.',
    github: 'https://github.com/mayank-barmase/Data-Compression-Visualizer', // PLACEHOLDER
    demo: '', // PLACEHOLDER
  },
]

export const education = [
  {
    degree: 'B.Tech: Computer Science and Technology (CST)',
    school: 'Madhav Institute of Technology & Science (MITS), Gwalior',
    period: 'Currently pursuing, 2nd Year',
    extra: 'CGPA: 7.71',
  },
  {
    degree: 'Diploma: Computer Science Engineering',
    school: 'Government Polytechnic College, Harda | RGPV',
    period: '2023 – 2026',
    extra: '',
  },
]

// PLACEHOLDERS: replace issuer, date, image (e.g. '/certificates/java.png') and verifyUrl.
export const certificates = [
  { title: 'Java', issuer: 'Issuing organization (Apna College)', date: 'Date (2026)', image: '/certificates/dsa.jpg', verifyUrl: 'https://www.apnacollege.in/course/sigmax' },
  { title: 'Web Development', issuer: 'Issuing organization (Apna College)', date: 'Date (2026)', image: '/certificates/development.jpg', verifyUrl: 'https://www.apnacollege.in/course/sigmax' },
]

export const isPlaceholderEmail = (e) => !e || e.includes('YOUR_')
