type COURSE_HERO="hero1"|"hero2"|"hero3"|"hero4"|"hero5"
export interface Course {
  id: string;
  courseHeroType:COURSE_HERO;
  category: string;
  title: string;
  courseImage: string;
  courseLogo: string;
  description: string;
  language: string;
  certificationRate: number;
  lifetimeAccess: boolean;
  instructorsSupports: boolean;
  duration: string;
  learningObjectives: string[];
  prerequisite: string[];
  certification: string[];
  coursesMaterials: string[];
  gallery: string[];
  overview:string;
}
//
export const webProgrammingCourse: Course = {
  id: "course-001",
  courseHeroType:"hero1",
  category: "Web Development",
  title: "Web Programming",
  courseImage: "../../CIDS/webdesign/webprogrammingImageHeader1.jpg",
  // Replace with actual image URL
  description: "This course introduces the essential techniques required to create compelling video content. You'll begin by mastering basic editing principles using industry-standard software like Adobe Premiere Pro or Final Cut Pro. As the course progresses, you’ll explore advanced features such as color correction, motion graphics, and sound design. By the end of the course, you’ll be able to produce professional-grade videos, optimize them for various platforms, and tell stories that resonate with audiences.",
  language: "English / Hausa",
  certificationRate: 90,
  lifetimeAccess: true,
  courseLogo: "../../CIDS/courselogo/programing.jpg",
  instructorsSupports: true,
  duration: "3 months",
  learningObjectives: [
    "Master the core tools of video editing: Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve.",
    "Cut and trim video footage to tell engaging stories with a clear narrative.",
    "Enhance videos with color grading and correction techniques.",
    "Create smooth transitions and add motion graphics using After Effects.",
    "Work with sound design: Learn to mix and sync audio with your video for maximum impact.",
    "Export and optimize videos for social media, web, or broadcast."
  ],
  prerequisite: [
    "Basic knowledge of computers and the internet.",
    "Familiarity with programming is helpful but not required (for beginners)."
  ],
  certification: [
    "Upon successful completion, participants will receive a Professional Web Programming Certificate."
  ],
  coursesMaterials: [
    "A laptop with a stable internet connection is required.",
    "Free software tools like Visual Studio Code, Git, and browser developer tools."
  ],
  gallery: [
    "Image Description", // Add actual image URLs as needed
    "Image Description",
    "Image Description",
    "Image Description+3"
  ],
  overview: "Empower your creativity by mastering the art of coding. From building dynamic websites to developing powerful applications, this course equips you with the tools to design and shape the future of the web.",
};
const animationToolsCourse: Course = {
  id: "course-003",
  courseHeroType:"hero2",
  category: "Animation Design",
  title: "Animation 2D & 3D",
  courseImage: "./../CIDS/heroImageBG/animationhero3.jpg", // Replace with actual image URL
  description: "This course covers a range of animation tools, including Moho, Adobe After Effects, and Blender. Students will learn to create compelling 2D and 3D animations, understand key animation principles, and explore the integration of different software in their projects. By the end of the course, participants will have the skills to produce high-quality animations for various media.",
  language: "English",
  certificationRate: 90,
  lifetimeAccess: true,
  instructorsSupports: true,
  duration: "5 months",
  courseLogo: "../../CIDS/courselogo/animation1.jpg",
  learningObjectives: [
    "Master the Moho interface and its animation features.",
    "Create 2D animations with Moho and Adobe After Effects.",
    "Explore 3D modeling and animation with Blender.",
    "Understand the principles of motion and timing across different software.",
    "Integrate sound design and audio in animations.",
    "Export animations for various platforms, including social media and video."
  ],
  prerequisite: [
    "Basic knowledge of animation principles.",
    "Familiarity with graphic design software is helpful but not required."
  ],
  certification: [
    "Upon successful completion, participants will receive a Comprehensive Animation Certificate."
  ],
  coursesMaterials: [
    "A laptop with Moho, Adobe After Effects, and Blender installed.",
    "Basic graphic design software for asset creation."
  ],
  gallery: [
    "./../CIDS/animation/animation10.jpg", // Add actual image URLs as needed
    "./../CIDS/animation/animation3.jpg", // Add actual image URLs as needed
    "./../CIDS/animation/animation9.jpg", // Add actual image URLs as needed
    "./../CIDS/animation/animation2.jpg", // Add actual image URLs as needed

//
  ],
  overview: "Step into the world of animation and bring your imagination to life. Whether it's 2D or 3D, this course guides you through the process of turning creative ideas into captivating animations that move, engage, and inspire.",
};
const graphicDesignCourse: Course = {
  id: "course-005",
  courseHeroType:"hero4",
  category: "Graphic Design",
  title: "Fundamentals of Graphic Design",
  courseImage: "../../CIDS/graphicDesign/graphicD3.jpg", // Replace with actual image URL
  description: "This course introduces students to the fundamental concepts and techniques of graphic design. Participants will learn how to create visually compelling designs using tools like Adobe Photoshop and Illustrator. The course covers design principles, typography, color theory, and layout, providing a solid foundation for aspiring graphic designers.",
  language: "English",
  certificationRate: 80,
  lifetimeAccess: true,
  instructorsSupports: true,
  courseLogo: "../../CIDS/courselogo/graphiclogo.png",
  duration: "4 months",
  learningObjectives: [
    "Understand the principles of design and composition.",
    "Utilize typography effectively in various design projects.",
    "Explore color theory and its application in design.",
    "Create digital graphics using Adobe Photoshop and Illustrator.",
    "Develop skills in layout and visual storytelling.",
    "Build a portfolio showcasing completed graphic design projects."
  ],
  prerequisite: [
    "Basic computer skills.",
    "No prior graphic design experience is required."
  ],
  certification: [
    "Upon successful completion, participants will receive a Graphic Design Certificate."
  ],
  coursesMaterials: [
    "A laptop with Adobe Creative Cloud installed (Photoshop, Illustrator).",
    "Access to design resources and tutorials."
  ],
  gallery: [
    "../../CIDS/graphicDesign/graphicD1.jpg", // Add actual image URLs as needed
    "../../CIDS/graphicDesign/graphicD4.jpg", // Add actual image URLs as needed
    "../../CIDS/graphicDesign/graphicD3.jpg", // Add actual image URLs as needed
    "../../CIDS/graphicDesign/graphicD2.jpg", // Add actual image URLs as needed

  ],
  overview: "Unleash your artistic potential and bring your visions to life. Learn the essential techniques of visual communication and design stunning, impactful graphics that tell stories and evoke emotions.",
};
const videoEditingCourse: Course = {
  id: "course-006",
  courseHeroType:"hero4",
  category: "Video Editing",
  title: "Mastering Video Editing",
  courseImage: "../../CIDS/videoEditing/vedit2.jpg", // Replace with actual image URL
  description: "This course provides a comprehensive introduction to video editing techniques using industry-standard software like Adobe Premiere Pro and Final Cut Pro. Participants will learn to edit, enhance, and produce professional-quality videos. The course covers key concepts such as timeline editing, color correction, audio mixing, and motion graphics.",
  language: "English",
  certificationRate: 85,
  lifetimeAccess: true,
  courseLogo: "../../CIDS/courselogo/videoedit.jpg",
  instructorsSupports: true,
  duration: "4 months",
  learningObjectives: [
    "Understand the video editing workflow and terminology.",
    "Edit and arrange video clips on a timeline.",
    "Apply transitions, effects, and color correction.",
    "Mix and sync audio to enhance video quality.",
    "Create engaging motion graphics and titles.",
    "Export videos in various formats for different platforms."
  ],
  prerequisite: [
    "Basic computer skills.",
    "No prior video editing experience is required."
  ],
  certification: [
    "Upon successful completion, participants will receive a Video Editing Certificate."
  ],
  coursesMaterials: [
    "A laptop with Adobe Premiere Pro or Final Cut Pro installed.",
    "Access to stock footage and sound libraries."
  ],
  gallery: [
    "../../CIDS/videoEditing/vedit6.jpg", // Add actual image URLs as needed
    "../../CIDS/videoEditing/vedit2.jpg",
    "../../CIDS/videoEditing/vedit3.jpg",
    "../../CIDS/videoEditing/vedit4.jpg"
  ],
  overview: "Become the storyteller behind the screen. Master the art of video editing, from basic cuts to advanced effects, and transform raw footage into compelling visual narratives that leave a lasting impact.",
};
const webDesignCourse: Course = {
  id: "course-007",
  courseHeroType:"hero3",
  category: "Web Design",
  title: "Web Design ",
  courseImage: "../../CIDS/webcreate/webD1.jpg", // Replace with actual image URL
  description: "This course covers the essential principles of web design, guiding participants through the process of creating visually appealing and user-friendly websites. Students will learn about layout design, color theory, typography, and responsive design techniques using HTML, CSS, and design tools.",
  language: "English",
  certificationRate: 90,
  lifetimeAccess: true,
  instructorsSupports: true,
  duration: "5 months",
  courseLogo: "../../CIDS/courselogo/webd.jpg",
  learningObjectives: [
    "Understand the fundamentals of web design and user experience (UX).",
    "Create responsive layouts using HTML and CSS.",
    "Utilize typography and color theory effectively in web design.",
    "Design and prototype websites using tools like Adobe XD or Figma.",
    "Implement best practices for accessibility and usability.",
    "Build a personal portfolio showcasing web design projects."
  ],
  prerequisite: [
    "Basic computer skills.",
    "No prior web design experience is required."
  ],
  certification: [
    "Upon successful completion, participants will receive a Web Design Certificate."
  ],
  coursesMaterials: [
    "A laptop with a text editor (e.g., Visual Studio Code) and design tools (e.g., Adobe XD or Figma) installed.",
    "Access to online resources and tutorials."
  ],
  gallery: [
    "../../CIDS/webcreate/webD9.jpg",
    "../../CIDS/webcreate/webD6.jpg",
    "../../CIDS/webcreate/webD8.jpg",
    "../../CIDS/webcreate/webD2.jpg",
  ],
  overview: "Design the web with beauty and functionality in mind. Learn to create user-friendly, visually appealing websites that not only capture attention but also deliver seamless user experiences across all devices.",
};
export const allCourses:Course[]=[
  webDesignCourse, animationToolsCourse,graphicDesignCourse,videoEditingCourse,webProgrammingCourse
]
export function findCourseById( courseId: string): Course | undefined {
  return allCourses.find(course => course.id === courseId);
}


