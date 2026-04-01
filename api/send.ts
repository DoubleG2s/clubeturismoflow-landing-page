import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { nome, email, agencia, telefone, mensagem } = req.body || {};

    if (!nome || !email || !agencia) {
      return res.status(400).json({ error: 'Campos nome, email e agência são obrigatórios.' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Clube Turismo Flow <onboarding@resend.dev>', // Configure seu domínio no Resend depois
      to: ['guilherme.jard5@gmail.com'], // Email que receberá os contatos
      subject: `✈️ Nova Solicitação - ${agencia}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px; background-color: #f8fafc;">
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #0ea5e9;">
            <h2 style="color: #0f172a; margin: 0; font-size: 22px;">🛫 Novo Contato Recebido</h2>
            <p style="color: #0284c7; margin: 5px 0 0; font-size: 14px;">Clube Turismo Flow - SaaS</p>
          </div>
          
          <div style="padding: 20px 0;">
            <p style="margin: 0 0 10px;"><strong>👤 Nome do Agente:</strong> ${nome}</p>
            <p style="margin: 0 0 10px;"><strong>🏢 Nome da Agência:</strong> ${agencia}</p>
            <p style="margin: 0 0 10px;"><strong>📧 E-mail Corporativo:</strong> ${email}</p>
            <p style="margin: 0 0 10px;"><strong>📞 Telefone/WhatsApp:</strong> ${telefone || 'Não informado'}</p>
          </div>
          
          <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; border-left: 4px solid #0ea5e9;">
            <h3 style="color: #0c4a6e; margin: 0 0 10px; font-size: 15px;">📝 Mensagem do Agente:</h3>
            <p style="margin: 0; line-height: 1.5; color: #334155;">${mensagem || 'Nenhuma mensagem escrita no formulário.'}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #94a3b8;">
            <p>O céu é o limite! Este e-mail foi gerado automaticamente pelo seu site.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Erro Resend:', error);
      return res.status(400).json(error);
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Erro interno na API:', error);
    return res.status(500).json({ error: 'Erro interno ao processar requisição.' });
  }
}
