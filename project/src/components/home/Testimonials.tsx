import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';
import SectionTitle from '../ui/SectionTitle';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Le service a été impeccable. L'équipe a réalisé des travaux de rénovation de grande qualité et dans les délais prévus. Je recommande vivement !",
      name: "Marie Durand",
      title: "Propriétaire à Paris",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Professional et réactif, MultiService Pro a su répondre à toutes mes attentes concernant les travaux de plomberie. Service client exceptionnel !",
      name: "Thomas Bernard",
      title: "Gérant de restaurant",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Je suis très satisfait de la qualité des services fournis. L'équipe était ponctuelle, professionnelle et a fait un travail remarquable.",
      name: "Sophie Martin",
      title: "Architecte d'intérieur",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "MultiService Pro a transformé notre jardin en un véritable havre de paix. Nous sommes ravis du résultat et du professionnalisme de l'équipe.",
      name: "Jean Dupont",
      title: "Client particulier",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = testimonials.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Ce que disent nos clients" 
          subtitle="Découvrez les témoignages de nos clients satisfaits" 
        />
        
        <div className="relative">
          <button 
            onClick={handlePrev} 
            className={`absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          <div className="overflow-hidden py-4">
            <motion.div 
              ref={containerRef}
              className="flex gap-6"
              initial={false}
              animate={{ x: `calc(-${currentIndex * 100}% / 3)` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ width: '300%' }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0">
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                    image={testimonial.image}
                  />
                </div>
              ))}
            </motion.div>
          </div>
          
          <button 
            onClick={handleNext} 
            className={`absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all ${
              currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;