import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Clock, Shield } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'À Propos | MultiService Pro';
  }, []);

  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Expertise",
      description: "Notre équipe est composée de professionnels qualifiés et expérimentés dans leurs domaines respectifs."
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Qualité",
      description: "Nous nous engageons à fournir des services de haute qualité avec une attention particulière aux détails."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Ponctualité",
      description: "Respect des délais et des engagements pris envers nos clients, sans compromis."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Fiabilité",
      description: "Des solutions durables et fiables pour tous vos projets, garanties par notre expertise."
    }
  ];

  const teamMembers = [
    {
      name: "Jean Dupont",
      role: "Fondateur & Directeur",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Jean a fondé MultiService Pro avec plus de 15 ans d'expérience dans le secteur du bâtiment."
    },
    {
      name: "Marie Leclerc",
      role: "Responsable Clientèle",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Marie coordonne toutes les relations clients et s'assure de votre satisfaction à chaque étape."
    },
    {
      name: "Pierre Martin",
      role: "Chef de Projet",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Pierre supervise les projets de grande envergure avec précision et un souci du détail inégalé."
    },
    {
      name: "Sophie Bernard",
      role: "Experte en Design",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Sophie apporte son expertise en design d'intérieur pour créer des espaces fonctionnels et esthétiques."
    }
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">À Propos de Nous</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre histoire, notre équipe et notre vision pour vous offrir des services d'excellence.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Notre équipe" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
                <div className="w-20 h-1.5 bg-primary-600 mb-6"></div>
                
                <p className="text-gray-700 mb-6">
                  Fondée en 2010, MultiService Pro est née de la vision de Jean Dupont, un artisan passionné qui souhaitait offrir des services de qualité supérieure dans tous les domaines de l'habitat et du bâtiment.
                </p>
                <p className="text-gray-700 mb-6">
                  Au fil des années, notre entreprise s'est développée pour devenir un acteur incontournable dans le secteur des services multi-techniques. Nous avons constitué une équipe d'experts qualifiés, tous partageant la même passion pour l'excellence et le service client.
                </p>
                <p className="text-gray-700 mb-6">
                  Aujourd'hui, avec plus de 500 projets réalisés et des centaines de clients satisfaits, nous continuons à nous développer tout en restant fidèles à nos valeurs fondamentales : qualité, professionnalisme et satisfaction client.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="font-medium">+500 projets réalisés</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="font-medium">15 ans d'expérience</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="font-medium">100% satisfaction client</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Nos Valeurs" 
            subtitle="Les principes qui guident chacune de nos actions et décisions" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="mx-auto w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Notre Équipe" 
            subtitle="Des professionnels passionnés qui travaillent ensemble pour vous offrir le meilleur service" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Prêt à commencer votre projet avec nous?</h2>
            <p className="text-lg mb-8 text-primary-100">
              Notre équipe est prête à vous accompagner dans la réalisation de vos projets avec professionnalisme et savoir-faire.
            </p>
            <a href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;