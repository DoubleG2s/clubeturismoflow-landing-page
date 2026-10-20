import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Meus dados ficam separados dos de outras agências?',
      a: 'Sim. O Flowtur é multi-tenant: cada empresa enxerga apenas os próprios dados. O isolamento é aplicado no aplicativo e garantido no banco de dados por Row Level Security (RLS) do Supabase.',
    },
    {
      q: 'Preciso instalar algum programa?',
      a: 'Não. O Flowtur é 100% web, com layout pensado para celular, tablet e computador. Basta um navegador e conexão com a internet.',
    },
    {
      q: 'Como a inteligência artificial usa as informações da agência?',
      a: 'A IA lê vouchers em PDF e textos colados para pré-preencher reservas, vendas e cotações. Ela nunca salva sozinha e nunca exclui dados: tudo passa pela revisão e confirmação da sua equipe.',
    },
    {
      q: 'Posso cadastrar toda a minha equipe?',
      a: 'Sim. Cada agência tem seus usuários (agentes de viagem), que podem ser escolhidos como vendedores nas vendas e como responsáveis nas tarefas.',
    },
    {
      q: 'O cliente consegue ver a proposta sem acessar o sistema?',
      a: 'Sim. Cada cotação pode gerar uma proposta comercial com link público de compartilhamento, que abre sem login.',
    },
    {
      q: 'Quais formas de pagamento a assinatura aceita?',
      a: 'Cartão de crédito, boleto, PIX e débito. Faturas e forma de pagamento ficam disponíveis no próprio sistema, e o cancelamento vale ao fim do período já pago.',
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-brand-light">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-lg text-slate-600">Tire suas dúvidas sobre o Flowtur.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-brand-navy pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="text-slate-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
