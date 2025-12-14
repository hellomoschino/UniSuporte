// Menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navActions = document.querySelector('.nav-actions');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    if (navActions && window.innerWidth <= 768) {
        navActions.classList.toggle('mobile-visible');
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerOffset = 70;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Ambassador Form handler será implementado no sistema de afiliados abaixo

// Quick Quote Form handler
const quickQuoteForm = document.getElementById('quickQuoteForm');
if (quickQuoteForm) {
    const serviceSelect = document.getElementById('service-type');
    const priceDisplay = document.createElement('div');
    priceDisplay.className = 'price-display';
    priceDisplay.style.display = 'none';
    priceDisplay.style.marginTop = '0.5rem';
    priceDisplay.style.padding = '0.75rem';
    priceDisplay.style.background = 'rgba(30, 64, 175, 0.1)';
    priceDisplay.style.borderRadius = '0.5rem';
    priceDisplay.style.fontWeight = '600';
    priceDisplay.style.color = 'var(--accent-start)';
    
    // Insert price display after service select
    serviceSelect.parentElement.appendChild(priceDisplay);
    
    // Service details configuration
    const serviceDetailsConfig = {
        // Elaboração de Trabalhos Académicos
        'elaboracao-com-conteudo': {
            fields: [
                { type: 'textarea', name: 'material', label: 'Descreva o material que você já possui', placeholder: 'Ex: Textos, pesquisas, referências...', required: true },
                { type: 'select', name: 'formato', label: 'Formato desejado', options: ['Word (.docx)', 'PDF', 'Ambos'], required: true },
                { type: 'select', name: 'normas', label: 'Normas de formatação', options: ['ABNT', 'APA', 'Vancouver', 'IEEE', 'Outra'], required: true }
            ]
        },
        'elaboracao-sem-conteudo': {
            fields: [
                { type: 'textarea', name: 'tema', label: 'Tema do trabalho', placeholder: 'Descreva o tema ou assunto do trabalho', required: true },
                { type: 'select', name: 'area', label: 'Área de conhecimento', options: ['Ciências Exatas', 'Ciências Humanas', 'Ciências Biológicas', 'Engenharia', 'Direito', 'Outra'], required: true },
                { type: 'select', name: 'formato', label: 'Formato desejado', options: ['Word (.docx)', 'PDF', 'Ambos'], required: true },
                { type: 'select', name: 'normas', label: 'Normas de formatação', options: ['ABNT', 'APA', 'Vancouver', 'IEEE', 'Outra'], required: true }
            ]
        },
        'revisao-formatacao': {
            fields: [
                { type: 'file', name: 'arquivo', label: 'Enviar arquivo para revisão', accept: '.doc,.docx,.pdf', required: true },
                { type: 'select', name: 'normas', label: 'Normas de formatação', options: ['ABNT', 'APA', 'Vancouver', 'IEEE', 'Outra'], required: true },
                { type: 'checkbox', name: 'servicos', label: 'Serviços incluídos', options: ['Correção ortográfica', 'Correção gramatical', 'Formatação completa', 'Revisão de conteúdo'] }
            ]
        },
        'tcc': {
            fields: [
                { type: 'textarea', name: 'tema', label: 'Tema do TCC', placeholder: 'Descreva o tema do seu TCC', required: true },
                { type: 'select', name: 'etapa', label: 'Etapa atual', options: ['Projeto/Pré-projeto', 'Desenvolvimento inicial', 'Desenvolvimento avançado', 'Revisão final'], required: true },
                { type: 'select', name: 'area', label: 'Área de conhecimento', options: ['Ciências Exatas', 'Ciências Humanas', 'Ciências Biológicas', 'Engenharia', 'Direito', 'Outra'], required: true },
                { type: 'select', name: 'normas', label: 'Normas de formatação', options: ['ABNT', 'APA', 'Vancouver', 'IEEE', 'Outra'], required: true }
            ]
        },
        'trabalhos-pequenos': {
            fields: [
                { type: 'select', name: 'tipo', label: 'Tipo de trabalho', options: ['Resumo', 'Ficha de leitura', 'Relatório simples', 'Outro'], required: true },
                { type: 'textarea', name: 'descricao', label: 'Descrição', placeholder: 'Descreva o trabalho necessário', required: true }
            ]
        },
        // Slides
        'slides-simples': {
            fields: [
                { type: 'number', name: 'slides', label: 'Número de slides', min: 1, placeholder: 'Ex: 10', required: true },
                { type: 'select', name: 'tema', label: 'Tema/Estilo', options: ['Profissional', 'Académico', 'Criativo', 'Minimalista'], required: true }
            ]
        },
        'slides-academica': {
            fields: [
                { type: 'number', name: 'slides', label: 'Número de slides', min: 1, placeholder: 'Ex: 15', required: true },
                { type: 'select', name: 'normas', label: 'Normas de formatação', options: ['ABNT', 'APA', 'Vancouver', 'IEEE'], required: true },
                { type: 'checkbox', name: 'elementos', label: 'Elementos incluídos', options: ['Introdução', 'Desenvolvimento', 'Conclusão', 'Referências', 'Anexos'] }
            ]
        },
        'slides-premium': {
            fields: [
                { type: 'number', name: 'slides', label: 'Número de slides', min: 1, placeholder: 'Ex: 20', required: true },
                { type: 'select', name: 'tema', label: 'Tema/Estilo', options: ['Premium', 'Moderno', 'Elegante', 'Corporativo'], required: true },
                { type: 'checkbox', name: 'elementos', label: 'Elementos visuais', options: ['Gráficos personalizados', 'Infográficos', 'Animações', 'Ícones customizados'] }
            ]
        },
        // Suporte Técnico
        'diagnostico-rapido': {
            fields: [
                { type: 'textarea', name: 'problema', label: 'Descreva o problema', placeholder: 'Descreva o problema que está enfrentando', required: true },
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'Linux', 'macOS', 'Não sei'], required: true }
            ]
        },
        'configuracao-software': {
            fields: [
                { type: 'text', name: 'software', label: 'Nome do software', placeholder: 'Ex: Microsoft Office, Adobe...', required: true },
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'Linux', 'macOS'], required: true },
                { type: 'textarea', name: 'requisitos', label: 'Requisitos especiais', placeholder: 'Configurações específicas necessárias (opcional)' }
            ]
        },
        // Remoção de Vírus
        'limpeza-simples': {
            fields: [
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'Linux', 'macOS'], required: true },
                { type: 'textarea', name: 'sintomas', label: 'Sintomas observados', placeholder: 'Descreva os sintomas do vírus (opcional)' }
            ]
        },
        'remocao-completa': {
            fields: [
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'Linux', 'macOS'], required: true },
                { type: 'textarea', name: 'sintomas', label: 'Sintomas observados', placeholder: 'Descreva os sintomas detalhadamente', required: true },
                { type: 'checkbox', name: 'backup', label: 'Backup necessário', options: ['Fazer backup antes da limpeza'] }
            ]
        },
        'recuperacao-sistema': {
            fields: [
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'Linux', 'macOS'], required: true },
                { type: 'textarea', name: 'situacao', label: 'Situação atual do sistema', placeholder: 'Descreva o estado atual do sistema', required: true },
                { type: 'checkbox', name: 'backup', label: 'Recuperação de dados', options: ['Recuperar arquivos importantes', 'Backup completo antes da recuperação'] }
            ]
        },
        // Instalação de Programas
        'office': {
            fields: [
                { type: 'select', name: 'versao', label: 'Versão desejada', options: ['Office 2021', 'Office 2019', 'Office 365', 'Mais recente disponível'], required: true },
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'macOS'], required: true },
                { type: 'checkbox', name: 'componentes', label: 'Componentes', options: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Access', 'Publisher'] }
            ]
        },
        'autocad': {
            fields: [
                { type: 'select', name: 'versao', label: 'Versão desejada', options: ['AutoCAD 2024', 'AutoCAD 2023', 'AutoCAD 2022', 'Mais recente'], required: true },
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'macOS'], required: true }
            ]
        },
        'spss': {
            fields: [
                { type: 'select', name: 'versao', label: 'Versão desejada', options: ['SPSS 29', 'SPSS 28', 'SPSS 27', 'Mais recente'], required: true },
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'macOS', 'Linux'], required: true }
            ]
        },
        'photoshop': {
            fields: [
                { type: 'select', name: 'versao', label: 'Versão desejada', options: ['Photoshop 2024', 'Photoshop 2023', 'Creative Cloud', 'Mais recente'], required: true },
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'macOS'], required: true }
            ]
        },
        'matlab': {
            fields: [
                { type: 'select', name: 'versao', label: 'Versão desejada', options: ['MATLAB R2024a', 'MATLAB R2023b', 'Mais recente'], required: true },
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'macOS', 'Linux'], required: true },
                { type: 'checkbox', name: 'toolboxes', label: 'Toolboxes necessárias', options: ['Statistics', 'Signal Processing', 'Image Processing', 'Control System'] }
            ]
        },
        // Otimização
        'limpeza-basica': {
            fields: [
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'Linux', 'macOS'], required: true },
                { type: 'checkbox', name: 'itens', label: 'Itens a limpar', options: ['Arquivos temporários', 'Cache do navegador', 'Lixeira', 'Logs do sistema'] }
            ]
        },
        'otimizacao-total': {
            fields: [
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'Linux', 'macOS'], required: true },
                { type: 'checkbox', name: 'otimizacoes', label: 'Áreas de otimização', options: ['Arranque do sistema', 'Aplicações em segundo plano', 'Disco rígido', 'Memória RAM', 'Registo do sistema'] }
            ]
        },
        'otimizacao-avancada': {
            fields: [
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'Linux', 'macOS'], required: true },
                { type: 'textarea', name: 'problemas', label: 'Problemas específicos', placeholder: 'Descreva os problemas de desempenho', required: true },
                { type: 'checkbox', name: 'servicos', label: 'Serviços incluídos', options: ['Limpeza profunda', 'Otimização avançada', 'Remoção de lixo do sistema', 'Análise completa'] }
            ]
        },
        // Sistemas Operativos
        'windows': {
            fields: [
                { type: 'select', name: 'versao', label: 'Versão do Windows', options: ['Windows 11', 'Windows 10', 'Windows 8.1'], required: true },
                { type: 'checkbox', name: 'servicos', label: 'Serviços incluídos', options: ['Instalação completa', 'Instalação de drivers', 'Ativação do sistema', 'Atualizações iniciais'] }
            ]
        },
        'linux': {
            fields: [
                { type: 'select', name: 'distribuicao', label: 'Distribuição', options: ['Ubuntu', 'Linux Mint', 'Debian', 'Fedora', 'Outra'], required: true },
                { type: 'checkbox', name: 'servicos', label: 'Serviços incluídos', options: ['Instalação completa', 'Configuração inicial', 'Instalação de drivers', 'Software essencial'] }
            ]
        },
        'macos': {
            fields: [
                { type: 'select', name: 'versao', label: 'Versão do macOS', options: ['macOS Sonoma', 'macOS Ventura', 'macOS Monterey', 'Mais recente'], required: true },
                { type: 'textarea', name: 'situacao', label: 'Situação atual', placeholder: 'Descreva a situação do seu Mac', required: true }
            ]
        },
        'instalacao-backup': {
            fields: [
                { type: 'select', name: 'sistema', label: 'Sistema Operacional', options: ['Windows', 'Linux', 'macOS'], required: true },
                { type: 'textarea', name: 'dados', label: 'Dados importantes', placeholder: 'Descreva quais dados precisam ser preservados', required: true },
                { type: 'checkbox', name: 'backup', label: 'Opções de backup', options: ['Backup completo', 'Backup seletivo', 'Armazenamento em nuvem'] }
            ]
        },
        // CVs
        'cv-basico': {
            fields: [
                { type: 'file', name: 'informacoes', label: 'Enviar informações (opcional)', accept: '.doc,.docx,.pdf,.txt' },
                { type: 'textarea', name: 'experiencia', label: 'Experiência profissional', placeholder: 'Descreva sua experiência (opcional)' }
            ]
        },
        'cv-premium': {
            fields: [
                { type: 'file', name: 'informacoes', label: 'Enviar informações (opcional)', accept: '.doc,.docx,.pdf,.txt' },
                { type: 'select', name: 'estilo', label: 'Estilo do design', options: ['Moderno', 'Clássico', 'Criativo', 'Minimalista', 'Profissional'], required: true },
                { type: 'textarea', name: 'preferencias', label: 'Preferências de design', placeholder: 'Cores, layout, elementos especiais (opcional)' }
            ]
        },
        // Conversão
        'pdf-word': {
            fields: [
                { type: 'file', name: 'arquivo', label: 'Enviar arquivo PDF', accept: '.pdf', required: true },
                { type: 'checkbox', name: 'opcoes', label: 'Opções', options: ['Manter formatação', 'Extrair imagens', 'Preservar tabelas'] }
            ]
        },
        'word-pdf': {
            fields: [
                { type: 'file', name: 'arquivo', label: 'Enviar arquivo Word', accept: '.doc,.docx', required: true },
                { type: 'select', name: 'qualidade', label: 'Qualidade do PDF', options: ['Alta', 'Média', 'Baixa (menor tamanho)'], required: true }
            ]
        },
        'imagem-pdf': {
            fields: [
                { type: 'file', name: 'arquivo', label: 'Enviar imagem(ns)', accept: '.jpg,.jpeg,.png,.gif', required: true, multiple: true },
                { type: 'select', name: 'orientacao', label: 'Orientação', options: ['Automática', 'Retrato', 'Paisagem'], required: true }
            ]
        },
        'pdf-imagem': {
            fields: [
                { type: 'file', name: 'arquivo', label: 'Enviar arquivo PDF', accept: '.pdf', required: true },
                { type: 'select', name: 'formato', label: 'Formato de saída', options: ['JPG', 'PNG', 'Ambos'], required: true },
                { type: 'select', name: 'qualidade', label: 'Qualidade', options: ['Alta', 'Média', 'Baixa'], required: true }
            ]
        },
        'conversao-avancada': {
            fields: [
                { type: 'file', name: 'arquivo', label: 'Enviar arquivo', accept: '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx', required: true },
                { type: 'select', name: 'formato', label: 'Formato de destino', options: ['PDF', 'Word', 'Excel', 'PowerPoint', 'Outro'], required: true },
                { type: 'textarea', name: 'requisitos', label: 'Requisitos especiais', placeholder: 'Descreva requisitos específicos de formatação', required: true }
            ]
        },
        // Edição de PDFs
        'assinar-pdf': {
            fields: [
                { type: 'file', name: 'arquivo', label: 'Enviar arquivo PDF', accept: '.pdf', required: true },
                { type: 'file', name: 'assinatura', label: 'Enviar imagem da assinatura (opcional)', accept: '.jpg,.jpeg,.png' },
                { type: 'select', name: 'posicao', label: 'Posição da assinatura', options: ['Automática', 'Final do documento', 'Página específica'], required: true }
            ]
        },
        'juntar-pdfs': {
            fields: [
                { type: 'file', name: 'arquivos', label: 'Enviar arquivos PDF', accept: '.pdf', required: true, multiple: true },
                { type: 'select', name: 'ordem', label: 'Ordem dos arquivos', options: ['Sequencial', 'Especificar ordem manualmente'], required: true }
            ]
        },
        'dividir-pdfs': {
            fields: [
                { type: 'file', name: 'arquivo', label: 'Enviar arquivo PDF', accept: '.pdf', required: true },
                { type: 'select', name: 'metodo', label: 'Método de divisão', options: ['Por páginas', 'Por intervalo', 'Por marcadores'], required: true },
                { type: 'text', name: 'paginas', label: 'Páginas ou intervalos', placeholder: 'Ex: 1-5, 10-15 ou 1,3,5' }
            ]
        },
        'edicao-basica': {
            fields: [
                { type: 'file', name: 'arquivo', label: 'Enviar arquivo PDF', accept: '.pdf', required: true },
                { type: 'textarea', name: 'alteracoes', label: 'Alterações necessárias', placeholder: 'Descreva as alterações que precisa fazer', required: true }
            ]
        }
    };

    const serviceDetailsSection = document.getElementById('service-details');
    const detailsContent = document.getElementById('details-content');
    
    // Extract price from selected option and show details
    serviceSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        const optionText = selectedOption.text;
        const serviceValue = this.value;
        
        // Extract price from text (format: "Service Name (X,XXX Kz)")
        const priceMatch = optionText.match(/\(([\d,]+)\s*Kz\)/);
        
        if (priceMatch && serviceValue) {
            priceDisplay.textContent = `💰 Preço: ${priceMatch[1]} Kz`;
            priceDisplay.style.display = 'block';
            
            // Show/hide pages field based on service type
            const pagesField = document.getElementById('pages');
            const pagesLabel = pagesField?.previousElementSibling;
            const servicesNeedingPages = ['elaboracao-com-conteudo', 'elaboracao-sem-conteudo', 'tcc', 'trabalhos-pequenos', 'revisao-formatacao'];
            
            if (servicesNeedingPages.includes(serviceValue)) {
                if (pagesField) {
                    pagesField.required = true;
                    pagesField.style.display = 'block';
                }
                if (pagesLabel) pagesLabel.style.display = 'block';
            } else {
                if (pagesField) {
                    pagesField.required = false;
                    pagesField.style.display = 'none';
                }
                if (pagesLabel) pagesLabel.style.display = 'none';
            }
            
            // Show service details if configuration exists
            if (serviceDetailsConfig[serviceValue]) {
                showServiceDetails(serviceDetailsConfig[serviceValue]);
            } else {
                serviceDetailsSection.style.display = 'none';
            }
        } else {
            priceDisplay.style.display = 'none';
            serviceDetailsSection.style.display = 'none';
        }
    });
    
    function showServiceDetails(config) {
        detailsContent.innerHTML = '';
        
        config.fields.forEach(field => {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';
            
            const label = document.createElement('label');
            label.textContent = field.label;
            if (field.required) {
                label.innerHTML += ' <span style="color: red;">*</span>';
            }
            formGroup.appendChild(label);
            
            let input;
            
            if (field.type === 'textarea') {
                input = document.createElement('textarea');
                input.name = field.name;
                input.placeholder = field.placeholder || '';
                if (field.required) input.required = true;
            } else if (field.type === 'select') {
                input = document.createElement('select');
                input.name = field.name;
                if (field.required) input.required = true;
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = 'Selecione...';
                input.appendChild(defaultOption);
                field.options.forEach(option => {
                    const optionEl = document.createElement('option');
                    optionEl.value = option.toLowerCase().replace(/\s+/g, '-');
                    optionEl.textContent = option;
                    input.appendChild(optionEl);
                });
            } else if (field.type === 'checkbox') {
                const checkboxGroup = document.createElement('div');
                checkboxGroup.className = 'details-checkbox-group';
                field.options.forEach(option => {
                    const checkboxItem = document.createElement('div');
                    checkboxItem.className = 'details-checkbox-item';
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.name = field.name + '[]';
                    checkbox.value = option.toLowerCase().replace(/\s+/g, '-');
                    checkbox.id = field.name + '-' + checkbox.value;
                    const checkboxLabel = document.createElement('label');
                    checkboxLabel.htmlFor = checkbox.id;
                    checkboxLabel.textContent = option;
                    checkboxItem.appendChild(checkbox);
                    checkboxItem.appendChild(checkboxLabel);
                    checkboxGroup.appendChild(checkboxItem);
                });
                formGroup.appendChild(checkboxGroup);
                detailsContent.appendChild(formGroup);
                return;
            } else if (field.type === 'file') {
                input = document.createElement('input');
                input.type = 'file';
                input.name = field.name;
                input.accept = field.accept || '';
                if (field.multiple) input.multiple = true;
                if (field.required) input.required = true;
            } else {
                input = document.createElement('input');
                input.type = field.type || 'text';
                input.name = field.name;
                input.placeholder = field.placeholder || '';
                if (field.min !== undefined) input.min = field.min;
                if (field.required) input.required = true;
            }
            
            if (input) {
                formGroup.appendChild(input);
            }
            
            detailsContent.appendChild(formGroup);
        });
        
        serviceDetailsSection.style.display = 'block';
    }
    
    quickQuoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.btn-submit');
        const btnText = submitBtn.querySelector('.btn-text');
        
        // Show loading state
        submitBtn.classList.add('loading');
        btnText.textContent = 'Processando...';
        
        // Get form values
        const serviceType = document.getElementById('service-type');
        const serviceName = serviceType.options[serviceType.selectedIndex].text;
        const pages = document.getElementById('pages').value;
        const deadline = document.getElementById('deadline').value;
        const email = document.getElementById('email').value;
        
        // Collect service details
        const serviceDetails = {};
        const detailsInputs = detailsContent.querySelectorAll('input, select, textarea');
        detailsInputs.forEach(input => {
            if (input.type === 'checkbox') {
                if (input.checked) {
                    if (!serviceDetails[input.name]) {
                        serviceDetails[input.name] = [];
                    }
                    serviceDetails[input.name].push(input.value);
                }
            } else if (input.type === 'file') {
                if (input.files && input.files.length > 0) {
                    serviceDetails[input.name] = `${input.files.length} arquivo(s) selecionado(s)`;
                }
            } else if (input.value) {
                serviceDetails[input.name] = input.value;
            }
        });
        
        // Build details message
        let detailsMessage = '';
        if (Object.keys(serviceDetails).length > 0) {
            detailsMessage = `\n\nDetalhes do Serviço:`;
            Object.keys(serviceDetails).forEach(key => {
                const input = detailsContent.querySelector(`[name="${key}"], [name="${key}[]"]`);
                const label = input?.closest('.form-group')?.querySelector('label')?.textContent?.replace(' *', '') || key;
                const value = Array.isArray(serviceDetails[key]) ? serviceDetails[key].join(', ') : serviceDetails[key];
                detailsMessage += `\n- ${label}: ${value}`;
            });
        }
        
        // Verificar se há referência e processar conversão
        const referralCode = localStorage.getItem('referralCode');
        let commissionProcessed = false;
        
        if (referralCode && !localStorage.getItem('userRegistered')) {
            // Simular valor da encomenda (baseado no serviço selecionado)
            const priceMatch = serviceName.match(/\(([\d,]+)\s*Kz\)/);
            
            if (priceMatch) {
                const orderAmount = parseInt(priceMatch[1].replace(/,/g, ''));
                
                // Processar conversão
                const commission = processConversion(orderAmount);
                
                // Marcar usuário como registrado
                localStorage.setItem('userRegistered', 'true');
                
                if (commission) {
                    commissionProcessed = true;
                    console.log(`Comissão de ${commission} Kz creditada ao afiliado ${referralCode}`);
                }
            }
        }
        
        // Extrair valor do serviço
        const priceMatch = serviceName.match(/\(([\d,]+)\s*Kz\)/);
        let orderAmount = 0;
        if (priceMatch) {
            orderAmount = parseInt(priceMatch[1].replace(/,/g, ''));
        }
        
        // Simulate API call (8 seconds as promised)
        setTimeout(() => {
            // Here you would typically send the data to a server
            // For now, we'll show a success message
            let successMessage = `Orçamento enviado com sucesso!\n\nDetalhes:\n- Serviço: ${serviceName}\n- Páginas: ${pages || 'Não especificado'}\n- Prazo: ${deadline}${detailsMessage}\n\nEnviaremos o orçamento para: ${email}`;
            
            if (commissionProcessed) {
                successMessage += `\n\n✅ Comissão creditada ao afiliado!`;
            }
            
            alert(successMessage);
            
            // Abrir modal de pagamento
            if (orderAmount > 0) {
                openPaymentModal(orderAmount);
            }
            
            // Reset form
            quickQuoteForm.reset();
            priceDisplay.style.display = 'none';
            serviceDetailsSection.style.display = 'none';
            detailsContent.innerHTML = '';
            submitBtn.classList.remove('loading');
            btnText.textContent = 'Obter Orçamento';
        }, 8000); // 8 seconds as promised
    });
}

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && message) {
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
            contactForm.reset();
        }
    });
}

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

// Scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (currentScroll / windowHeight) * 100;
    
    // Update scroll indicator
    if (scrollIndicator) {
        scrollIndicator.style.width = scrollPercentage + '%';
    }
    
    // Header shadow effect
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Toggle service expansion
function toggleService(header) {
    const card = header.closest('.service-category-card');
    const isExpanded = card.classList.contains('expanded');
    
    // Close all other cards
    document.querySelectorAll('.service-category-card').forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.classList.remove('expanded');
        }
    });
    
    // Toggle current card
    card.classList.toggle('expanded', !isExpanded);
}

// Apply badge colors based on text content
document.addEventListener('DOMContentLoaded', () => {
    const badges = document.querySelectorAll('.package-badge');
    badges.forEach(badge => {
        const text = badge.textContent.trim();
        badge.classList.remove('badge-basico', 'badge-medio', 'badge-avancado');
        
        if (text.includes('Básico')) {
            badge.classList.add('badge-basico');
        } else if (text.includes('Médio')) {
            badge.classList.add('badge-medio');
        } else if (text.includes('Avançado')) {
            badge.classList.add('badge-avancado');
        }
    });
    
    // Observe service cards and stats
    const animateElements = document.querySelectorAll('.stat');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// SISTEMA DE REFERÊNCIAS/AFILIADOS
// ============================================

// Função para gerar código único
function generateAffiliateCode(name) {
    const namePart = name.toUpperCase().replace(/\s+/g, '').substring(0, 5);
    const randomPart = Math.floor(Math.random() * 100);
    return namePart + randomPart;
}

// Função para registrar embaixador
function registerAffiliate(affiliateData) {
    const code = generateAffiliateCode(affiliateData.name);
    const affiliate = {
        id: Date.now().toString(),
        code: code,
        name: affiliateData.name,
        email: affiliateData.email,
        phone: affiliateData.phone,
        social: affiliateData.social,
        registeredAt: new Date().toISOString(),
        referrals: 0,
        conversions: 0,
        totalEarnings: 0,
        pendingEarnings: 0,
        conversionHistory: []
    };
    
    // Salvar no localStorage
    localStorage.setItem('affiliate_' + code, JSON.stringify(affiliate));
    localStorage.setItem('currentAffiliate', code);
    
    return affiliate;
}

// Função para obter afiliado atual
function getCurrentAffiliate() {
    const code = localStorage.getItem('currentAffiliate');
    if (!code) return null;
    
    const affiliateData = localStorage.getItem('affiliate_' + code);
    return affiliateData ? JSON.parse(affiliateData) : null;
}

// Função para detectar referência na URL
function detectReferral() {
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get('ref');
    
    if (refCode) {
        // Salvar referência no localStorage
        localStorage.setItem('referralCode', refCode);
        
        // Verificar se é um novo usuário
        if (!localStorage.getItem('userRegistered')) {
            // Criar entrada de referência
            const referralData = {
                code: refCode,
                timestamp: new Date().toISOString(),
                converted: false
            };
            
            let referrals = JSON.parse(localStorage.getItem('pendingReferrals') || '[]');
            referrals.push(referralData);
            localStorage.setItem('pendingReferrals', JSON.stringify(referrals));
        }
    }
}

// Função para processar conversão (quando usuário faz encomenda)
function processConversion(orderAmount) {
    const referralCode = localStorage.getItem('referralCode');
    
    if (!referralCode) return;
    
    // Buscar afiliado
    const affiliateData = localStorage.getItem('affiliate_' + referralCode);
    if (!affiliateData) return;
    
    const affiliate = JSON.parse(affiliateData);
    
    // Calcular comissão (25% do valor)
    const commission = Math.floor(orderAmount * 0.25);
    
    // Atualizar afiliado
    affiliate.conversions += 1;
    affiliate.totalEarnings += commission;
    affiliate.pendingEarnings += commission;
    
    // Adicionar ao histórico
    affiliate.conversionHistory.push({
        id: Date.now().toString(),
        amount: orderAmount,
        commission: commission,
        date: new Date().toISOString(),
        status: 'pending'
    });
    
    // Salvar atualização
    localStorage.setItem('affiliate_' + referralCode, JSON.stringify(affiliate));
    
    // Remover referência processada
    let pendingReferrals = JSON.parse(localStorage.getItem('pendingReferrals') || '[]');
    pendingReferrals = pendingReferrals.filter(r => r.code !== referralCode);
    localStorage.setItem('pendingReferrals', JSON.stringify(pendingReferrals));
    
    return commission;
}

// Função para atualizar dashboard
function updateDashboard() {
    const affiliate = getCurrentAffiliate();
    if (!affiliate) return;
    
    document.getElementById('affiliate-code').textContent = affiliate.code;
    document.getElementById('referral-link').value = window.location.origin + window.location.pathname + '?ref=' + affiliate.code;
    document.getElementById('total-referrals').textContent = affiliate.referrals || 0;
    document.getElementById('total-conversions').textContent = affiliate.conversions || 0;
    document.getElementById('total-earnings').textContent = (affiliate.totalEarnings || 0).toLocaleString('pt-AO') + ' Kz';
    document.getElementById('pending-earnings').textContent = (affiliate.pendingEarnings || 0).toLocaleString('pt-AO') + ' Kz';
    
    // Atualizar lista de conversões
    const conversionsList = document.getElementById('conversions-list');
    if (affiliate.conversionHistory && affiliate.conversionHistory.length > 0) {
        conversionsList.innerHTML = affiliate.conversionHistory
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(conv => `
                <div class="conversion-item">
                    <div class="conversion-info">
                        <div class="conversion-amount">${conv.amount.toLocaleString('pt-AO')} Kz</div>
                        <div class="conversion-date">${new Date(conv.date).toLocaleDateString('pt-AO')}</div>
                    </div>
                    <div class="conversion-commission">
                        <span class="commission-label">Comissão:</span>
                        <span class="commission-value">${conv.commission.toLocaleString('pt-AO')} Kz</span>
                    </div>
                    <div class="conversion-status ${conv.status}">${conv.status === 'pending' ? '⏳ Pendente' : '✅ Pago'}</div>
                </div>
            `).join('');
    } else {
        conversionsList.innerHTML = '<p class="empty-state">Ainda não há conversões. Compartilhe seu link para começar a ganhar!</p>';
    }
}

// Função para copiar link de referência
function copyReferralLink() {
    const linkInput = document.getElementById('referral-link');
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // Para mobile
    
    try {
        document.execCommand('copy');
        
        // Feedback visual
        const copyBtn = document.querySelector('.btn-copy');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span class="copy-icon">✅</span> Copiado!';
        copyBtn.style.background = 'var(--gradient-reverse)';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
        }, 2000);
    } catch (err) {
        alert('Erro ao copiar. Por favor, copie manualmente.');
    }
}

// Função para logout
function logoutAffiliate() {
    if (confirm('Tem certeza que deseja sair do dashboard?')) {
        localStorage.removeItem('currentAffiliate');
        document.getElementById('affiliate-dashboard').style.display = 'none';
        document.querySelector('.ambassador-layout').style.display = 'grid';
        document.getElementById('ambassadorForm').reset();
    }
}

// Atualizar formulário de embaixador
const ambassadorForm = document.getElementById('ambassadorForm');
if (ambassadorForm) {
    ambassadorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.btn-ambassador');
        const btnText = submitBtn.querySelector('.btn-text');
        
        // Show loading state
        submitBtn.classList.add('loading');
        btnText.textContent = 'Registrando...';
        
        // Get form values
        const name = document.getElementById('ambassador-name').value;
        const email = document.getElementById('ambassador-email').value;
        const phone = document.getElementById('ambassador-phone').value;
        const social = document.getElementById('ambassador-social').value;
        
        // Simulate API call
        setTimeout(() => {
            // Registrar afiliado
            const affiliate = registerAffiliate({ name, email, phone, social });
            
            // Esconder formulário e mostrar dashboard
            document.querySelector('.ambassador-layout').style.display = 'none';
            document.getElementById('affiliate-dashboard').style.display = 'block';
            
            // Atualizar dashboard
            updateDashboard();
            
            // Scroll para dashboard
            document.getElementById('affiliate-dashboard').scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            submitBtn.classList.remove('loading');
            btnText.textContent = 'Quero Ser Embaixador';
        }, 2000);
    });
}

// Verificar se há afiliado logado ao carregar página
document.addEventListener('DOMContentLoaded', () => {
    // Detectar referência na URL
    detectReferral();
    
    // Verificar se há afiliado logado
    const affiliate = getCurrentAffiliate();
    if (affiliate) {
        document.querySelector('.ambassador-layout').style.display = 'none';
        document.getElementById('affiliate-dashboard').style.display = 'block';
        updateDashboard();
    }
    
    // Sistema de conversão já está integrado no listener do quickQuoteForm acima
});

// ============================================
// SISTEMA DE PAGAMENTOS
// ============================================

// Função para abrir modal de pagamento
function openPaymentModal(amount) {
    const modal = document.getElementById('payment-modal');
    const amountElement = document.getElementById('payment-amount');
    const whatsappLink = document.querySelector('.btn-whatsapp-proof');
    
    if (amountElement) {
        amountElement.textContent = amount.toLocaleString('pt-AO') + ' Kz';
    }
    
    // Atualizar link do WhatsApp com informações do pedido
    if (whatsappLink) {
        const serviceSelect = document.getElementById('service-type');
        const serviceName = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : 'Serviço';
        const email = document.getElementById('email')?.value || '';
        
        const message = encodeURIComponent(
            `Olá! Acabei de fazer o pagamento via Multicaixa Express.\n\n` +
            `📋 Detalhes do Pedido:\n` +
            `- Serviço: ${serviceName}\n` +
            `- Valor: ${amount.toLocaleString('pt-AO')} Kz\n` +
            `- Email: ${email}\n\n` +
            `Anexo o comprovativo de pagamento.`
        );
        
        whatsappLink.href = `https://wa.me/244953369356?text=${message}`;
    }
    
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Função para fechar modal de pagamento
function closePaymentModal() {
    const modal = document.getElementById('payment-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Função para copiar número de telefone
function copyPaymentPhone() {
    const phone = '941087293';
    
    // Criar elemento temporário para copiar
    const tempInput = document.createElement('input');
    tempInput.value = phone;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    
    try {
        document.execCommand('copy');
        
        // Feedback visual
        const copyBtn = event.target.closest('.btn-copy-small');
        if (copyBtn) {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<span>✅</span>';
            copyBtn.style.background = 'rgba(34, 197, 94, 0.1)';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = '';
            }, 2000);
        }
    } catch (err) {
        alert('Erro ao copiar. O número é: ' + phone);
    }
    
    document.body.removeChild(tempInput);
}

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePaymentModal();
    }
});

// Theme Toggle Functionality
(function() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Verificar preferência salva ou usar preferência do sistema
    function getInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Verificar preferência do sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }
    
    // Aplicar tema
    function setTheme(theme) {
        if (theme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }
    
    // Inicializar tema
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    
    // Adicionar listener ao botão
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    }
    
    // Escutar mudanças na preferência do sistema
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            // Só aplicar se o usuário não tiver uma preferência salva
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
})();

// Tornar seção de serviços visível quando clicar nos links do footer
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar seção de serviços quando clicar em links do footer
    const serviceLinks = document.querySelectorAll('a[href="#servicos"]');
    serviceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const servicosSection = document.getElementById('servicos');
            if (servicosSection) {
                servicosSection.style.display = 'block';
                // Scroll suave já é tratado pelo código existente
            }
        });
    });
    
    // Scroll suave para seções quando clicar em links do footer
    document.querySelectorAll('.footer-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#servicos') {
                const servicosSection = document.getElementById('servicos');
                if (servicosSection) {
                    servicosSection.style.display = 'block';
                }
            } else if (href === '#home' && this.textContent.includes('Orçamento')) {
                // Scroll para o formulário de orçamento rápido
                e.preventDefault();
                const quickQuoteForm = document.querySelector('.quick-quote-form');
                if (quickQuoteForm) {
                    const headerOffset = 70;
                    const elementPosition = quickQuoteForm.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});