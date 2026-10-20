import { motion } from 'motion/react';
import { FileText, ShoppingCart, Luggage, ClipboardCheck, PlaneTakeoff, Star } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Cotação',
    desc: 'Monte opções de hotel, voo e serviços e envie a proposta por link público.',
  },
  {
    icon: ShoppingCart,
    title: 'Venda',
    desc: 'Converta a cotação em venda: Geral, Produto, Passageiros, Valores e Revisão.',
  },
  {
    icon: Luggage,
    title: 'Reserva',
    desc: 'Crie a reserva a partir da venda, já preenchida, ou vincule uma existente.',
  },
  {
    icon: ClipboardCheck,
    title: 'Checklist',
    desc: 'Contrato, pagamento, voucher, hotel, assentos e check-in acompanhados por fase.',
  },
  {
    icon: PlaneTakeoff,
    title: 'Embarque',
    desc: 'Calendário diário e aviso automático de quem embarca no dia seguinte.',
  },
  {
    icon: Star,
    title: 'Pós-viagem',
    desc: 'Fase final do checklist e histórico de viagens salvo no cadastro do cliente.',
  },
];

const checklist = [
  { fase: 'Pré-venda', itens: ['Contrato enviado/assinado', 'Pagamento', 'Voucher enviado'] },
  { fase: 'Hotel', itens: ['E-mail ao hotel', 'Hotel confirmado'] },
  { fase: 'Voo', itens: ['Voo no aplicativo', 'Assentos ida/volta', 'Check-in ida/volta'] },
  { fase: 'Pós-viagem', itens: ['Acompanhamento após o retorno'] },
];

export default function Journey() {
  return (
    <section id="jornada" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">
            Como funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
            Da cotação ao <span className="text-gradient">pós-viagem</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Os dados entram uma única vez e acompanham o cliente por toda a jornada, sem retrabalho entre as etapas.
          </p>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-20">
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-brand-sky/40"></div>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-brand-navy text-white flex items-center justify-center mb-4 shadow-lg">
                  <Icon size={26} />
                </div>
                <p className="text-xs font-semibold text-brand-blue mb-1">Etapa {idx + 1}</p>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-brand-light border border-slate-100 p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">Checklist operacional configurável</h3>
              <p className="text-slate-600">
                Cada agência define as fases e itens do seu checklist. O percentual concluído aparece no card da reserva e no painel lateral, e os itens que não se aplicam ao tipo de produto ficam de fora automaticamente.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {checklist.map((grupo) => (
                <div key={grupo.fase} className="bg-white rounded-2xl p-5 border border-slate-100">
                  <p className="text-sm font-bold text-brand-navy mb-3">{grupo.fase}</p>
                  <ul className="space-y-2">
                    {grupo.itens.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <ClipboardCheck size={16} className="text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
