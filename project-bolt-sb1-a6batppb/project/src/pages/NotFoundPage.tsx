import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Non Trouvée | MultiService Pro';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="text-3xl font-semibold mt-4 mb-6">Page Non Trouvée</h2>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
          Veuillez vérifier l'URL ou retourner à la page d'accueil.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary flex items-center justify-center">
            <Home className="mr-2 h-5 w-5" />
            Retour à l'accueil
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-secondary flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Page précédente
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;