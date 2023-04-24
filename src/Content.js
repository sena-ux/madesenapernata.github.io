// import images
import Hero_person from "./assets/images/Hero/foto1.png";

import komputer from "./assets/images/Skills/komputer.png";
import php from "./assets/images/Skills/php.png";
import jaringan from "./assets/images/Skills/jaringan.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import laravel from "./assets/images/Skills/laravel.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/web1.png";
import project2 from "./assets/images/projects/web2.png";
import project3 from "./assets/images/projects/web3.png";
import project4 from "./assets/images/projects/web4.png";
import project5 from "./assets/images/projects/web5.png";
import person_project from "./assets/images/projects/orang1.png";

import avatar1 from "./assets/images/Testimonials/foto1.png";
import avatar2 from "./assets/images/Testimonials/foto2.png";
import avatar3 from "./assets/images/Testimonials/foto3.png";
import avatar4 from "./assets/images/Testimonials/foto4.png";
import avatar5 from "./assets/images/Testimonials/foto5.png";

import Hireme_person from "./assets/images/Hireme/person3.png";
import Hireme_person2 from "./assets/images/Hireme/person3.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SENA",
    LastName: "PERN",
    btnText: "Harapan Saya",
    image: Hero_person,
    hero_content: [
      {
        count: "1",
        text: "Tahun saya belajar tentang Web Developer",
      },
      {
        count: "3",
        text: "Project yang baru saya selesaikan dengan baik",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "SKILL UTAMA SAYA",
    skills_content: [
      {
        name: "Komputer",
        para: "Memperbaiki segala jenis komputer",
        data: "Saat saya sekolah di SMKN 1 ABANG saya mengambil jurusan TKJ yang dimana disana saya dipokuskan untuk mempelajari tentang komputer dan Jaringan Oleh karena itu saya sudah banyak mengatasi dan memperbaiki komputer dengan berbagai penyakit.",
        logo: komputer,
      },
      {
        name: "Node js",
        para: "Aplikasi dengan tekhnologi node Js",
        data: "Dari saya kelas 11 saya sudah mulai menuju ke dunia programming yang antara lain saya mempelajari yang namanya nodeJs hingga saya bisa membuat satu product dan dideploy ke hosting dengan usaha sendiri.",
        logo: nodejs,
      },
      {
        name: "Jaringan",
        para: "Membuat RT/RW Net",
        data: "Saat saya SMK saya bisa membuat RT/RW net, selai itu saya juga menjadi siswa terbaik di sekolah dalam bidang komputer dan jaringan, Pada saya kelas 12 saya di percayai guru dan saya diajak untuk memasang jaringan dengan fiber optic dan dengan begitu saya andal di bidang Jaringan dan Komputer.",
        logo: jaringan,
      },
      {
        name: "React js",
        para: "Mumbuat tampilan aplikasi dengan react js",
        data: "Saya sudah pernah membuat aplikasi sederhana dengan reactjs oleh karena itu saya sudah mempunyai bakat pada Java Script.",
        logo: reactjs,
      },
      {
        name: "PHP",
        para: "Membuat aplikasi Bimbingan Konseling dengan PHP",
        data : "Saat saya kelas 12 saya sudah bisa membuat aplikasi dengan bahasa pemrograman php yaitu salah satunya aplikasi Bimbingan Konseling.",
        logo: php,
      },
      {
        name: "Laravel",
        para: "Membuat aplikasi perpustakaan dengan laravel",
        data: "Saya mulai bisa laravel pada saya kelas 12 saya membuat aplikasi pengelola buku perpustakaan pada SMKN 1 ABANG.",
        logo: laravel,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "SERVICE SAYA",
    service_content: [
      {
        title: "Web Developer",
        para: "Pemubatan Web Developer seperti Aplikasi To-DO List, Aplikasi Blog, Aplikasi Toko online, Aplikasi Game. Diluar dari itu saya juga bisa membuat aplikasi apapun tergantung dari keinginan pelanggan saya.",
        logo: services_logo1,
      },
      {
        title: "Komputer dan Jaringan",
        para: "Memperbaiki segala komputer diantaranya PC No Display, PC Mati Total, Hard Disk Rusak, dan lain sebagainya. Merakit PC dalam artian saya bisa merakit PC sesuai dengan kebutuhan pelanggan. Pada jaringan saya bisa menerapkan RT/RW net dan saya juga melayani tentang jaringan dengan Fiber Optic.",
        logo: services_logo2,
      },
      {
        title: "Video Editing",
        para: "Editing video menjadi salah satu yang diperlukan di seluruh dunia. Editing video dengan editing populer saat ini dengan efect yang bagus.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "SOFTWARE SAYA",
    image: person_project,
    project_content: [
      {
        title: "Web Desainer Pertama",
        image: project1,
        link: 'https://sena-ux.github.io/senapernata.github.io/',
      },
      {
        title: "Desainer Portofolio Sederhana",
        image: project2,
        link: 'https://sena-ux.github.io/senaportofolio.github.io/',
      },
      {
        title: "Desainer Login Sederhana",
        image: project3,
        link: 'https://sena-ux.github.io/webtologin.github.io/',
      },
      {
        title: "Applikasi Bimbingan Konseling",
        image: project4,
        link: 'http://madesenapernata.epizy.com/auth/',
      },
      {
        title: "Sofware Lainnya",
        image: project5,
        link: 'https://github.com/sena-ux/',
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "PENILAIAN CLIENT SAYA",
    testimonials_content: [
      {
        review:
          "“Saya sangat senang dengan layanan yang diberikan oleh tim customer service Anda. Mereka sangat ramah dan membantu saya menyelesaikan masalah saya dengan cepat.”",
        img: avatar1,
        name: "GUNG WAI",
      },
      {
        review:
          "“Website yang bagus dengan tampilan yang modern dan enak dilihat atau dipandang mata dan sangat elegan.”",
        img: avatar2,
        name: "DAM MA",
      },
      {
        review:
          "“Saya ingin mengucapkan terima kasih atas dukungan dan bantuan yang diberikan oleh tim teknis Anda. Mereka sangat ahli dan membantu saya menyelesaikan masalah teknis yang rumit.”",
        img: avatar3,
        name: "SU MART",
      },
      {
        review:
          "“Produk yang saya beli dari perusahaan Anda berkualitas sangat baik dan dilengkapi dengan panduan yang mudah dipahami. Saya sangat merekomendasikan produk ini kepada teman dan keluarga saya.”",
        img: avatar4,
        name: "RAHTI MAL",
      },
      {
        review:
          "“Website perusahaan Anda sangat mudah digunakan dan memiliki tampilan yang menarik. Saya dapat menemukan informasi yang saya butuhkan dengan mudah dan cepat.”",
        img: avatar5,
        name: "RABY YA",
      },
    ],
  },
  Hireme: {
    title: "Hire Me!",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Saya percaya bahwa keterampilan, bakat, dan semangat yang saya miliki akan sangat berguna bagi perusahaan anda, dan saya berkomitmen untuk memberikan yang terbaik untuk mencapai kesuksesan bersama.",
    btnText: "Hire Me!",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "Apapun kebutuhan Anda, jangan ragu untuk menghubungi kami.",
    social_media: [
      {
        text: "madesenapernata@gmail.com",
        icon: GrMail,
        link: "mailto:madesenapernata@gmail.com",
      },
      {
        text: "+62 858 2924 6829",
        icon: MdCall,
        link: "tel:+6285829246829",
      },
      {
        text: "sena_pernata.37",
        icon: BsInstagram,
        link: "https://www.instagram.com/sena_pernata.37/",
      },
      {
        text: "De'sena",
        icon: FaFacebook,
        link: "https://www.facebook.com/De'sena/",
      },
      {
        text: "sena-ux",
        icon: FaGithub,
        link: "https://github.com/sena-ux/",
      },
      {
        text: "Sena Pernata",
        icon: FaWhatsapp,
        link: "https://wa.me/085829246829",
      },
      {
        text: "Sena Pernata",
        icon: FaYoutube,
        link: "https://www.youtube.com/channel/UClHMyo8KbLC0kbRKoIM9o0w",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
