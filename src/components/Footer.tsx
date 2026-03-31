import { PlaneTakeoff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#051324] text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white font-display font-bold text-xl">
          <PlaneTakeoff className="text-sky-500" />
          <span>Clube Turismo Flow</span>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Clube Turismo Flow. Todos os direitos reservados.
        </div>
        <div className="flex gap-6 text-sm">
          <Link to="/termos" className="hover:text-sky-400 transition-colors">Termos de Uso</Link>
          <Link to="/privacidade" className="hover:text-sky-400 transition-colors">Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
