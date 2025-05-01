import { Link } from 'react-router-dom';

type BlogCardProps = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
};

const BlogCard = ({ title, excerpt, date, category, image, slug }: BlogCardProps) => {
  return (
    <article className="card group h-full flex flex-col overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`} 
          className="text-primary-600 font-medium inline-flex items-center hover:underline mt-auto"
        >
          Lire la suite
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;