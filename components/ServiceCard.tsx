import React, { FunctionComponent } from 'react';
import { IService } from '../services/type';

const ServiceCard:FunctionComponent<{service: IService}> = ({service: {Icon, title, description}}) => {

   const createMarkup = () => {
      return {
         __html: description
      }
   }

   return (
      <div className='p-2 flex items-center space-x-4'>
         <Icon className='w-12 h-12 text-green'/>
         <div>
            <h4 className='font-bold'>{title}</h4>
            <p dangerouslySetInnerHTML={createMarkup()}/>
         </div>
      </div>
   );
};

export default ServiceCard;
