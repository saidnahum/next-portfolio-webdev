import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { fadeInUp, routeAnimation, stagger } from '../services/animations';
import { projects as projectsData } from '../services/data';
import { Category } from '../services/type';

const Projects = () => {

   const [projects, setProjects] = useState(projectsData);
   const [active, setActive] = useState("all");

   const [showDetail, setShowDetail] = useState<number|null>(null);

   const handlerFilterCategory = (category: Category | "all") => {
      if (category === "all") {
         setProjects(projectsData);
         setActive(category);
         return;
      }

      const newArray = projectsData.filter((project) =>
         project.category.includes(category)
      );
      setProjects(newArray);
      setActive(category);
   };

   return (
      <motion.div className='px-5 py-2 overflow-y-scroll h-[60vh]' variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
         <Head>
            <title>SaidN | Projects</title>
         </Head>

         <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active}/>

         <motion.div className='grid grid-cols-12 gap-4 my-3 relative' variants={stagger} initial='initial' animate='animate'>
            {
               projects.map((project, index) => (
                  <motion.div
                     key={index}
                     className='col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg'
                     variants={fadeInUp}
                  >
                     <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                  </motion.div>
               ))
            }
         </motion.div>
      </motion.div>
   )
};

export default Projects;
