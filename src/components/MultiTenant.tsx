import { motion } from 'motion/react';
import { ShieldCheck, Building2, Lock, KeyRound, UserCog, Bot } from 'lucide-react';

const items = [
  { icon: Building2, text: 'Cada agência enxerga apenas os próprios dados' },
  { icon: ShieldCheck, text: 'Isolamento garantido no banco de dados com Row Level Security' },
  { icon: KeyRound, text: 'Chaves de pagamento e de IA ficam somente no servidor' },
  { icon: UserCog, text: 'Perfis de acesso para administradores e agentes de viagem' },
  { icon: Bot, text: 'A IA não exclui dados e não salva nada sem a ação do usuário' },
];

export default function MultiTenant() {
  return (
    <section id="seguranca" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-brand-sky rounded-full blur-3xl -top-96 -right-96"></div>
        <div className="absolute w-[600px] h-[600px] bg-brand-blue rounded-full blur-3xl -bottom-48 -left-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-sky font-semibold tracking-wider uppercase text-sm mb-4 block">
              Segurança e multiempresa
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Os dados da sua agência, <span className="text-brand-sky">só da sua agência</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              O Flowtur é multi-tenant: várias agências usam a mesma plataforma, mas cada empresa opera em um ambiente isolado. A separação é feita no aplicativo e garantida no banco de dados.
            </p>
            <ul className="space-y-5">
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="flex items-center gap-4 text-slate-200"
                  >
                    <div className="p-2 bg-white/10 rounded-lg shrink-0">
                      <Icon className="text-brand-sky" size={20} />
                    </div>
                    <span>{item.text}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid gap-4">
              {['Agência Horizonte', 'Viagens Mar Azul', 'Rota Sul Turismo'].map((agencia, i) => (
                <div key={agencia} className="glass-dark rounded-2xl p-5 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-sky/20 flex items-center justify-center">
                        <Building2 size={18} className="text-brand-sky" />
                      </div>
                      <span className="font-semibold">{agencia}</span>
                    </div>
                    <Lock size={16} className="text-emerald-400" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['Reservas', 'Vendas', 'Clientes'].map((tabela) => (
                      <div key={tabela} className="rounded-lg bg-white/5 px-3 py-2 text-[11px] text-slate-400">
                        {tabela}
                        <div className="h-1.5 mt-2 rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-brand-sky/60" style={{ width: `${40 + i * 20}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-sky/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
