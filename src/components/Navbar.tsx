import { motion } from 'motion/react';
import { PlaneTakeoff } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getHref = (hash: string) => isHome ? hash : `/${hash}`;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
        <Link to="/" className="flex items-center gap-2 text-aviation-blue font-display font-bold text-xl hover:opacity-80 transition-opacity">
          <PlaneTakeoff className="text-sky-500" />
          <span>Clube Turismo Flow</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href={getHref('#dores')} className="hover:text-sky-500 transition-colors">Turbulências</a>
          <a href={getHref('#hangar')} className="hover:text-sky-500 transition-colors">Seu Hangar</a>
          <a href={getHref('#funcionalidades')} className="hover:text-sky-500 transition-colors">Plano de Voo</a>
          <a href={getHref('#depoimentos')} className="hover:text-sky-500 transition-colors">Diário de Bordo</a>
        </div>
        <a href={getHref('#contato')} className="bg-aviation-blue text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors">
          Fazer Check-in
        </a>
      </div>
    </motion.nav>
  );
}
