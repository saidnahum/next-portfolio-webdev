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
         </div>
      );
   };

export default ProjectCard;
