import Head from 'next/head';
import React from 'react';
import Bar from '../components/Bar';
import { languages, tools } from '../services/data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../services/animations';

const resume = () => {


   return (
      <motion.div className='px-6 py-2' variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
         <Head>
				<title>SaidN | Resume</title>
			</Head>
         
         {/* Education and experience */}
         <div className='grid gap-6 md:grid-cols-2'>
            <motion.div variants={fadeInUp} initial='initial' animate='animate'>
               <h5 className='my-3 text-2xl font-bold'>Educación</h5>
               <div>
                  <h5 className='my-2 text-xl font-bold'>Ing. Geofísico</h5>
                  <p className='font-semibold'>Instituto Politécnico Nacional (2007-2011)</p>
                  <p className='my-3'>Maestría en Geociencias y Administración de los Recursos Naturales (2013-2015)</p>
               </div>
            </motion.div>

            <motion.div variants={fadeInUp} initial='initial' animate='animate'>
               <h5 className='my-3 text-2xl font-bold'>Experiencia Freelancer</h5>
               <div>
                  <h5 className='my-2 text-xl font-bold'>Desarrollador Web</h5>
                  <p className='font-semibold'>(2018 - 2022)</p>
                  <p className='my-3'>Desarrollo de páginas Web, Sistemas Gestores de Contenido CMS y Portafolios de Trabajo</p>
               </div>
            </motion.div>
         </div>

         {/* Languages and tools */}
         <div className='grid gap-6 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Lenguajes & Frameworks</h5>

               <div className='my-2'>
                  {
                     languages.map((language, index) => (<Bar data={language} key={index}/>))
                  }
               </div>
            </div>

            <div>
               <h5 className='my-3 text-2xl font-bold'>Herramientas & Softwares</h5>

               <div className='my-2'>
                  {
                     tools.map((tool, index) => (<Bar data={tool} key={index}/>))
                  }
               </div>
            </div>
         </div>
      </motion.div>
   )
};

export default resume;