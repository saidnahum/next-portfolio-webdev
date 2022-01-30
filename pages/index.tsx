import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { services } from '../services/data';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
		
	return (
		<div className='flex flex-col px-6 pt-1 flex-grow'>
			<Head>
				<title>SaidN | About</title>
			</Head>
			
			<h5 className='text-center sm:text-left'> 
				I am currently pursuing B.Tech Degree(Final Year) in Computer Science
				Engineering from Academy of Technology. I have 3+ years of experience in
				Web Development and I have a Youtube Channel where I teach Full Stack
				Web Development
			</h5>

			<div className='p-4 mt-5 bg-gray-400 dark:bg-dark-100 ml-[-1.5rem] mr-[-1.5rem] flex-grow'>
				<h6 className='my-5 mb-10 text-xl font-bold tracking-wide'>What I Offer</h6>
				
				<div className='grid lg:grid-cols-2 gap-6'>
					{
						services.map((service, index) => (
							<div key={index} className='lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg'>
								<ServiceCard service={service}/>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

// export const getServerSideProps = async (context: GetServerSideProps) => {

// 	const res = fetch('http://localhost:3000/api/services');
// 	const data = await (await res).json();

// 	console.log('SERVER', services);
	

// 	return {
// 		props: {
// 			services: data.services
// 		}
// 	}
// }

// export const getStaticProps = async (context: GetStaticProps) => {

// 	const res = fetch('http://localhost:3000/api/services');
// 	const data = await (await res).json();

// 	console.log('SERVER', services);
	

// 	return {
// 		props: {
// 			services: data.services
// 		}
// 	}
// }
