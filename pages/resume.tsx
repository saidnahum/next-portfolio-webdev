import Head from 'next/head';
import React from 'react';
import Bar from '../components/Bar';
import { languages, tools } from '../services/data';

const resume = () => {
   return (
      <div className='px-6 py-2'>
         <Head>
				<title>SaidN | Resume</title>
			</Head>
         
         {/* Education and experience */}
         <div className='grid gap-6 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Education</h5>
               <div>
                  <h5 className='my-2 text-xl font-bold'>Computer Science Engineering</h5>
                  <p className='font-semibold'>Academy of Technology (2017-2011)</p>
                  <p className='my-3'>I am currently pursuing B.tech in Computer Science Engineering from Academy of Technology.</p>
               </div>
            </div>

            <div>
               <h5 className='my-3 text-2xl font-bold'>Experience</h5>
               <div>
                  <h5 className='my-2 text-xl font-bold'>Software Engineering Jr</h5>
                  <p className='font-semibold'>TCS (2011 - 2020)</p>
                  <p className='my-3'>Beta tester for petrophysics software for a Mexican oil company.</p>
               </div>
            </div>
            
         </div>

         {/* Languages and tools */}
         <div className='grid gap-6 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>

               <div className='my-2'>
                  {
                     languages.map((language, index) => (<Bar data={language} key={index}/>))
                  }
               </div>
            </div>

            <div>
               <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>

               <div className='my-2'>
                  {
                     tools.map((tool, index) => (<Bar data={tool} key={index}/>))
                  }
               </div>
            </div>
         </div>
      </div>
   )
};

export default resume;
