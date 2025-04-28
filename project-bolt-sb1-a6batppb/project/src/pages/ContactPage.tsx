import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact | Rénov\' Lausanne';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Contactez-Nous</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  <p className="font-medium">Message envoyé avec succès!</p>
                  <p className="text-sm">Nous vous contacterons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service concerné
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="renovation">Rénovation</option>
                        <option value="plomberie">Plomberie</option>
                        <option value="electricite">Électricité</option>
                        <option value="menuiserie">Menuiserie</option>
                        <option value="peinture">Peinture</option>
                        <option value="jardinage">Jardinage</option>
                        <option value="depannage">Dépannage</option>
                        <option value="conseil">Conseil & Design</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Coordonnées</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium">Adresse</h3>
                      <p className="text-gray-600">Avenue de Valmont 20<br />1010 Lausanne</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium">Téléphone</h3>
                      <p className="text-gray-600">076 688 02 82</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">renovlausanne@mail.ch</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium">Horaires d'ouverture</h3>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 8h00 - 18h00<br />
                        Samedi: Fermé<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Service d'urgence</h3>
                <p className="mb-4">
                  Besoin d'une intervention rapide ? Notre équipe de dépannage est disponible 24h/24 et 7j/7 pour les urgences.
                </p>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-semibold">076 688 02 82</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.5876624930894!2d6.6336675!3d46.5284899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e3452f7b81d%3A0x9d5e2a694153b810!2sAv.%20de%20Valmont%2020%2C%201010%20Lausanne%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1709913425012!5m2!1sen!2sus"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Carte"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
