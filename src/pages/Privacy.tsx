import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function Privacy() {
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
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase tracking-tighter">Política de Privacidade</h1>
            <p className="text-sky-500 font-mono text-sm max-w-sm uppercase tracking-widest">Proteção de Dados &middot; {new Date().toLocaleDateString('pt-BR')}</p>
          </div>

          <div className="space-y-12 text-lg leading-relaxed">
            <p className="text-slate-300">
              Esta política descreve como o Clube Turismo Flow coleta, armazena e protege os dados da sua agência e de seus clientes, garantindo total conformidade com a <span className="text-white font-medium">Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</span>.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">1. Coleta e Finalidade dos Dados</h2>
              <p className="mb-6">Coletamos apenas as informações estritamente necessárias para a operação da sua franquia e para o suporte comercial:</p>

              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-sky-500 shrink-0"></div>
                  <div><strong className="text-sky-400">Dados da Agência:</strong> Coletados via formulário de "Check-in" para fins de licenciamento do software e suporte técnico.</div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-sky-500 shrink-0"></div>
                  <div><strong className="text-sky-400">Dados de Passageiros:</strong> Armazenados por você para a gestão de reservas, vouchers e calendários de embarque.</div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-sky-500 shrink-0"></div>
                  <div><strong className="text-sky-400">Finalidade Única:</strong> Os dados são utilizados exclusivamente para o funcionamento do motor de reservas e gestão interna. Não compartilhamos, vendemos ou utilizamos seus dados de clientes para marketing de terceiros.</div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">2. Segurança de "Hangar" (Isolamento Multi-tenant)</h2>
              <p className="mb-6">Diferente de sistemas legados, o Clube Turismo Flow utiliza uma arquitetura de nuvem moderna para garantir que seus segredos comerciais estejam protegidos:</p>

              <ul className="space-y-4 text-slate-400 border-l border-sky-500/30 pl-6">
                <li><span className="text-sky-400 font-bold">Row Level Security (RLS) &raquo;</span> Implementamos uma camada de segurança no banco de dados que isola cada agência. Isso garante que a Agência A jamais consiga visualizar, mesmo por erro, os dados da Agência B.</li>
                <li><span className="text-sky-400 font-bold">Criptografia em Repouso &raquo;</span> Todas as informações sensíveis e documentos (vouchers e fotos) são armazenados com criptografia de ponta.</li>
                <li><span className="text-sky-400 font-bold">Autenticação Segura &raquo;</span> O acesso aos agentes é controlado via tokens de segurança individuais, impedindo acessos não autorizados.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">3. Direitos do Titular (Controle de Voo)</h2>
              <p className="mb-6">Como administrador da sua franquia, você possui controle total sobre suas informações:</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-sky-400 font-bold mb-2">Direito ao Esquecimento</h3>
                  <p className="text-sm text-slate-400">Você pode solicitar a exclusão permanente de perfis de agentes e dados históricos a qualquer momento.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-sky-400 font-bold mb-2">Portabilidade de Dados</h3>
                  <p className="text-sm text-slate-400">Garantimos a exportação integral de seus dados em formatos estruturados (JSON/CSV), permitindo a posse de suas reservas.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl md:col-span-2">
                  <h3 className="text-sky-400 font-bold mb-2">Revogação de Consentimento</h3>
                  <p className="text-sm text-slate-400">A qualquer momento, o uso do sistema pode ser interrompido, cessando a coleta de novos dados.</p>
                </div>
              </div>
            </section>

            <section className="bg-sky-950/30 border border-sky-500/20 p-8 rounded-3xl mt-8">
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">4. Responsabilidade no Tratamento</h2>
              <p className="text-slate-300">
                O Clube Turismo Flow atua como Operador dos dados de seus passageiros, enquanto a sua Agência atua como Controladora.
                Comprometemo-nos a manter a infraestrutura estável e segura para que você possa atender seus clientes com tranquilidade.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
