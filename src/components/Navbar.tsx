import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import Logo from './Logo';

const links = [
  { hash: '#modulos', label: 'Módulos' },
  { hash: '#jornada', label: 'Como funciona' },
  { hash: '#ia', label: 'Inteligência Artificial' },
  { hash: '#seguranca', label: 'Segurança' },
  { hash: '#assinatura', label: 'Assinatura' },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [open, setOpen] = useState(false);

  const getHref = (hash: string) => isHome ? hash : `/${hash}`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-5 py-3 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="hover:opacity-80 transition-opacity" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {links.map((link) => (
              <a key={link.hash} href={getHref(link.hash)} className="hover:text-brand-blue transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={getHref('#contato')}
              className="hidden sm:inline-block bg-brand-navy text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-blue transition-colors"
            >
              Solicitar demonstração
            </a>
            <button
              type="button"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 pt-4 pb-2 text-sm font-medium">
                {links.map((link) => (
                  <a
                    key={link.hash}
                    href={getHref(link.hash)}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={getHref('#contato')}
                  onClick={() => setOpen(false)}
                  className="mt-2 text-center bg-brand-navy text-white px-5 py-2.5 rounded-full hover:bg-brand-blue transition-colors"
                >
                  Solicitar demonstração
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
