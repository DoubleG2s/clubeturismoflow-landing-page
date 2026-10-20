import { motion } from 'motion/react';
import {
  Luggage,
  ShoppingCart,
  FileText,
  Hotel,
  Plane,
  Users,
  ListTodo,
  WalletCards,
  CalendarDays,
  Bell,
} from 'lucide-react';

const modules = [
  {
    icon: Luggage,
    title: 'Reservas',
    desc: 'Cadastro em etapas para pacotes, voos, hospedagens e cruzeiros, com vários hotéis e localizadores na mesma reserva e bloqueio de duplicidade.',
    items: ['Status automático por data', 'Checklist operacional', 'E-mail ao hotel integrado'],
  },
  {
    icon: ShoppingCart,
    title: 'Vendas',
    desc: 'Assistente de nova venda com resumo ao vivo, pagante e passageiros buscados na base de clientes e controle completo de pagamentos.',
    items: ['Numeração sequencial', 'KPIs e filtros por período', 'Gera reserva a partir da venda'],
  },
  {
    icon: FileText,
    title: 'Cotações e Propostas',
    desc: 'Cotações com várias opções de hotel, voo, bagagem, seguro e parcelamento, transformadas em proposta comercial para o cliente.',
    items: ['Link público sem login', 'Preenchimento com IA', 'Calculadora de comissão'],
  },
  {
    icon: Hotel,
    title: 'Hotéis',
    desc: 'Catálogo de hotéis com imagens, e-mails e telefones, cidade pelo IBGE e CEP preenchido automaticamente.',
    items: ['Galeria de fotos', 'Gerador de e-mail ao hotel', 'Hóspedes preenchidos da reserva'],
  },
  {
    icon: Plane,
    title: 'Voos',
    desc: 'Cadastro e consulta de voos com busca de aeroportos integrada, prontos para vincular às reservas.',
    items: ['Busca de aeroportos', 'Vários localizadores', 'Passageiros por trecho'],
  },
  {
    icon: Users,
    title: 'Clientes',
    desc: 'Base de clientes com busca inteligente (nome em qualquer ordem, sem acentos ou CPF) e verificação de CPF/CNPJ duplicado.',
    items: ['Histórico de viagens', 'Total gasto por cliente', 'Cadastro rápido na venda'],
  },
  {
    icon: ListTodo,
    title: 'Tarefas',
    desc: 'Tarefas internas com categoria, status, urgência, responsável, prazo e referência à cotação ou reserva.',
    items: ['Urgência de Baixa a Crítica', 'Responsável da equipe', 'Status Aguardando terceiros'],
  },
  {
    icon: WalletCards,
    title: 'Créditos',
    desc: 'Controle dos créditos de clientes gerados por viagens canceladas ou remarcadas, para que nenhum valor fique esquecido.',
    items: ['Vinculados ao cliente', 'Visão centralizada', 'Junto às reservas'],
  },
  {
    icon: CalendarDays,
    title: 'Calendário de Embarques',
    desc: 'A movimentação operacional dia a dia, com busca de passageiros e filtros, para a equipe saber exatamente quem embarca e quando.',
    items: ['Visão diária', 'Busca de passageiros', 'Apartamentos em cards próprios'],
  },
  {
    icon: Bell,
    title: 'Notificações',
    desc: 'Central em tempo real com os eventos da equipe e um resumo diário dos passageiros que embarcam no dia seguinte.',
    items: ['Atualização em tempo real', 'Resumo de embarques', 'Por empresa'],
  },
];

export default function Features() {
  return (
    <section id="modulos" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Módulos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-navy mb-6"
          >
            Tudo o que a agência precisa, <span className="text-gradient">integrado</span>
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cada módulo conversa com os outros: a cotação vira venda, a venda gera a reserva e a reserva alimenta o calendário de embarques.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 5) * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-sky/20 to-brand-blue/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{mod.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{mod.desc}</p>
                <ul className="mt-auto space-y-2">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-sky shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
