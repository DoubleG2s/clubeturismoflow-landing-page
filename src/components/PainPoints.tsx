import { motion } from 'motion/react';
import { AlertTriangle, FileQuestion, CreditCard } from 'lucide-react';

export default function PainPoints() {
  const points = [
    {
      icon: <FileQuestion className="w-8 h-8 text-rose-500" />,
      title: "Vouchers Perdidos",
      desc: "Informações espalhadas em planilhas e e-mails, causando atrasos no embarque."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-rose-500" />,
      title: "Créditos Esquecidos",
      desc: "Dinheiro parado nas companhias aéreas por falta de rastreio eficiente."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-rose-500" />,
      title: "Falhas de Comunicação",
      desc: "Passageiros sem atualizações claras sobre seus voos e reservas."
    }
  ];

  return (
    <section id="dores" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-aviation-blue mb-6 font-display">
            Cansado de enfrentar <span className="text-rose-500">turbulências</span> na operação?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Perder o controle de vouchers e créditos não apenas frustra seus clientes, mas também drena o caixa da sua agência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-aviation-blue mb-3">{point.title}</h3>
              <p className="text-slate-600">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
