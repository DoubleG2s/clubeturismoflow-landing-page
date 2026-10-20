import { motion } from 'motion/react';
import { TrendingUp, Receipt, Filter, Calculator } from 'lucide-react';

const brl = (valor: number) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Exemplo ilustrativo seguindo as regras de cálculo da venda no Flowtur
const exemplo = {
  produto: 8000,
  taxas: 450,
  rav: 1000,
  descontos: 200,
  comissaoFornecedor: 800,
};
const remuneracaoAgente = exemplo.rav * 0.85;
const valorTotal = exemplo.produto + exemplo.taxas + exemplo.rav - exemplo.descontos;
const receitaPrevista = exemplo.comissaoFornecedor + remuneracaoAgente;

const highlights = [
  {
    icon: Calculator,
    title: 'Remuneração do agente automática',
    desc: 'Calculada em tempo real a partir do RAV. Se for editada à mão, o valor diferente fica destacado com opção de recalcular.',
  },
  {
    icon: Receipt,
    title: 'Pagamentos e saldo',
    desc: 'Forma de pagamento, parcelas, vencimentos e status, com saldo quitado, pendente ou excedente.',
  },
  {
    icon: TrendingUp,
    title: 'Indicadores de vendas',
    desc: 'Quantidade de vendas, em andamento, ticket médio e receita prevista sobre a lista filtrada.',
  },
  {
    icon: Filter,
    title: 'Filtros que ficam salvos',
    desc: 'Período, vendedor e status (Aberta, Confirmada, Finalizada, Em crédito, Reembolsada, Cancelada).',
  },
];

export default function SalesFinance() {
  const linhas = [
    { label: 'Valor do produto', valor: exemplo.produto },
    { label: 'Taxas', valor: exemplo.taxas },
    { label: 'RAV', valor: exemplo.rav },
    { label: 'Descontos', valor: -exemplo.descontos },
  ];

  return (
    <section id="vendas" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-slate-400">Venda nº 100248</p>
                <p className="font-bold text-brand-navy">Valores da venda</p>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700">Confirmada</span>
            </div>

            <div className="space-y-3 text-sm">
              {linhas.map((linha) => (
                <div key={linha.label} className="flex justify-between text-slate-600">
                  <span>{linha.label}</span>
                  <span className="font-medium text-brand-navy">{brl(linha.valor)}</span>
                </div>
              ))}
              <div className="flex justify-between pt-3 border-t border-slate-100 font-bold text-brand-navy">
                <span>Valor total da venda</span>
                <span>{brl(valorTotal)}</span>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-brand-light p-4">
                <p className="text-xs text-slate-500 mb-1">Remuneração do agente</p>
                <p className="text-xl font-bold text-brand-blue">{brl(remuneracaoAgente)}</p>
                <p className="text-[11px] text-slate-400 mt-1">RAV − 15%</p>
              </div>
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-xs text-slate-500 mb-1">Receita prevista da agência</p>
                <p className="text-xl font-bold text-emerald-600">{brl(receitaPrevista)}</p>
                <p className="text-[11px] text-slate-400 mt-1">Comissão do fornecedor + remuneração</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-4 text-center">Valores ilustrativos</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">
            Vendas e comissões
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
            O financeiro de cada venda, <span className="text-gradient">sem planilha</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Do valor do produto à receita da agência, o Flowtur calcula cada número enquanto a venda é preenchida, em modo de valor único ou por serviço.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title}>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-3 shadow-sm">
                    <Icon size={20} className="text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-brand-navy mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
