import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment, FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInUp, stagger } from "../services/animations";
import { IProject } from "../services/type";


const ProjectCardModal: FunctionComponent<{
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

      let [isOpen, setIsOpen] = useState(false)

      function closeModal() {
         setIsOpen(false)
      }

      function openModal() {
         setIsOpen(true)
      }

      return (
         <div>
            <Image
               src={image_path}
               alt={name}
               className="cursor-pointer"
               onClick={openModal}
               width={300}
               height={150}
               layout="responsive"
            />
            <p className="my-2 text-center">{name}</p>

            <Transition appear show={isOpen} as={Fragment}>
               <Dialog
                  as="div"
                  className="fixed inset-0 z-10 overflow-y-auto"
                  onClose={closeModal}
               >
                  <div className="min-h-screen px-4 text-center ">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                     >
                        <Dialog.Overlay className="fixed inset-0" />
                     </Transition.Child>

                     {/* This element is to trick the browser into centering the modal contents. */}
                     <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                     >
                        &#8203;
                     </span>
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-dark-100 shadow-xl rounded-2xl border">
                           <div className="grid md:grid-cols-2 gap-x-12 text-black dark:text-white dark:bg-dark-100 rounded-lg">
                              <motion.div variants={stagger} initial='initial' animate='animate'>
                                 <motion.div variants={fadeInUp} className="border-2 border-gray-100 dark:border-gray-500">
                                    <Image
                                       src={image_path}
                                       alt={name}
                                       width={300}
                                       height={150}
                                       layout="responsive"
                                    />
                                 </motion.div>

                                 <motion.div className="flex justify-center my-4 space-x-3" variants={fadeInUp}>
                                    <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 rounded-lg hover:bg-gray-300 dark:hover:bg-dark-700">
                                       <AiFillGithub /> <span>Github</span>
                                    </a>

                                    <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 rounded-lg hover:bg-gray-300 dark:hover:bg-dark-700">
                                       <AiFillProject /> <span>Project</span>
                                    </a>
                                 </motion.div>
                              </motion.div>

                              <motion.div variants={stagger} initial='initial' animate='animate' className="flex flex-col items-center justify-center text-center">
                                 <motion.h2 className="mb-3 text-xl font-medium md:text-2xl" variants={fadeInUp}>{name}</motion.h2>
                                 <motion.h3 className="mb-3 font-medium text-gray-600 dark:text-gray-400" variants={fadeInUp}>{description}</motion.h3>
                                 <motion.div className="flex flex-wrap justify-center mt-5 space-x-2 text-sm tracking-wider" variants={fadeInUp}>
                                    {
                                       tags.map((tag, index) => (
                                          <span key={index} className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-md">{tag}</span>
                                       ))
                                    }
                                 </motion.div>
                              </motion.div>
                              <button
                                 onClick={closeModal}
                                 className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                              >
                                 <MdClose size={30} />
                              </button>
                           </div>





                        </div>
                     </Transition.Child>
                  </div>
               </Dialog>
            </Transition>


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

export default ProjectCardModal;
