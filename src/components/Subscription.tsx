import { motion } from 'motion/react';
import { CreditCard, Barcode, QrCode, Landmark, CheckCircle2, ArrowRight } from 'lucide-react';

const metodos = [
  { icon: CreditCard, label: 'Cartão' },
  { icon: Barcode, label: 'Boleto' },
  { icon: QrCode, label: 'PIX' },
  { icon: Landmark, label: 'Débito' },
];

const incluso = [
  'Todos os módulos: reservas, vendas, cotações, hotéis, voos, clientes, tarefas e créditos',
  'Assistente com inteligência artificial e importação de vouchers',
  'Calendário de embarques e central de notificações em tempo real',
  'Usuários da equipe com perfis de acesso',
  'Proposta comercial com link público para o cliente',
  'Tema claro e escuro, acesso de qualquer navegador',
];

export default function Subscription() {
  return (
    <section id="assinatura" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">
            Assinatura
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
            Um plano mensal, <span className="text-gradient">tudo incluso</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sem instalação e sem servidor próprio. Sua agência contrata, cadastra a equipe e começa a operar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 rounded-3xl overflow-hidden border border-slate-100 shadow-xl"
        >
          <div className="lg:col-span-3 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">O que está incluído</h3>
            <ul className="space-y-4">
              {incluso.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 bg-brand-navy text-white p-8 md:p-12 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Pague como preferir</h3>
            <p className="text-slate-300 text-sm mb-8">
              Faturas, portal do cliente e troca da forma de pagamento direto no sistema. Cancele quando quiser: o acesso segue até o fim do período pago.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {metodos.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                    <Icon size={20} className="text-brand-sky" />
                    <span className="text-sm font-medium">{m.label}</span>
                  </div>
                );
              })}
            </div>
            <a
              href="#contato"
              className="mt-auto inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-bold px-6 py-4 rounded-full hover:bg-brand-sky hover:text-white transition-colors"
            >
              Consultar valores <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
