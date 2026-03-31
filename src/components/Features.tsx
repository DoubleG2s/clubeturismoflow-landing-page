import { motion } from 'motion/react';
import { CalendarDays, Hotel, WalletCards } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <CalendarDays className="w-10 h-10 text-sky-500" />,
      title: "Calendário de Embarques",
      desc: "Pipeline operacional completo. Acompanhe o passageiro desde a emissão de aéreos até o pós-viagem com checklists dinâmicos.",
      color: "from-sky-500/20 to-transparent"
    },
    {
      icon: <Hotel className="w-10 h-10 text-blue-500" />,
      title: "Gestão de Hotéis",
      desc: "Catálogo rico com múltiplas imagens, listagem flexível de contatos e envio de comunicados por e-mail direto do painel.",
      color: "from-blue-500/20 to-transparent"
    },
    {
      icon: <WalletCards className="w-10 h-10 text-emerald-500" />,
      title: "Controle de Créditos",
      desc: "Rastreio inteligente de créditos pendentes junto a cias aéreas e fornecedores. Maximize os resultados do seu caixa.",
      color: "from-emerald-500/20 to-transparent"
    }
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-aviation-blue mb-6 font-display"
          >
            Seu <span className="text-sky-500">Plano de Voo</span> Perfeito
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ferramentas desenhadas especificamente para a rotina de agências de viagens de alta performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass bg-white/50 rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
            >
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${feat.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative z-10">
                <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-bold text-aviation-blue mb-4">{feat.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
