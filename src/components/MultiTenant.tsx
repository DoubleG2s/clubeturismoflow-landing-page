import { motion } from 'motion/react';
import { ShieldCheck, Building2, Lock } from 'lucide-react';

export default function MultiTenant() {
  return (
    <section id="hangar" className="py-24 bg-aviation-blue text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[800px] h-[800px] bg-sky-400 rounded-full blur-3xl -top-96 -right-96"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl -bottom-48 -left-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Arquitetura Exclusiva
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Seu próprio <span className="text-sky-400">Hangar Privado</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Desenvolvido para escalar com múltiplos escritórios ou franquias. Nossa arquitetura Multi-Tenant reativa garante que os dados da sua agência permaneçam 100% isolados, protegidos e íntegros.
            </p>
            <ul className="space-y-6">
              {[
                { icon: <ShieldCheck className="text-sky-400" />, text: "Proteção ativa contra manipulação de dados (IDOR)" },
                { icon: <Building2 className="text-sky-400" />, text: "Isolamento completo entre diferentes franquias" },
                { icon: <Lock className="text-sky-400" />, text: "Segurança de nível enterprise com Supabase" }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-4 text-slate-200"
                >
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-dark rounded-3xl p-8 border border-white/10 shadow-2xl relative z-10">
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono">tenant_id: ag_flow_001</div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 bg-white/5 rounded-xl flex items-center px-4 gap-4">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center">
                      <Lock size={14} className="text-sky-400" />
                    </div>
                    <div className="h-2 w-1/3 bg-white/10 rounded-full"></div>
                    <div className="h-2 w-1/4 bg-white/5 rounded-full ml-auto"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
