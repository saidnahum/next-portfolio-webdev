import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInUp, stagger } from "../services/animations";
import { IProject } from "../services/type";


const ProjectCard: FunctionComponent<{
   project: IProject;
   showDetail: null | number,
   setShowDetail: (id: null | number) => void
}> = ({
   project: {
      name,
      image_path,
      category,
      deployed_url,
      github_url,
      description,
      tags,
      id
   },
   showDetail,
   setShowDetail
}) => {

      
      const [showModal, setShowModal] = useState(true);

      return (
         <div>
            <Image
               src={image_path}
               alt={name}
               className="cursor-pointer"
               onClick={() => setShowDetail(id)}
               width={300}
               height={150}
               layout="responsive"
            />
            <p className="my-2 text-center">{name}</p>
            <p className="text-center"><button className="px-2 py-1 rounded-lg bg-green text-white">Detail</button></p>

            

            {/* {
               showDetail === id && (
                  <div
                     className="grid md:grid-cols-2 absolute top-auto md:top-0 left-0  z-10 h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-3 md:p-6 rounded-lg"
                  >
                     <motion.div variants={stagger} initial='initial' animate='animate'>
                        <motion.div variants={fadeInUp} className="border-2 border-gray-100">
                           <Image
                              src={image_path}
                              alt={name}
                              className="cursor-pointer"
                              onClick={() => setShowDetail(id)}
                              width={300}
                              height={150}
                              layout="responsive"
                           />
                        </motion.div>

                        <motion.div className="flex justify-center my-4 space-x-3" variants={fadeInUp}>
                           <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 rounded-lg">
                              <AiFillGithub /> <span>Github</span>
                           </a>
                           <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 rounded-lg">
                              <AiFillProject /> <span>Project</span>
                           </a>
                        </motion.div>
                     </motion.div>

                     <motion.div variants={stagger} initial='initial' animate='animate'>
                        <motion.h2 className="mb-3 text-xl font-medium md:text-2xl" variants={fadeInUp}>{name}</motion.h2>
                        <motion.h3 className="mb-3 font-medium" variants={fadeInUp}>{description}</motion.h3>
                        <motion.div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider" variants={fadeInUp}>
                           {
                              tags.map((tag, index) => (
                                 <span key={index} className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-md">{tag}</span>
                              ))
                           }
                        </motion.div>
                     </motion.div>

                     <button
                        onClick={() => setShowDetail(null)}
                        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                     >
                        <MdClose size={30} />
                     </button>
                  </div>
               )
            } */}


         </div>
      );
   };

export default ProjectCard;
