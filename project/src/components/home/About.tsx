import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const benefits = [
    "Professionnels qualifiés et expérimentés",
    "Interventions rapides et efficaces",
    "Devis détaillés et transparents",
    "Suivi personnalisé de chaque projet",
    "Garantie de satisfaction"
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-100 rounded-lg z-0"></div>
              <img 
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="À propos de MultiService Pro" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">À Propos de Notre Entreprise</h2>
              <div className="w-20 h-1.5 bg-primary-600 mb-6"></div>
              
              <p className="text-gray-700 mb-6">
                Depuis plus de 10 ans, MultiService Pro est le partenaire de confiance pour tous vos besoins de services. Notre équipe d'experts qualifiés s'engage à fournir des solutions sur mesure avec un niveau de qualité inégalé.
              </p>
              <p className="text-gray-700 mb-8">
                Que vous soyez un particulier ou une entreprise, nous mettons notre expertise à votre service pour concrétiser vos projets, petits ou grands, avec professionnalisme et efficacité.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to="/about" className="btn btn-primary">
                En savoir plus
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;