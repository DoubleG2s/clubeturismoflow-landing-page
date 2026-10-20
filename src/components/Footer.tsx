import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#041230] text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <Logo variant="light" />
          <p className="text-sm mt-2">Gestão completa para agências de viagens.</p>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Flowtur. Todos os direitos reservados.
        </div>
        <div className="flex gap-6 text-sm">
          <Link to="/termos" className="hover:text-brand-sky transition-colors">Termos de Uso</Link>
          <Link to="/privacidade" className="hover:text-brand-sky transition-colors">Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
