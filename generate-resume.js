import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/Resume.pdf'));

const fontRegular = 'Times-Roman';
const fontBold = 'Times-Bold';

// Header
doc.font(fontBold).fontSize(24).text('Abhishek Bhat P', { align: 'center' });
doc.font(fontRegular).fontSize(11).text('Mangalore, Karnataka, India', { align: 'center' });
doc.text('Passionate about Innovation, Problem-Solving and Learning', { align: 'center' });
doc.text('+91-7795689009 — abhishekbhatp0418@gmail.com — LinkedIn — GitHub', { align: 'center' });
doc.moveDown(2);

// helper function
function addSection(title) {
  doc.font(fontBold).fontSize(14).text(title);
  const y = doc.y;
  doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.options.margin, doc.y).stroke();
  doc.y = y + 5;
  doc.moveDown(0.5);
}

// Education
addSection('Education');
doc.font(fontBold).fontSize(11).text('Sahyadri College of Engineering and Management', { continued: true });
doc.font(fontRegular).text('    Sept 2023 – June 2027', { align: 'right' });
doc.font(fontRegular).text('Bachelor of Engineering in Computer Science (CGPA: 8.8)');
doc.moveDown(0.8);

// Technical Skills
addSection('Technical Skills');
doc.font(fontBold).text('Programming Languages: ', { continued: true }).font(fontRegular).text('Python, Java, C++, C, HTML, CSS');
doc.font(fontBold).text('Core Computer Science: ', { continued: true }).font(fontRegular).text('Data Structures and Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks');
doc.font(fontBold).text('Tools & Platforms: ', { continued: true }).font(fontRegular).text('Git, GitHub, VS Code, Jupyter Notebook, Google Colab, MS Excel');
doc.font(fontBold).text('Database: ', { continued: true }).font(fontRegular).text('MySQL');
doc.moveDown(0.8);

// Projects
addSection('Projects');
doc.font(fontBold).text('Arecanut Disease Detection and Fertilizer Recommendation System');
doc.font(fontRegular).text('Developed a machine learning–based system to detect arecanut plant diseases from leaf images and recommend suitable fertilizers.');
doc.list([
  'Built a disease detection model using image processing and machine learning techniques to classify arecanut leaf diseases.',
  'Used Python, TensorFlow, Keras, and OpenCV to preprocess arecanut leaf images and train and evaluate a MobileNetV2-based deep learning model on a labeled dataset for disease classification.',
  'Implemented image preprocessing steps such as resizing, normalization, and noise reduction to improve classification accuracy.',
  'Designed a fertilizer recommendation module that suggests appropriate fertilizers based on detected disease and crop condition.'
], { bulletRadius: 2, textIndent: 15 });
doc.moveDown(0.8);

doc.font(fontBold).text('PM Internship Bot (Chatbot Automation)');
doc.font(fontRegular).list([
  'Developed a rule-based chatbot using Python to handle queries related to internship eligibility, application process, deadlines, benefits, and other scheme-related information.',
  'Designed conversational intents and response mapping to provide structured, consistent, and user-friendly responses to frequently asked student queries.',
  'Integrated the chatbot with a web-based interface using HTML, CSS, and JavaScript, enabling students to access internship information through an interactive interface.',
  'Automated the information-search process, reducing the time and effort required for students to find relevant internship information from multiple sources.'
], { bulletRadius: 2, textIndent: 15 });
doc.moveDown(0.8);

// Internship
addSection('Internship');
doc.font(fontBold).text('Infosys Springboard Internship 6.0 – ClimateScope', { continued: true });
doc.font(fontRegular).text('    Feb 2026 – Apr 2026', { align: 'right' });
doc.font(fontRegular).text('Visualizing Global Weather Trends and Extreme Events');
doc.list([
  'Developed an interactive weather analytics dashboard to visualize global weather trends and extreme events.',
  'Performed data preprocessing, exploratory data analysis (EDA), and interactive visualization using Python.',
  'Built dashboards using Streamlit, Plotly, Pandas, and Matplotlib to analyze temperature, humidity, rainfall, and climate patterns.',
  'Successfully completed the mandatory internship assignment under Infosys Springboard Internship 6.0.'
], { bulletRadius: 2, textIndent: 15 });
doc.moveDown(0.8);

// Achievements
addSection('Achievements');
doc.font(fontBold).text('Second Place — VERSATHON 1.0 Hackathon (2026)');
doc.font(fontRegular).text('Secured 2nd place among 25+ teams in the VERSATHON 1.0 Hackathon for developing an innovative solution and showcasing strong problem-solving and teamwork skills.');
doc.moveDown(0.5);
doc.font(fontBold).text('Elite Certification — NPTEL Python for Data Science (2026)');
doc.font(fontRegular).text('Earned an Elite certificate from NPTEL with a consolidated score of 72%, demonstrating proficiency in Python programming, data analysis, and data science fundamentals.');

doc.end();
