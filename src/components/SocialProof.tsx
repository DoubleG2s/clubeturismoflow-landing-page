import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function SocialProof() {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-aviation-blue mb-6 font-display">
            Diário de <span className="text-sky-500">Bordo</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Agências que já decolaram suas operações com o Clube Turismo Flow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              name: "Carlos Eduardo",
              agency: "Viaja Mais Turismo",
              text: "Antes do Flow, perdíamos horas rastreando créditos de clientes. Agora, temos tudo em um painel único. Nossa rentabilidade aumentou 15% só recuperando esses valores."
            },
            {
              name: "Mariana Silva",
              agency: "Destino Certo Agência",
              text: "O calendário de embarques mudou a rotina da nossa equipe. O checklist dinâmico garante que nenhum passageiro viaje sem voucher ou seguro. Impecável!"
            }
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-50 rounded-3xl p-8 relative"
            >
              <Quote className="absolute top-8 right-8 text-slate-200 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg text-slate-700 mb-8 relative z-10 italic">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-bold text-aviation-blue">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.agency}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass bg-sky-50/50 rounded-3xl p-8 text-center border border-sky-100"
        >
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-widest mb-4">Parceiro Estratégico</p>
          <h3 className="text-2xl font-bold text-aviation-blue mb-2">Ecossistema Azul Viagens</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Nossa plataforma é otimizada para trabalhar em sinergia com os principais players do mercado, facilitando a gestão de pacotes e reservas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
