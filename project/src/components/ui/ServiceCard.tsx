import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
};

const ServiceCard = ({ title, description, icon, link = '/services' }: ServiceCardProps) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <Link 
          to={link} 
          className="text-primary-600 font-medium inline-flex items-center hover:underline"
        >
          En savoir plus
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;