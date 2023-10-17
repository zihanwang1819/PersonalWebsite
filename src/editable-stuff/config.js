// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Zihan",
  middleName: "",
  lastName: "Wang",
  message1: " (^o^)丿 Greeting! Welcome to my personal website! You can also call me Tony! (･ω･)",
  message2: " I am an innovative Aggie, pursuing my Master's in Computer Science, set to graduate in May 2024!",
  message3: " I am actively seeking a full-time position in the coding domain, and I'll be available to start from January 2024. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/zihanwang1819",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/zihanwang1819/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100079967794655",
    },
    {
      image: "fas fa-phone smaller-icon",
      url: "tel:469-968-6754",
      style: { fontSize: '2.5rem' }
    },
    {
      image: "fas fa-envelope smaller-icon",
      url: "mailto:zxw170530@tamu.edu",
      style: { fontSize: '2.5rem' }
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Who is Zihan Wang?",
  imageLink: require("../editable-stuff/zihanwang.jpg"),
  imageSize: 375,
  message:
    "An IT guy with an thirst for learning and great experiences under my belt! In 2024, I will proudly obtain my Master's degree in Computer Science from Texas A&M University, having previously secured my Bachelor of Science degree from the University of Texas at Dallas in 2021. I am fervently driven to explore new horizons and immerse myself in the exciting realm of cutting-edge technologies. As I navigate the ever-evolving challenges of the IT world, my ongoing education continually reinforces my appreciation for the transformative power of technology in our lives.",
  resume: "https://docs.google.com/document/d/1unnPBew1_HBV-JKRsll8KbRs3ecnFl6LgPZ_kXZnSTc/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python3", value: 90 },
    { name: "Java", value: 90 },
    { name: "JavaScript/TypeScript", value: 75 },
    { name: "C/C++", value: 65 },
    { name: "PHP", value: 60 },
    { name: "Ruby", value: 60 },
    { name: "HTML/CSS", value: 80 },
    { name: "SQL", value: 75 },
    { name: "Haskell", value: 50 },
    { name: "Shell", value: 75 },
  ],
  softSkills: [
    { name: "Amazon Web Services", value: 90 },
    { name: "Spring boot/ Spring MVC", value: 80 },
    { name: "RESTful", value: 60 },
    { name: "J2EE", value: 70 },
    { name: "Flask", value: 90 },
    { name: "React", value: 80 },
    { name: "Torch", value: 75 },
    { name: "TensorFlow", value: 70 },
    { name: "ElasticSearch", value: 70 },
    { name: "Hadoop", value: 60 },
    { name: "Docker", value: 50 },
    { name: "Linux/ Unix", value: 80 },
  ],
  soft1Skills: [
    { name: "Backend Development", value: 85 },
    { name: "Data Structures and Algorithm", value: 90 },
    { name: "Frontend Development", value: 70 },
    { name: "Cloud Architecture", value: 90 },
    { name: "Machine Learning", value: 75 },
    { name: "Database Management", value: 60 },
    { name: "Project Management", value: 65 },
    { name: "Big Data Development", value: 70 },
  ],
  soft2Skills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 70 },
    { name: "Adaptability", value: 75 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 80 },
    { name: "Networking", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Feel free to reach out to me; I'd love to have a coffee chat and discuss any coding-related job opportunities! My personal email address is",
  email: "zihanwang1819@outlook.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Machine Learning Engineer Intern',
      companylogo: require('../assets/img/KBR.png'),
      date: 'May 2023 – Present',
      location: 'Sioux Falls, South Dakota, United States',
      description: 'During my internship at KBR, I had the privilege to collaborate with the United States Geological Survey (USGS), a subsidiary of the U.S. Department of the Interior. My primary responsibility was to utilize deep learning techniques to process Earth observation satellite images taken from the 1970s to the 1990s. Due to the resolution constraints of these images, modern GIS technology could not effectively detect cloud shadows, and the legacy GIS methods from that were outdated. By solving this, I engaged in training models using deep learning that learned from more recent images to predict cloud shadows in these older photographs. In addition to this, My responsibilities include writing scripts to enhance training efficiency, establishing machine learning pipelines for automation, managing resources in the AWS cloud environment, and undertaking other related support and maintenance tasks. ',
      keyword: 'KeyWords: Neural network(UNet, ResNet, CNN), Amazon Web Service(EC2, S3, EBS, SageMaker), Python(ML Training, Pipeline), Shell(Scripting, Deployment), Linux, Jira, Agile'
    },
    {
      role: 'Software Development Engineer Intern',
      companylogo: require('../assets/img/Amazon.png'),
      date: 'May 2022 – Aug 2022',
      location: 'Austin, Texas, United States',
      description: 'During my software engineering internship at Amazon, my role closely resembled that of a Cloud Developer. My primary task was to assist my team in developing a tool for rapid log retrieval during on-call shifts, addressing challenges we faced with AWS centralized logging practices. Our distributed system spanned multiple AWS accounts and was deployed in the cloud, processing daily log traffic of up to several hundred TB, making log searches dauntingly complex. To address this, the tool I designed utilized the Open Search service, an AWS offering built upon Elastic Search. I also incorporated AWS Kinesis Firehose to facilitate the centralized transfer of logs across account destinations to S3, enabling efficient Open Search operations. Additionally, I deployed Kibana on EC2, providing the team with a user interface for more effective log flow monitoring. This project significantly reduced search times and markedly boosted the operational efficiency of team members. ',
      keyword: 'KeyWords: Amazon Web Service(EC2, S3, EBS, Lambda, ElasticSearch, Kibana, Kinesis Firehose, CloudFormation), TypeScript(AWS CDK, Deployment), Python(Testing), Git'
    },
    {
      role: 'Grader & Senior Grader',
      companylogo: require('../assets/img/TexasA&M.jpg'),
      date: 'Jan 2022 - May 2022 & Jan 2023 - May 2023',
      location: 'College Station, Texas, United States',
      description: 'At Texas A&M University, I served as a Grader and later as a Senior Grader, roles that essentially functioned as a Teaching Assistant. I was involved with the CSCE314 course, focusing on Programming Languages. My responsibilities included grading assignments, overseeing exams, and addressing QA sections. The course centered on two programming languages: Java and Haskell. By attending every session, I was able to deepen my understanding of Java, filling in knowledge gaps and strengthening my skills in Java programming and OOP design. I also gained the knowledge about the grammar rule of Haskell.',
      keyword: 'KeyWords: Java, Object Oriented Programming, Haskell'
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/DerbySoft.png'),
      date: 'Dec 2020 – Aug 2021',
      location: 'Dallas, Texas, United States',
      description: 'My internship experience at DerbySoft was distinctively different from my later internships. There, I primarily collaborated with a team of software engineers, dedicated to resolving system glitches and ensuring the stability of our online platform. My role was Java Developer, guided by the project manager, I also played a role in developing new features for our clients on the portal website. Specifically, my responsibilities included Utilizing SQL to query error information within the database, Tracking missing data within MVC projects and adjusting the code to rectify these issues, Designing and implementing new features for the portal website, Collaborating with the team to prepare for the migration of client data into our system. ',
      keyword: 'KeyWords: Java(Spring MVC), MySQL, Javascript(React), Postman, Jira, Git, Agile'
    },
  ]
}

const certifications = {
  show: true,
  heading: "Certifications",
  data: [
    {
      certification_name: 'AWS Certified Developer - Associate',
      certification_picture: require('../assets/img/AWS_C2.png'),
      certification_ID: 'CJ5WP20CQB44QE94',
      certification_date: 'Jan 15, 2023 - Jan 15, 2026',
      certification_website: 'Validate',
    },
    {
      certification_name: 'AWS Certified Cloud Practitioner',
      certification_picture: require('../assets/img/Image_20231016010049.png'),
      certification_ID: '2P771062P214QF9B',
      certification_date: 'Jul 17, 2020 - Jan 15, 2026',
      certification_website: 'Validate',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, certifications };
