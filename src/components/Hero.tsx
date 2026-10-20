import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Plane, Hotel, CalendarCheck, Bell } from 'lucide-react';

// Cards ilustrativos do painel de reservas (status calculado + percentual do checklist)
const reservas = [
  { cliente: 'Família Andrade', produto: 'Pacote · Maceió', status: 'Hoje', statusClass: 'bg-sky-100 text-sky-700', progresso: 90 },
  { cliente: 'Ricardo Lima', produto: 'Voo · GRU → LIS', status: 'Atenção', statusClass: 'bg-amber-100 text-amber-700', progresso: 55 },
  { cliente: 'Grupo Bem-Estar', produto: 'Cruzeiro · Costa Brasileira', status: 'Em viagem', statusClass: 'bg-emerald-100 text-emerald-700', progresso: 100 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Elementos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-brand-sky/15 rounded-full blur-3xl -top-60 -right-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl top-40 -left-60"></div>
        <svg className="absolute w-full h-full" aria-hidden="true">
          <path
            d="M -100 520 Q 500 80 1500 260"
            fill="transparent"
            stroke="rgba(29, 111, 224, 0.12)"
            strokeWidth="2"
            strokeDasharray="10 10"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-sky-100 text-sky-700 text-xs md:text-sm font-semibold mb-6 tracking-wide">
            <Sparkles size={14} /> SISTEMA DE GESTÃO PARA AGÊNCIAS DE VIAGENS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-navy leading-tight mb-6">
            Toda a operação da sua agência em um <span className="text-gradient">só fluxo</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
            O Flowtur centraliza reservas, vendas, cotações, hotéis, voos, clientes, tarefas e créditos em uma plataforma web segura, com assistente de inteligência artificial que lê vouchers e preenche formulários por você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-full text-lg font-medium overflow-hidden shadow-[0_10px_40px_-10px_rgba(11,42,102,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-sky to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                Solicitar demonstração
                <ArrowRight size={20} />
              </span>
            </motion.a>
            <a
              href="#modulos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium text-brand-navy border border-slate-200 bg-white hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              Conhecer os módulos
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-slate-500">
            <span className="flex items-center gap-2"><Plane size={16} className="text-brand-blue" /> 100% web</span>
            <span className="flex items-center gap-2"><Hotel size={16} className="text-brand-blue" /> Multiempresa</span>
            <span className="flex items-center gap-2"><Sparkles size={16} className="text-brand-blue" /> IA integrada</span>
          </div>
        </motion.div>

        {/* Prévia ilustrativa do painel */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(11,42,102,0.35)] border border-slate-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <span className="text-xs font-medium text-slate-400">Reservas · Painel</span>
              <Bell size={16} className="text-slate-400" />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                {['Hoje', 'Amanhã', 'Em viagem'].map((filtro, i) => (
                  <span
                    key={filtro}
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${i === 0 ? 'bg-brand-navy text-white' : 'bg-slate-100 text-slate-500'}`}
                  >
                    {filtro}
                  </span>
                ))}
              </div>

              {reservas.map((r, i) => (
                <motion.div
                  key={r.cliente}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="rounded-2xl border border-slate-100 p-4"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">{r.cliente}</p>
                      <p className="text-xs text-slate-500">{r.produto}</p>
                    </div>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${r.statusClass}`}>
                      {r.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${r.progresso}%` }}
                        transition={{ delay: 0.8 + i * 0.15, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-brand-sky to-brand-blue rounded-full"
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-500 w-10 text-right">{r.progresso}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <CalendarCheck size={20} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Embarques amanhã</p>
              <p className="text-sm font-bold text-brand-navy">4 reservas · 11 passageiros</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
