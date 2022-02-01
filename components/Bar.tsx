import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { ISkill } from "../services/type";

const Bar:FunctionComponent<{
   data:ISkill
}> = ({data: {Icon, level, name}}) => {

   const bar_width = `${level}%`;

   const variants = {
      initial: {
         width: 0
      },
      animate: {
         width: bar_width,
         transition: {
            duration: 0.4,
            type: "spring",
            damping: 10,
            stiffness: 100
         }
      }
   }

   return (
      <div className="text-white my-2 bg-gray-300 dark:bg-dark-300 rounded-full">
         <motion.div 
            className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600"
            style={{width: bar_width}} variants={variants} initial='initial' animate='animate'>
            <Icon className="mr-3"/> {name}
         </motion.div>
      </div>
   );
};

export default Bar;
