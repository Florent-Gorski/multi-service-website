import { useEffect } from 'react';
import { Hammer, Wrench, PaintBucket, Home, Scissors, PenTool as Tool, Lightbulb, Eye } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';
import SectionTitle from '../components/ui/SectionTitle';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Nos Services | MultiService Pro';
  }, []);

  const services = [
    {
      title: 'Rénovation',
      description: 'Rénovation complète ou partielle de votre maison ou appartement. Transformation d\'espaces adaptés à vos besoins et à votre style de vie.',
      icon: <Home className="h-6 w-6" />,
    },
    {
      title: 'Plomberie',
      description: 'Installation et réparation de systèmes de plomberie. Dépannage urgent et maintenance préventive pour éviter les fuites et autres problèmes.',
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      title: 'Électricité',
      description: 'Installation électrique aux normes, dépannage et mise en conformité. Services résidentiels et commerciaux pour tous vos besoins électriques.',
      icon: <Tool className="h-6 w-6" />,
    },
    {
      title: 'Menuiserie',
      description: 'Création et réparation de mobilier sur mesure. Pose de parquets, portes et fenêtres. Travaux de finition soignés pour un résultat parfait.',
      icon: <Hammer className="h-6 w-6" />,
    },
    {
      title: 'Peinture',
      description: 'Travaux de peinture intérieure et extérieure. Finitions soignées et conseils décoratifs personnalisés pour transformer vos espaces.',
      icon: <PaintBucket className="h-6 w-6" />,
    },
    {
      title: 'Jardinage',
      description: 'Entretien d\'espaces verts, aménagement paysager et services de tonte régulière. Création de jardins adaptés à vos goûts et à votre style de vie.',
      icon: <Scissors className="h-6 w-6" />,
    },
    {
      title: 'Dépannage',
      description: 'Service d\'urgence pour tous vos problèmes domestiques. Disponible 7j/7 pour résoudre rapidement vos soucis techniques.',
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: 'Conseil & Design',
      description: 'Conseils professionnels pour vos projets d\'aménagement et de décoration. Solutions personnalisées pour optimiser vos espaces.',
      icon: <Eye className="h-6 w-6" />,
    },
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des solutions professionnelles pour tous vos besoins, réalisées par des experts qualifiés et passionnés.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
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
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Notre Processus"
            subtitle="Nous suivons une méthodologie rigoureuse pour garantir des résultats de qualité"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Nous discutons de vos besoins et établissons un cahier des charges précis.",
              },
              {
                step: "2",
                title: "Devis",
                description: "Nous vous proposons un devis détaillé et transparent sans frais cachés.",
              },
              {
                step: "3",
                title: "Réalisation",
                description: "Nos équipes qualifiées réalisent les travaux selon les spécifications convenues.",
              },
              {
                step: "4",
                title: "Garantie",
                description: "Nous assurons un suivi et garantissons la qualité de nos prestations.",
              },
            ].map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary-600 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Prêt à démarrer votre projet?</h2>
              <p className="text-primary-100 text-lg">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins.
              </p>
            </div>
            <div>
              <a
                href="/contact"
                className="btn bg-white text-primary-600 hover:bg-gray-100"
              >
                Demander un devis gratuit
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;