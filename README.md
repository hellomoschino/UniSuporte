# UniSuporte

Plataforma de apoio académico e técnico para estudantes universitários em Angola. A referência #1 do mercado com identidade de marca luxuosa e profissional.

## 🚀 Como fazer o deploy no Netlify

### Opção 1: Deploy via Interface Web (Recomendado)

1. **Acesse o Netlify**
   - Vá para [https://app.netlify.com](https://app.netlify.com)
   - Faça login ou crie uma conta gratuita

2. **Faça o deploy**
   - Clique em "Add new site" → "Deploy manually"
   - Arraste e solte a pasta do projeto ou clique em "Browse to upload"
   - Selecione todos os arquivos do projeto
   - O Netlify fará o deploy automaticamente

3. **Personalize o domínio**
   - Após o deploy, você receberá um link do tipo: `seu-site-aleatorio.netlify.app`
   - Você pode personalizar o nome em: Site settings → Change site name

### Opção 2: Deploy via Git (Recomendado para projetos maiores)

1. **Crie um repositório Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Envie para o GitHub/GitLab/Bitbucket**
   - Crie um repositório no GitHub
   - Siga as instruções para fazer push do código

3. **Conecte ao Netlify**
   - No Netlify, clique em "Add new site" → "Import an existing project"
   - Conecte seu repositório Git
   - Configure:
     - Build command: (deixe vazio ou `echo 'No build step'`)
     - Publish directory: `.` (ponto)
   - Clique em "Deploy site"

### Opção 3: Deploy via Netlify CLI

1. **Instale o Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Faça login**
   ```bash
   netlify login
   ```

3. **Faça o deploy**
   ```bash
   netlify deploy --prod
   ```

## 📁 Estrutura do Projeto

```
.
├── index.html      # Página principal
├── styles.css      # Estilos CSS
├── script.js       # JavaScript
├── netlify.toml    # Configuração do Netlify
└── README.md       # Este arquivo
```

## ✨ Funcionalidades

- ✅ Design luxuoso e profissional
- ✅ Identidade visual premium
- ✅ Navegação suave entre seções
- ✅ Menu mobile responsivo
- ✅ Formulário de contato
- ✅ Animações suaves e elegantes
- ✅ Otimizado para performance
- ✅ Gradientes azuis modernos
- ✅ Layout totalmente responsivo

## 🎨 Personalização

Você pode personalizar o site editando:

- **Cores**: Edite as variáveis CSS em `styles.css` (linha 7-14)
- **Conteúdo**: Edite o HTML em `index.html`
- **Funcionalidades**: Adicione JavaScript em `script.js`

## 📝 Notas

- O arquivo `netlify.toml` configura o Netlify para servir o `index.html` como página principal
- Não é necessário processo de build, o site é estático
- O Netlify oferece HTTPS gratuito automaticamente

## 🔗 Links Úteis

- [Documentação do Netlify](https://docs.netlify.com/)
- [Netlify Status](https://www.netlifystatus.com/)