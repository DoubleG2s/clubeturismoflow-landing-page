import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "Meus dados estão seguros?",
      a: "Sim. Utilizamos arquitetura Multi-Tenant com Supabase, garantindo que o banco de dados da sua agência seja isolado e protegido contra acessos indevidos (IDOR)."
    },
    {
      q: "Como funciona a migração dos meus dados atuais?",
      a: "Nossa equipe de 'Controladores de Voo' auxilia em toda a importação das suas planilhas e cadastros atuais para o sistema, garantindo uma transição sem turbulências."
    },
    {
      q: "O sistema atende agências com múltiplas filiais?",
      a: "Perfeitamente. O Clube Turismo Flow foi desenhado para escalar. Você pode gerenciar múltiplas filiais (tenants) com visões consolidadas ou isoladas."
    },
    {
      q: "Preciso instalar algum programa?",
      a: "Não. O sistema é 100% em nuvem (Web), acessível de qualquer computador ou tablet com internet."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-aviation-blue mb-6 font-display">
            Torre de <span className="text-sky-500">Controle</span>
          </h2>
          <p className="text-lg text-slate-600">Dúvidas frequentes sobre a plataforma.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-aviation-blue pr-4">{faq.q}</span>
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
