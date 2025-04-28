import { PenTool as Tool, Hammer, PaintBucket, Wrench, Home, Scissors } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import SectionTitle from '../ui/SectionTitle';

const Services = () => {
  const services = [
    {
      title: 'Rénovation',
      description: 'Rénovation complète ou partielle de votre maison ou appartement. Transformation d\'espaces adaptés à vos besoins.',
      icon: <Home className="h-6 w-6" />,
    },
    {
      title: 'Plomberie',
      description: 'Installation et réparation de systèmes de plomberie. Dépannage urgent et maintenance préventive.',
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      title: 'Électricité',
      description: 'Installation électrique aux normes, dépannage et mise en conformité. Services résidentiels et commerciaux.',
      icon: <Tool className="h-6 w-6" />,
    },
    {
      title: 'Menuiserie',
      description: 'Création et réparation de mobilier sur mesure. Pose de parquets, portes et fenêtres.',
      icon: <Hammer className="h-6 w-6" />,
    },
    {
      title: 'Peinture',
      description: 'Travaux de peinture intérieure et extérieure. Finitions soignées et conseils décoratifs personnalisés.',
      icon: <PaintBucket className="h-6 w-6" />,
    },
    {
      title: 'Jardinage',
      description: 'Entretien d\'espaces verts, aménagement paysager et services de tonte régulière.',
      icon: <Scissors className="h-6 w-6" />,
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Nos Services" 
          subtitle="Des solutions complètes pour répondre à tous vos besoins avec professionnalisme et qualité" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/services" className="btn btn-primary">
            Voir tous nos services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;