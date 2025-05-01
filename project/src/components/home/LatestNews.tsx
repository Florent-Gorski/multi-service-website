import { Link } from 'react-router-dom';
import BlogCard from '../ui/BlogCard';
import SectionTitle from '../ui/SectionTitle';

const LatestNews = () => {
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
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="Dernières Actualités" 
          subtitle="Découvrez nos derniers articles, conseils et nouvelles" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
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
        
        <div className="text-center mt-12">
          <Link to="/blog" className="btn btn-primary">
            Voir tous les articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;