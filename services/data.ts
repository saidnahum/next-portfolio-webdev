import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from 'react-icons/bs'
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService } from './type'
import { ISkill } from './type'

export const services: IService[] = [
   {
      Icon: RiComputerLine,
      title: "Desarrollo Frontend",
      description:
         "Creación de SPA escalables y responsivas utilizando <b> HTML</b>, <b>CSS</b>   and <b>React.js</b> como base.",
   },
   {
      Icon: FaServer,
      title: "Desarrollo Backend",
      description:
         "Manejo de Bases de Datos, Servidores, API's utilizando <b>Express </b> & otros Frameworks",
   },
   {
      Icon: AiOutlineApi,
      title: "Desarrollo de API's",
      description:
         "Desarrolo de API's utilizando <b>Mongo DB</b>  , <b>Node Js</b>  y <b>Headles CMS.<b>",
   },
   {
      Icon: MdDeveloperMode,
      title: "Desarrollo Competitivo",
      description: "Desarrollo utilizando las <b>buenas prácticas</b> para resolver problemas de la necesidad del usuario.",
   },
   {
      Icon: AiOutlineAntDesign,
      title: "Diseño UI/UX",
      description:
         "Desarrollo de interfaces de usuario utilizando <b>Figma</b> y <b>plantillas</b> Web Responsivas.",
   },
   {
      Icon: RiComputerLine,
      title: "Aplicaciones Multi Plataforma",
      description:
         "Desarrollo de Aplicaciones Multiplataforma (Android e iOS) con <b>React Native</b> y <b>Flutter.</b>",
   }
]

export const languages: ISkill[] = [
   {
      Icon: BsCircleFill,
      name: "JavaScript",
      level: "70",
   },
   {
      Icon: BsCircleFill,
      name: "PHP",
      level: "60",
   },
   {
      Icon: BsCircleFill,
      name: "Python",
      level: "50",
   },
   {
      Icon: BsCircleFill,
      name: "React Js",
      level: "60",
   },

   {
      Icon: BsCircleFill,
      name: "Vue Js",
      level: "60",
   },
   {
      Icon: BsCircleFill,
      name: "Bootstrap",
      level: "60",
   },

   {
      Icon: BsCircleFill,
      name: "Tailwind CSS",
      level: "75",
   },
];

export const tools: ISkill[] = [
   {
      Icon: BsCircleFill,
      name: "Figma",
      level: "65",
   },
   {
      Icon: BsCircleFill,
      name: "Photoshop",
      level: "45",
   },
   {
      Icon: BsCircleFill,
      name: "Illustrator",
      level: "60",
   },
   {
      Icon: BsCircleFill,
      name: "Capture One",
      level: "45",
   },
];

export const projects: IProject[] = [
   {
      id: 1,
      name: "Hulu Clone",
      description:
         "Clon del sitio Hulu desarrollado con React JS y Tailwind CSS.",
      image_path: "/images/hulu.png",
      deployed_url: "https://hulu.saidn.ml",
      github_url: "https://github.com/saidnahum/prod-hulu-clone",
      category: ["react", "tailwind"],
      tags: ["React JS", "Tailwind", "API"],
   },
   {
      id: 2,
      name: "La Pizzería",
      image_path: "/images/pizza.png",
      deployed_url: "https://pizza.saidn.ml",
      github_url: "https://github.com/saidnahum/prod-react-pizza-app",
      category: ["react", "styled", "spa"],
      description:
         "Aplicacion/Página Web adaptada a dispositivos móviles para un Restaurante de Pizzas y Ensaladas",
      tags: ["React", "Styled Components", "SPA"],
   },

   {
      id: 3,
      name: "TRAVLR",
      image_path: "/images/travel.png",
      deployed_url: "https://travel.saidn.ml",
      github_url: "https://github.com/saidnahum/prod-react-travel-app",
      category: ["react", "css"],
      description:
         "Página Web para una Agencia de Viajes llena de Aventuras y Destinos",
      tags: ["React JS", "CSS"],
   },

   {
      id: 4,
      name: "Agencia Creativa",
      image_path: "/images/agencia.png",
      deployed_url: "https://agencia.saidn.ml/",
      github_url: "https://github.com/saidnahum/prod-react-agency-app",
      category: ["react", "styled", "spa"],
      description:
         "Página Web para una Agencia Creativa de Desarrollo de Proyectos Empresariales",
      tags: ["React", "Styled Components", "SPA"],
   },

   {
      id: 5,
      name: "GPT-3 Web",
      image_path: "/images/landing1.png",
      deployed_url: "https://landing1.saidn.ml",
      github_url: "https://github.com/saidnahum/prod-react-gpt3-landing",
      category: ["react", "css", "spa"],
      description:
         "Aplicación Web de Página Única desarrollada con React Js y Css, responsiva y colores únicos",
      tags: ["React", "Css", "SPA"],
   },

   {
      id: 6,
      name: "Plataforma PixelWeb",
      image_path: "/images/pixelweb.png",
      deployed_url: "https://landing2.saidn.ml/",
      github_url: "https://github.com/saidnahum/prod-react-pixelweb-landing",
      category: ["react", "tailwind", "spa"],
      description:
         "Página Web para una plataforma creativa para desarollo UX/UI",
      tags: ["React", "Tailwind", "SPA"],
   },
   {
      id: 7,
      name: "Pixel Blog",
      image_path: "/images/pixelblog.png",
      deployed_url: "https://pixelblog.saidn.ml/",
      github_url: "https://github.com/saidnahum/prod-next-graphcms-blog",
      category: ["next", "tailwind", "cms"],
      description:
         "Blog desarrollado con Next Js como Frontend, GraphCMS como Backend y Tailwind CSS",
      tags: ["Blog", "Next", "Strapi", "Tailwind", "GraphQL"],
   },
   {
      id: 8,
      name: "SaidN Portafolio/Blog",
      image_path: "/images/portafolio.png",
      deployed_url: "https://portfolio.saidn.ml/",
      github_url: "https://github.com/saidnahum/prod-next-graphcms-portfolio",
      category: ["next", "tailwind", "cms"],
      description:
         "Portafolio de Trabajo y Blog desarrollado con Next Js como Frontend, GraphCMS como Backend y Tailwind CSS",
      tags: ["Blog", "Next", "Strapi", "Tailwind", "GraphQL"],
   },
   {
      id: 9,
      name: "Portafolio Irene Ledesma",
      image_path: "/images/irene.png",
      deployed_url: "https://ireneledesma.com.mx/",
      github_url: "#",
      category: ["javascript"],
      description:
         "Portafolio de Trabajo y Blog desarrollado con Next Js como Frontend, GraphCMS como Backend y Tailwind CSS",
      tags: ["Vanilla JS", "Css"],
   },
];