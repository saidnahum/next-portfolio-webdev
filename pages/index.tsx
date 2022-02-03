import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { services } from '../services/data';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../services/animations';

export default function Home({endpoint}) {
		//console.log(endpoint);
		
	return (
		<motion.div className='flex flex-col px-6 pt-1 flex-grow' variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
			<Head>
				<title>SaidN | About</title>
			</Head>
			
			<h5 className='text-center sm:text-left'> 
				Soy un Desarrollador Web Independiente originario de México 🇲🇽, especializado en tecnologías JavaScript Full Stack y creación de Sistemas Gestores de Contenido (CMS).
				Desarrollo principal en React JS junto con TailwindCSS.
			</h5>

			<div className='p-4 mt-5 bg-gray-400 dark:bg-dark-100 ml-[-1.5rem] mr-[-1.5rem] flex-grow'>
				<h6 className='text-2xl font-bold tracking-wide text-center mb-5 xl:mb-10 xl:my-5'>Servicios</h6>
				
				<motion.div className='grid lg:grid-cols-2 gap-6' variants={stagger} initial='initial' animate='animate'>
					{
						services.map((service, index) => (
							<motion.div 
								key={index} 
								className='lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg' 
								variants={fadeInUp}
							>
								<ServiceCard service={service}/>
							</motion.div>
						))
					}
				</motion.div>
			</div>
		</motion.div>
	)
}

// export const getServerSideProps = async (context: GetServerSideProps) => {

// 	//const res = fetch(`${process.env.VERCEL_URL}/api/services`);
// 	//const data = await (await res).json();

// 	//console.log('SERVER', services);
	

// 	return {
// 		props: {
// 			endpoint: process.env.VERCEL_URL
// 		}
// 	}
// }

// export const getStaticProps = async (context: GetStaticProps) => {

// 	const res = fetch('http://localhost:3000/api/services');
// 	const data = await (await res).json();

// 	console.log('SERVER', data);
	

// 	return {
// 		props: {
// 			services: data.services
// 		}
// 	}
// }
