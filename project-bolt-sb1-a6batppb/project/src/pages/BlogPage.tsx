import { useEffect, useState } from 'react';
import BlogCard from '../components/ui/BlogCard';
import SectionTitle from '../components/ui/SectionTitle';

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Blog | MultiService Pro';
  }, []);

  // Blog categories
  const categories = ['Tous', 'Conseils', 'Rénovation', 'Guide', 'Actualités', 'Tendances'];
  const [activeCategory, setActiveCategory] = useState('Tous');

  // Blog posts data
  const blogPosts = [
    {
      title: "5 astuces pour entretenir votre plomberie",
      excerpt: "Découvrez comment prévenir les problèmes de plomberie courants et économiser sur les réparations à long terme.",
      date: "15 juin 2025",
      category: "Conseils",
      image: "https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "astuces-entretien-plomberie"
    },
    {
      title: "Rénovation écologique : les solutions durables",
      excerpt: "Comment rénover votre maison de manière écologique avec des matériaux durables et des techniques respectueuses de l'environnement.",
      date: "2 juin 2025",
      category: "Rénovation",
      image: "https://images.pexels.com/photos/6444/pencil-architecture-desk-ruler.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "renovation-ecologique-solutions-durables"
    },
    {
      title: "Comment choisir le bon artisan pour vos projets",
      excerpt: "Les critères essentiels pour sélectionner un professionnel qualifié et de confiance pour vos travaux de rénovation et d'amélioration.",
      date: "28 mai 2025",
      category: "Guide",
      image: "https://images.pexels.com/photos/8092462/pexels-photo-8092462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "choisir-bon-artisan-projets"
    },
    {
      title: "Les tendances déco 2025 pour votre intérieur",
      excerpt: "Découvrez les dernières tendances en matière de décoration d'intérieur pour donner un nouveau souffle à votre espace de vie.",
      date: "15 mai 2025",
      category: "Tendances",
      image: "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "tendances-deco-2025"
    },
    {
      title: "Économiser l'énergie : astuces pour votre maison",
      excerpt: "Des conseils pratiques pour réduire votre consommation d'énergie et faire des économies tout en préservant l'environnement.",
      date: "5 mai 2025",
      category: "Conseils",
      image: "https://images.pexels.com/photos/3697749/pexels-photo-3697749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "economiser-energie-astuces-maison"
    },
    {
      title: "Réglementation 2025 : ce qui change pour vos travaux",
      excerpt: "Les nouvelles normes et régulations qui entreront en vigueur cette année et leur impact sur vos projets de construction et rénovation.",
      date: "22 avril 2025",
      category: "Actualités",
      image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "reglementation-2025-travaux"
    },
    {
      title: "Aménager un petit espace : les solutions intelligentes",
      excerpt: "Des idées créatives et pratiques pour optimiser l'espace dans les petits logements et créer une sensation d'espace.",
      date: "10 avril 2025",
      category: "Guide",
      image: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "amenager-petit-espace-solutions"
    },
    {
      title: "Jardin et terrasse : préparer le printemps",
      excerpt: "Guide complet pour préparer votre espace extérieur pour la belle saison et profiter d'un jardin florissant dès les premiers beaux jours.",
      date: "1 avril 2025",
      category: "Conseils",
      image: "https://images.pexels.com/photos/2409038/pexels-photo-2409038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "jardin-terrasse-preparer-printemps"
    },
    {
      title: "Les erreurs à éviter lors d'une rénovation",
      excerpt: "Les pièges classiques et comment les éviter pour assurer la réussite de votre projet de rénovation sans dépassement de budget.",
      date: "20 mars 2025",
      category: "Rénovation",
      image: "https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "erreurs-eviter-renovation"
    }
  ];

  // Filter blogs by category
  const filteredPosts = activeCategory === 'Tous'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Notre Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos derniers articles, conseils et actualités dans le domaine des services multi-techniques.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                image={post.image}
                slug={post.slug}
              />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">Aucun article trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Abonnez-vous à notre newsletter"
            subtitle="Recevez nos derniers articles et conseils directement dans votre boîte mail"
          />
          
          <div className="max-w-2xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                S'abonner
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-3 text-center">
              En vous inscrivant, vous acceptez notre politique de confidentialité. Vous pouvez vous désabonner à tout moment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;