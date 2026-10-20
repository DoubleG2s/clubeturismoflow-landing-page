import { motion } from 'motion/react';
import { FileSpreadsheet, CreditCard, Calculator, CheckCircle2 } from 'lucide-react';

const points = [
  {
    icon: <FileSpreadsheet className="w-8 h-8 text-rose-500" />,
    title: 'Informação espalhada',
    desc: 'Reservas em planilhas, vouchers no e-mail e dados de passageiros digitados de novo a cada etapa.',
    solution: 'Reservas, vendas e cotações conectadas, com importação de voucher em PDF.',
  },
  {
    icon: <CreditCard className="w-8 h-8 text-rose-500" />,
    title: 'Créditos esquecidos',
    desc: 'Viagens canceladas ou remarcadas viram valores parados que ninguém acompanha.',
    solution: 'Controle de créditos de clientes junto às reservas.',
  },
  {
    icon: <Calculator className="w-8 h-8 text-rose-500" />,
    title: 'Comissão na calculadora',
    desc: 'RAV, taxas e remuneração do agente calculados à mão, com margem de erro em cada venda.',
    solution: 'Valores, receita prevista e remuneração calculados em tempo real.',
  },
];

export default function PainPoints() {
  return (
    <section id="desafios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
            Sua agência ainda opera em <span className="text-rose-500">modo manual</span>?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cada informação repetida ou esquecida custa tempo da equipe e confiança do cliente. O Flowtur foi construído a partir da rotina real de uma agência de viagens.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{point.title}</h3>
              <p className="text-slate-600 mb-6">{point.desc}</p>
              <div className="mt-auto pt-6 border-t border-slate-200 flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-brand-navy">{point.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
