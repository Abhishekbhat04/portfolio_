// ─── Portfolio Data ────────────────────────────────────────────────────────────

export const personal = {
  name: "Abhishek Bhat P",
  title: "Computer Science Engineering Student",
  tagline: "Passionate about Innovation, Problem-Solving and Learning",
  bio: `I am a Computer Science Engineering student at Sahyadri College of Engineering and Management (CGPA: 8.8), passionate about innovation, problem-solving, and learning. 

I have a strong foundation in core computer science principles and programming, and I enjoy building projects that solve real-world problems—from machine learning models for agriculture to user-centric UI/UX designs.`,
  location: "Mangalore, Karnataka, India",
  email: "abhishekbhatp0418@gmail.com",
  phone: "+91-7795689009",
  github: "https://github.com/Abhishekbhat04",
  linkedin: "https://www.linkedin.com/in/abhishek-bhat-p-598519285/",
  resumeUrl: "#",
};

// ─── Education ─────────────────────────────────────────────────────────────────

export const education = [
  {
    institution: "Sahyadri College of Engineering and Management",
    degree: "Bachelor of Engineering in Computer Science",
    period: "Sept 2023 – June 2027",
    location: "Mangalore, Karnataka",
    score: "CGPA: 8.8",
  }
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills = [
  {
    category: "Programming",
    items: ["Python", "Java", "C++", "C", "HTML", "CSS"],
  },
  {
    category: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "MS Excel"],
  },
  {
    category: "Databases",
    items: ["MySQL"],
  }
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    title: "Arecanut Disease Detection & Fertilizer Recommendation System",
    description: "A machine learning-based system to detect arecanut plant diseases from leaf images and recommend suitable fertilizers.",
    longDescription: "Built a disease detection model using image processing and machine learning techniques to classify arecanut leaf diseases. Used Python, TensorFlow, Keras, and OpenCV to preprocess arecanut leaf images and train and evaluate a MobileNetV2-based deep learning model on a labeled dataset for disease classification. Implemented image preprocessing steps such as resizing, normalization, and noise reduction to improve classification accuracy. Designed a fertilizer recommendation module that suggests appropriate fertilizers based on detected disease and crop condition.",
    image: null,
    tags: ["Python", "Machine Learning", "Image Processing", "Deep Learning", "TensorFlow", "Keras", "OpenCV"],
    achievements: [
      "Built a disease detection model using image processing and machine learning techniques to classify arecanut leaf diseases",
      "Used Python, TensorFlow, Keras, and OpenCV to preprocess arecanut leaf images and train and evaluate a MobileNetV2-based deep learning model on a labeled dataset for disease classification"
    ],
    github: "https://github.com/Abhishekbhat04",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "PM Internship Bot (Chatbot Automation)",
    description: "A rule-based chatbot to handle queries related to internship eligibility, application process, and scheme-related information.",
    longDescription: "Developed a rule-based chatbot using Python to handle queries related to internship eligibility, application process, deadlines, benefits, and other scheme-related information. Designed conversational intents and response mapping to provide structured, consistent, and user-friendly responses to frequently asked student queries. Integrated the chatbot with a web-based interface using HTML, CSS, and JavaScript, enabling students to access internship information through an interactive interface. Automated the information-search process, reducing the time and effort required for students to find relevant internship information from multiple sources.",
    image: null,
    tags: ["Python", "Chatbot", "HTML", "CSS", "JavaScript"],
    achievements: [
      "Developed a rule-based chatbot using Python to handle queries related to internship eligibility, application process, deadlines, benefits, and other scheme-related information",
      "Integrated the chatbot with a web-based interface using HTML, CSS, and JavaScript, enabling students to access internship information through an interactive interface"
    ],
    github: "https://github.com/Abhishekbhat04",
    demo: "#",
    featured: true,
  }
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience = [
  {
    role: "Intern - ClimateScope: Visualizing Global Weather Trends",
    company: "Infosys Springboard Internship 6.0",
    period: "Feb 2026 – Apr 2026",
    description: "Developed an interactive weather analytics dashboard to visualize global weather trends and extreme events.",
    highlights: [
      "Developed an interactive weather analytics dashboard to visualize global weather trends and extreme events.",
      "Performed data preprocessing, exploratory data analysis (EDA), and interactive visualization using Python.",
      "Built dashboards using Streamlit, Plotly, Pandas, and Matplotlib to analyze temperature, humidity, rainfall, and climate patterns.",
      "Successfully completed the mandatory internship assignment under Infosys Springboard Internship 6.0.",
    ],
  }
];

// ─── Achievements ─────────────────────────────────────────────────────────────

export const achievements = [
  {
    title: "Second Place — VERSATHON 1.0 Hackathon",
    description: "Secured 2nd place among 25+ teams in the VERSATHON 1.0 Hackathon for developing an innovative solution and showcasing strong problem-solving and teamwork skills.",
    icon: "trophy",
    year: "2026",
  },
  {
    title: "Elite Certification — NPTEL Python for Data Science",
    description: "Earned an Elite certificate from NPTEL with a consolidated score of 72%, demonstrating proficiency in Python programming, data analysis, and data science fundamentals.",
    icon: "medal",
    year: "2026",
  }
];

// ─── Certifications ───────────────────────────────────────────────────────────

export const certifications = [
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "2026",
    credentialId: "NPTEL26CS80S462100822",
    color: "#C66A4E",
    link: "/NPTEL_Certificate.pdf"
  }
];
