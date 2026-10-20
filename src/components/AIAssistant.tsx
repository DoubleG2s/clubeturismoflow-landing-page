import { motion } from 'motion/react';
import { Sparkles, FileUp, Wand2, MessageSquare, ShieldCheck, Bot, User } from 'lucide-react';

const capabilities = [
  {
    icon: FileUp,
    title: 'Importação de voucher em PDF',
    desc: 'Envie o voucher e a IA extrai localizadores, hotel, regime, passageiros e até aniversariantes durante a viagem. Um resumo mostra o que foi importado e o que ficou pendente.',
  },
  {
    icon: Wand2,
    title: 'Cotação a partir de texto colado',
    desc: 'Cole o texto do fornecedor e a cotação é preenchida com códigos IATA, horários de conexão, valor total e passeios.',
  },
  {
    icon: MessageSquare,
    title: 'Assistente em linguagem natural',
    desc: 'Peça em português e o assistente pré-preenche reservas, cotações, hotéis, créditos e voos, ou aplica filtros nas listas.',
  },
];

export default function AIAssistant() {
  return (
    <section id="ia" className="py-24 bg-brand-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] bg-brand-blue rounded-full blur-3xl -top-80 -left-60"></div>
        <div className="absolute w-[500px] h-[500px] bg-brand-sky rounded-full blur-3xl -bottom-60 -right-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 text-brand-sky font-semibold tracking-wider uppercase text-sm mb-4">
            <Sparkles size={16} /> Inteligência Artificial
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Menos digitação, <span className="text-brand-sky">mais vendas</span>
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            A IA do Flowtur faz o trabalho repetitivo de transcrever vouchers e propostas. Sua equipe revisa e confirma; o tempo economizado vai para o atendimento.
          </p>

          <div className="space-y-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon className="text-brand-sky" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{cap.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Conversa ilustrativa com o assistente */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="glass-dark rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center gap-3 pb-5 mb-6 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-sky to-brand-blue flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <p className="font-semibold">Assistente Flowtur</p>
                <p className="text-xs text-slate-400">Pré-preenche, você confirma</p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3 justify-end">
                <div className="bg-brand-blue rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                  Cria uma reserva de hospedagem para a Juliana Costa em Gramado, de 12 a 16 de julho.
                </div>
                <div className="w-8 h-8 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                  <User size={16} />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                  <Bot size={16} className="text-brand-sky" />
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] space-y-3">
                  <p>Preenchi o formulário de reserva com os dados abaixo. Posso abrir a aba Reservas para você revisar?</p>
                  <div className="bg-white/5 rounded-xl p-3 space-y-1 text-xs text-slate-300">
                    <p><span className="text-slate-400">Tipo:</span> Hospedagem</p>
                    <p><span className="text-slate-400">Hóspede:</span> Juliana Costa</p>
                    <p><span className="text-slate-400">Destino:</span> Gramado</p>
                    <p><span className="text-slate-400">Período:</span> 12/07 a 16/07</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4">
              <ShieldCheck size={20} className="text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-100 leading-relaxed">
                O assistente nunca salva sozinho e nunca exclui dados. Antes de trocar de aba, ele pede confirmação.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
