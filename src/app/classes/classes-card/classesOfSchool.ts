interface ClassOverview {
  bookPhoto:string;
  className: string;
  classOverview: string;
  curriculumDetails: string;
  classSchedule: string;
  teachingMethods: string;
  resourcesAndMaterials: string;
  minimumAgeRequirement: number;
  maximumClassSize: number;
  subjectOfferings: string[];
  averageAttendanceRate: number; // percentage
  graduationRate: number; // percentage
  studentRetentionRate: number; // percentage
}


export const kindergarten1: ClassOverview = {
  bookPhoto:'/hd_images/kindergaten.webp',
  className: "Kindergarten 1 & 2",
  classOverview: "Kindergarten 1 introduces students to structured learning, emphasizing foundational skills in literacy, numeracy, and social studies through engaging activities.",
  curriculumDetails: "Topics covered include phonemic awareness, simple addition and subtraction, and an introduction to community and environment.",
  classSchedule: "Monday-Friday",
  teachingMethods: "A combination of direct instruction, collaborative projects, and creative play is used to enhance student engagement and understanding.",
  resourcesAndMaterials: "Students are provided with interactive workbooks, manipulatives for math, and a variety of art supplies to encourage creativity.",
  minimumAgeRequirement: 5,
  maximumClassSize: 20,
  subjectOfferings: ["Literacy", "Mathematics", "Science", "Social Studies", "Art", "Physical Education"],
  averageAttendanceRate: 96,
  graduationRate: 99,
  studentRetentionRate: 91,
};


const lowerBasic1: ClassOverview = {
  bookPhoto:'/hd_images/lowerbasic.jpg',
  className: "Lower Basic Education 1,2&3",
  classOverview: "The Basic 1 curriculum introduces young learners to foundational subjects, including Mathematics, Language Arts, Science, and Social Studies.",
  curriculumDetails: "Key topics include basic numeracy, early reading skills, simple scientific concepts, and an introduction to community awareness.",
  classSchedule: "Monday-Friday",
  teachingMethods: "Instruction emphasizes play-based learning and hands-on activities, fostering a love for learning through interactive experiences.",
  resourcesAndMaterials: "Students receive essential resources, including age-appropriate textbooks and interactive learning materials.",
  minimumAgeRequirement: 6,
  maximumClassSize: 20,
  subjectOfferings: ["Mathematics", "Language Arts", "Science", "Social Studies", "Art", "Physical Education"],
  averageAttendanceRate: 96,
  graduationRate: 99,
  studentRetentionRate: 92,
};



const upperBasic1: ClassOverview = {
  bookPhoto:'/hd_images/Civic-Edu-JSS3.jpg',
  className: "Upper Basic Education 1, 2 & 3",
  classOverview: "Upper Basic 1 focuses on enhancing critical thinking and academic skills across various subjects.",
  curriculumDetails: "Students explore topics in mathematics, literature, science, and geography, fostering analytical skills.",
  classSchedule: "Monday-Friday",
  teachingMethods: "Instructional strategies include inquiry-based learning, group projects, and technology integration.",
  resourcesAndMaterials: "Students use textbooks, online resources, and laboratory equipment to support their learning.",
  minimumAgeRequirement: 10,
  maximumClassSize: 30,
  subjectOfferings: ["Mathematics", "English Language", "Science", "Geography", "Art", "Physical Education"],
  averageAttendanceRate: 92,
  graduationRate: 95,
  studentRetentionRate: 87,
};


const seniorHigh1: ClassOverview = {
  bookPhoto:'/hd_images/senior-high.webp',
  className: "Senior High School 1, 2 & 3",
  classOverview: "Introduces foundational concepts in core subjects, enhancing analytical and critical thinking skills.",
  curriculumDetails: "Key subjects include Mathematics, English, Chemistry, Physics, and Biology.",
  classSchedule: "Monday-Friday",
  teachingMethods: "Instruction combines lectures, group work, and hands-on experiments to foster engagement.",
  resourcesAndMaterials: "Students have access to textbooks, online platforms, and laboratory equipment.",
  minimumAgeRequirement: 14,
  maximumClassSize: 30,
  subjectOfferings: ["Mathematics", "English Language", "Chemistry", "Physics", "Biology", "Social Studies"],
  averageAttendanceRate: 91,
  graduationRate: 94,
  studentRetentionRate: 88,
};




export const allClasses: ClassOverview[] = [

  kindergarten1,
  lowerBasic1,
  upperBasic1,

  seniorHigh1,

];
