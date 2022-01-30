import { FunctionComponent } from "react";
import ProjectsNavbarItem from "./ProjectsNavbarItem";

const ProjectsNavbar: FunctionComponent<{
   handlerFilterCategory: Function;
   active: string;
}> = (props) => {
   return (
      <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
         <ProjectsNavbarItem value="all" {...props} />
         <ProjectsNavbarItem value="react" {...props} />
         <ProjectsNavbarItem value="mongo" {...props} />
         <ProjectsNavbarItem value="django" {...props} />
         <ProjectsNavbarItem value="node" {...props} />
      </div>
   );
};

export default ProjectsNavbar;
