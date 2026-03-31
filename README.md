# ✈️ Clube Turismo Flow

> Landing Page Comercial e motor de apresentação para o SaaS B2B "Clube Turismo Flow" – Uma plataforma avançada de gestão para franquias de agências de turismo.

O **Clube Turismo Flow** é um projeto frontend construído sob os mais rígidos princípios de Arquitetura Limpa e UI/UX Premium (Aviation Dark Theme). Focado em performance estrutural e experiência do usuário (UX), a aplicação opera como uma Single Page Application responsiva, evidenciando as funcionalidades vitais do motor de turismo como isolamento multi-tenant (RLS) e segurança de dados do passageiro.

---

## 🚀 Quick Start

Coloque o projeto no ar localmente em ambiente de desenvolvimento em menos de 2 minutos.

### Pré-requisitos
- Node.js (v18+)
- NPM, Yarn ou PNPM

### Instalação e Execução

```bash
# 1. Navegue até a raiz do projeto (se já não estiver lá)
cd clubeturismoflow-landing-page

# 2. Instale todas as dependências do ecossistema React/Vite
npm install

# 3. Configure o ambiente (Basta criar um .env caso possua chaves privadas)
cp .env.example .env

# 4. Decole o servidor de desenvolvimento
npm run dev
```

> **Acesso Local:** A aplicação inicializará instantaneamente através do Vite e estará disponível por padrão na porta 3000 em `http://localhost:3000`.

---

## 🛠️ Stack Tecnológica (Frontend Architecture)

Sistema desenvolvido seguindo premissas rigorosas de engenharia para interfaces de alta complexidade:

- **Core Engine:** React 19 + TypeScript Strict Mode
- **Bundler:** Vite 6 (Fast HMR & Optimized Build)
- **Styling UI:** Tailwind CSS v4 (Diretrizes de _Typographic Brutalism_ com bordas e contrastes assertivos)
- **Micro-interações:** Motion (Framer Motion v12) em Scroll e física _spring_
- **Roteamento:** React Router DOM v7 (SPA fluída com Client-Side Rendering em múltiplas views)
- **Iconografia:** Lucide React

---

## ⚡ Features Principais

- **Aesthetic UI (Anti-Clichés):** Rejeitamos os padrões previsíveis web de SaaS macios. Utilizamos fundos profundos `#051324` com contrastes marcantes da paleta `sky/blue/orange`, focando em confiança, clareza tipográfica e legibilidade brutalista.
- **Navegação Smart CSR:** Redirecionamento instantâneo via React-Router entre a root page (`/`), os Termos (`/termos`) e as Políticas (`/privacidade`), com interceptação de HashLinks para scroll suave sem _reload_ de navegador.
- **Isolamento de Formulário:** Components com validação reativa e UI state isolado contra interações falsas durante a simulação de requests, focado em alta captação de Leads.
- **Otimização de Render:** Código refratado por blocos single-responsibility (ex: `Hero`, `PainPoints`, `MultiTenant`) visando futuras divisões de carregamento e manutenção enxuta.

---

## 📐 Estrutura de Diretórios

A separação lógica preserva a manutenibilidade para quando o projeto crescer em direção à plataforma principal (Dashboard):

```text
/src
 ├── /components    # Fragmentos puros de UI (Hero, ContactForm, Navbar)
 ├── /pages         # Visualizações orquestradas e controladas pelo React Router (Home, Terms, Privacy)
 ├── App.tsx        # Camada Mestra de rotas e Layout global persistente (Navbar/Footer)
 └── index.css      # Entradas Tailwind e variáveis CSS Globais
```

---

## 📜 Legal e Compliance

O código incorpora visualizações nativas já padronizadas com a visão corporativa (SaaS Commerce):
- `/termos` - Termos de Uso (Licenciamento e Limites)
- `/privacidade` - Políticas formatadas em respeito às normas LGPD

> **"A documentação é um presente para o seu eu do futuro e para sua equipe."**
