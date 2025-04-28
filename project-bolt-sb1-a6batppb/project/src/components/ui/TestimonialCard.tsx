type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  image: string;
};

const TestimonialCard = ({ quote, name, title, image }: TestimonialCardProps) => {
  return (
    <div className="card p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
      <div className="mt-2">
        <svg className="w-8 h-8 text-primary-200 mb-2" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15H7.5C7.5 11.15 10.65 8 14.5 8V6C9.55 6 5.5 10.05 5.5 15V22H12V15ZM24.5 15H20C20 11.15 23.15 8 27 8V6C22.05 6 18 10.05 18 15V22H24.5V15Z" />
        </svg>
        <p className="text-gray-700">{quote}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;