import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function Terms() {
  // Scroll para o topo ao acessar a rota
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 bg-[#051324] min-h-screen text-slate-300">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="mb-12 border-b border-white/10 pb-8">
             <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase tracking-tighter">Termos de Uso e Condições</h1>
             <p className="text-sky-500 font-mono text-sm max-w-sm uppercase tracking-widest">Serviço &middot; Atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>
          
          <div className="space-y-12 text-lg leading-relaxed">
            <p className="text-slate-300">
              Bem-vindo ao Clube Turismo Flow. Ao utilizar nossa plataforma de gestão, sua agência concorda com os seguintes termos. Este documento rege a relação entre o licenciante (<span className="text-white font-medium">Clube Turismo Flow</span>) e o licenciado (<span className="text-white font-medium">Sua Agência</span>).
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">1. Licenciamento do Software (O "Motor de Reservas")</h2>
              <p className="mb-6">O Clube Turismo Flow concede uma licença de uso não exclusiva, temporária e revogável para a utilização de nossa plataforma SaaS. O sistema é projetado para otimizar o fluxo de trabalho de agências de viagens, permitindo a gestão de reservas, vouchers, créditos e calendários de embarque.</p>
              
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-sky-500 shrink-0"></div>
                  <div><strong className="text-sky-400">Uso Permitido:</strong> O acesso é restrito a agentes autorizados pela sua agência.</div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-sky-500 shrink-0"></div>
                  <div><strong className="text-sky-400">Propriedade Intelectual:</strong> Todo o código, design e lógica do sistema são de propriedade exclusiva do Clube Turismo Flow.</div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">2. Blindagem de Dados (Isolamento Multi-tenant)</h2>
              <p className="mb-6">Nossa arquitetura foi construída para garantir que sua operação seja privada e segura.</p>
              
              <ul className="space-y-4 text-slate-400 border-l border-sky-500/30 pl-6">
                <li><span className="text-sky-400 font-bold">Garantia de Isolamento &raquo;</span> Asseguramos, através da tecnologia Row Level Security (RLS), que os dados de vendas, clientes e movimentações financeiras de uma agência são tecnicamente inacessíveis para qualquer outra agência ou franqueado cadastrado no sistema.</li>
                <li><span className="text-sky-400 font-bold">Sigilo Comercial &raquo;</span> O Clube Turismo Flow não acessa seus dados estratégicos para fins de concorrência ou cruzamento de informações de mercado.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">3. Responsabilidades e Limitações</h2>
              <p className="mb-6">Para manter o sistema voando alto e seguro, definimos os seguintes limites:</p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl md:col-span-2">
                  <h3 className="text-sky-400 font-bold mb-2">Exatidão dos Dados</h3>
                  <p className="text-sm text-slate-400">A responsabilidade pela veracidade das informações inseridas (datas de voo, valores, nomes de passageiros) é inteiramente da agência usuária.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-sky-400 font-bold mb-2">Indisponibilidade Temporária</h3>
                  <p className="text-sm text-slate-400">Embora busquemos um uptime de 99%, não nos responsabilizamos por perdas decorrentes de instabilidades momentâneas causadas por provedores de nuvem ou internet.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-sky-400 font-bold mb-2">Segurança de Senhas</h3>
                  <p className="text-sm text-slate-400">A agência é responsável por manter a confidencialidade das credenciais de seus agentes. Recomendamos a troca periódica de senhas.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">4. Pagamento e Cancelamento</h2>
              <p className="mb-6">O acesso ao sistema é condicionado ao pagamento da mensalidade acordada no momento do "Check-in".</p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl border-l-4 border-l-orange-500/50">
                  <h3 className="text-orange-400 font-bold mb-2">Suspensão</h3>
                  <p className="text-sm text-slate-400">O atraso no pagamento poderá resultar na suspensão temporária do acesso aos serviços até a regularização.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl border-l-4 border-l-sky-500/50">
                  <h3 className="text-sky-400 font-bold mb-2">Rescisão</h3>
                  <p className="text-sm text-slate-400">A agência pode solicitar o cancelamento a qualquer momento, garantindo o direito à exportação dos seus dados (JSON/CSV) antes do encerramento da conta.</p>
                </div>
              </div>
            </section>

            <section className="bg-sky-950/30 border border-sky-500/20 p-8 rounded-3xl mt-8">
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">5. Atualizações do Sistema</h2>
              <p className="text-slate-300">
                O Clube Turismo Flow reserva-se o direito de implementar melhorias, novas funcionalidades e correções de segurança periodicamente. Estes Termos de Uso podem ser atualizados para refletir novas funcionalidades do motor de reservas, sendo a versão mais recente sempre a válida.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
