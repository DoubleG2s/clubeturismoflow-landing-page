import { motion } from 'motion/react';
import { ArrowRight, Cloud } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 text-sky-100/50"
        >
          <Cloud size={120} />
        </motion.div>
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-20 text-sky-100/50"
        >
          <Cloud size={180} />
        </motion.div>
        {/* Flight path line */}
        <svg className="absolute w-full h-full" style={{ zIndex: 0 }}>
          <path
            d="M -100 500 Q 400 100 1200 300"
            fill="transparent"
            stroke="rgba(14, 165, 233, 0.1)"
            strokeWidth="2"
            strokeDasharray="10 10"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-6 tracking-wide">
            SISTEMA DE GESTÃO MULTI-TENANT
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-aviation-blue leading-tight mb-6 font-display">
            Faça a gestão da sua agência <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">decolar</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Centralize reservas, hotéis, voos e créditos em uma plataforma ágil e segura. A jornada completa do seu cliente, do check-in ao check-out, sob seu controle.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-3 bg-aviation-blue text-white px-8 py-4 rounded-full text-lg font-medium overflow-hidden shadow-[0_10px_40px_-10px_rgba(10,37,64,0.5)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"></span>
            <span className="relative flex items-center gap-2 cursor-pointer">
              Fale conosco
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
