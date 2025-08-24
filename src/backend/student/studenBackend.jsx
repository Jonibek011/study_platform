//darslar bo'limi card malumotlari
import math from "../../assets/student/darslar/Rectangle 24.png";
import english from "../../assets/student/darslar/Rectangle 25.png";
import fizic from "../../assets/student/darslar/Rectangle 21.png";

const images = [math, english, fizic];
export const darslar = [
  {
    id: 1,
    title: "Matematika 1-modul",
    subtitle: "Algebra asoslari va amaliy misollar",
    teacher: "Dildora Tojiyeva",
    profession: "Matematika o'qituvchisi",
    image: images[0],
    progress: 63,

    status: "Boshlash",
    userPhoto:
      "https://media.istockphoto.com/id/846730696/photo/portrait-teenager.jpg?b=1&s=612x612&w=0&k=20&c=F6F54Is5POZluWmrrJZS5x4NyTJ8JlJTpmddAain-so=",
    degree: "Boshlang'ich",
    elements: [
      { id: 1, mavzu: "Kirish", duration: 1362346782, video: {} },
      { id: 2, mavzu: "1-mavzu nomi", duration: 1362346782, video: {} },
      { id: 3, mavzu: "2-mavzu nomi", duration: 1362344536782, video: {} },
      { id: 4, mavzu: "3-mavzu nomi", duration: 13626782, video: {} },
      { id: 5, mavzu: "4-mavzu nomi", duration: 136234625782, video: {} },
      { id: 6, mavzu: "5-mavzu nomi", duration: 13623463782, video: {} },
      { id: 7, mavzu: "6-mavzu nomi", duration: 136236782, video: {} },
      { id: 8, mavzu: "7-mavzu nomi", duration: 13623467382, video: {} },
      { id: 9, mavzu: "8-mavzu nomi", duration: 13623467852, video: {} },
      { id: 10, mavzu: "9-mavzu nomi", duration: 136234682, video: {} },
    ],
  },
  {
    id: 2,
    title: "Ingliz tili",
    subtitle: "A1-A2 darajalar uchun ingliz tili",
    teacher: "Nasiba To'raboyeva",
    image: images[1],
    progress: 100,
    status: "Boshlash",
    userPhoto:
      "https://media.istockphoto.com/id/2050244751/photo/the-young-girl-looks-at-the-camera-lens-and-smiles-frankly-on-a-green-blurry-background.jpg?s=612x612&w=0&k=20&c=khedWjZdwjAVP1BuIOWbYT-P9OCL-I2RV271h8qy3K4=",
    degree: "Boshlang'ich",
  },
  {
    id: 3,
    title: "Fizika",
    subtitle: "O'rta ta'lim uchun fizika darsi",
    teacher: "Ferza Jonibekova",
    image: images[2],
    progress: 4,
    status: "Tugagan",
    userPhoto:
      "https://media.istockphoto.com/id/2192962506/photo/portrait-of-beautiful-young-woman-in-winter.jpg?s=612x612&w=0&k=20&c=7buMt7MzysSzuu3kDOg_oiRl5iKe6PP92ZKbbSEiaLo=",
    degree: "Boshlang'ich",
  },
];
