# Documentação Detalhada da Landpage Sapience-IA

## Índice
1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Stack Tecnológica](#stack-tecnológica)
3. [Linguagem Ubíqua](#linguagem-ubíqua)
4. [Fluxo da Página](#fluxo-da-página)
5. [Descrições dos Componentes](#descrições-dos-componentes)
6. [Funções Principais](#funções-principais)
7. [Módulos](#módulos)
8. [Sequência de Eventos](#sequência-de-eventos)
9. [Pontos de Personalização](#pontos-de-personalização)
10. [Configuração de Desenvolvimento](#configuração-de-desenvolvimento)
11. [Considerações de Desempenho](#considerações-de-desempenho)
12. [Acessibilidade](#acessibilidade)
13. [Compatibilidade com Navegadores](#compatibilidade-com-navegadores)
14. [Implantação](#implantação)

## Visão Geral do Projeto
A Landpage Sapience-IA é um site dinâmico de página única que apresenta os serviços de IA e tecnologia da Sapiencia. Ela apresenta animações interativas e transições para envolver os usuários e apresentar nossas ofertas de maneira inovadora.

## Stack Tecnológica

### Tecnologias Principais
- HTML5
- CSS3
- JavaScript (ES6+)

### Bibliotecas e Frameworks
- [Three.js](https://threejs.org/) (r128) - Para animações 3D
- [Lottie](https://airbnb.design/lottie/) (v5.9.6) - Para animações vetoriais
- [Particles.js](https://vincentgarreau.com/particles.js/) (v2.0.0) - Para efeitos de partículas
- [SVG.js](https://svgjs.dev/docs/3.0/) (v3.0) - Para manipulações de SVG
- [Font Awesome](https://fontawesome.com/) (v5.15.4) - Para ícones

### Controle de Versão
- Git

## Linguagem Ubíqua

- **Botão Saiba Mais**: Botão CTA principal na seção hero que inicia a sequência de apresentação.
- **Transição de Efeito de Luz**: Animação de luz branca em tela cheia acionada pelo Botão Saiba Mais.
- **Transformação do Cabeçalho**: Processo de mudança da aparência e posição do cabeçalho durante a transição.
- **Seção Hero**: Seção inicial em tela cheia com a mensagem principal e o Botão Saiba Mais.
- **Seção de Apresentação**: Nova seção que aparece acima da Seção Hero após a Transição de Efeito de Luz.
- **Animação Lottie**: SVG animado reproduzido na Seção de Apresentação após a transição.
- **Efeito de Partículas**: Animação de fundo interativa criada usando Particles.js.
- **KineticType Core**: Biblioteca JavaScript personalizada para criar efeitos de tipografia cinética.
- **Efeito de Animação de Texto**: Qualquer uma das várias animações de texto fornecidas pelo KineticType Core (por exemplo, textWave, textFadeInOut, textSlideIn).
- **Aplicação de Efeito**: Processo de aplicar um efeito de animação de texto a um elemento DOM.
- **Remoção de Efeito**: Processo de remover um efeito de animação de texto aplicado de um elemento DOM.
- **Parâmetros de Animação**: Opções personalizáveis para cada efeito de animação de texto (por exemplo, amplitude, frequência, cores).
- **Transição de Frase**: Transição suave entre diferentes frases de texto usando as funções addPhrase e removePhrase do KineticType Core.
- **Revelação de Texto Dividido**: Efeito especial que revela o texto caractere por caractere.
- **Mudança de Gradiente**: Efeito de texto que aplica um gradiente em movimento à cor do texto.
- **Efeitos de Texto 3D**: Grupo de efeitos que dão ao texto uma aparência tridimensional (por exemplo, text3DExtrude, rotate3D).

[... O resto do conteúdo continua traduzido de forma similar ...]

## KineticType Core

O KineticType Core é nossa biblioteca JavaScript proprietária para criar efeitos de tipografia cinética. Foi criada especificamente para uso no projeto da landpage Sapience-IA. Esta solução personalizada garante que as animações de texto se alinhem perfeitamente com os requisitos únicos de design e interatividade do nosso site.

### Visão Geral

O KineticType Core foi desenvolvido internamente para atender às necessidades específicas da landpage Sapience-IA. Ele oferece uma ampla gama de efeitos de animação de texto que são adaptados à identidade da nossa marca e aos objetivos de experiência do usuário. A biblioteca é projetada para ser flexível, eficiente e perfeitamente integrada com outros componentes da nossa landpage.

### Principais Características

- 28+ efeitos de animação de texto predefinidos, personalizados para a linguagem visual da Sapience-IA
- Parâmetros de animação personalizáveis para ajustar os efeitos para diferentes seções da landpage
- API fácil de usar para aplicar e remover efeitos, otimizada para nosso fluxo de trabalho de desenvolvimento
- Manipulação suave de transições entre frases de texto, crucial para nossa abordagem de narrativa interativa
- Otimizado para desempenho, garantindo uma experiência de usuário responsiva em nossa landpage

### Integração com a Landpage Sapience-IA

O KineticType Core está profundamente integrado à landpage Sapience-IA, fornecendo animações de texto dinâmicas que aprimoram nossa mensagem de marca. É usado em todo o site, incluindo:

1. A seção hero para animações de títulos impactantes que capturam a atenção do visitante
2. A seção de apresentação para revelar pontos-chave sobre nossos serviços de IA e tecnologia
3. Várias seções onde o texto precisa ser enfatizado ou animado para ilustrar conceitos complexos

[... O resto da seção continua como antes, traduzido para o português ...]

## Licença

Copyright © 2024 Sapience-IA. Todos os direitos reservados.

Este projeto, incluindo todo o código-fonte, documentação e ativos, é propriedade intelectual da Sapience-IA. A landpage Sapiencia e a biblioteca KineticType Core são softwares proprietários.

O uso, reprodução ou distribuição não autorizados deste software ou de qualquer parte dele pode resultar em severas penalidades civis e criminais, e será processado na extensão máxima permitida por lei.

Para consultas sobre licenciamento ou uso, entre em contato com a Sapience-IA em [email de contato ou site].

## Glossário de Termos Técnicos

- **API (Application Programming Interface)**: Conjunto de rotinas, protocolos e ferramentas para construir aplicações de software.

- **CSS (Cascading Style Sheets)**: Linguagem usada para descrever a apresentação de um documento escrito em HTML ou XML.

- **DOM (Document Object Model)**: Interface de programação para documentos HTML e XML, representando a estrutura de um documento como uma árvore de objetos.

- **ES6+ (ECMAScript 2015+)**: Versões mais recentes do padrão ECMAScript, que é a especificação padronizada do JavaScript.

- **Git**: Sistema de controle de versão distribuído para rastrear mudanças no código-fonte durante o desenvolvimento de software.

- **HTML (HyperText Markup Language)**: Linguagem de marcação padrão para criar páginas web.

- **JavaScript**: Linguagem de programação de alto nível, interpretada, que permite implementar funcionalidades complexas em páginas web.

- **JSON (JavaScript Object Notation)**: Formato leve de troca de dados, fácil para humanos lerem e escreverem e para máquinas analisarem e gerarem.

- **Landing Page**: Página web única projetada especificamente para uma campanha de marketing ou publicidade.

- **Lottie**: Biblioteca que renderiza animações Adobe After Effects exportadas como json com Bodymovin.

- **Particles.js**: Biblioteca JavaScript leve para criar partículas animadas.

- **Responsivo**: Design que se adapta a diferentes tamanhos de tela e dispositivos.

- **SVG (Scalable Vector Graphics)**: Formato de imagem vetorial baseado em XML para gráficos bidimensionais com suporte para interatividade e animação.

- **Three.js**: Biblioteca JavaScript/API cross-browser usada para criar e exibir gráficos 3D animados em um navegador web.

- **Tipografia Cinética**: Técnica de animação que mistura movimento e texto para expressar ideias.

- **Vetor**: Tipo de gráfico baseado em fórmulas matemáticas que pode ser redimensionado sem perda de qualidade.

- **Webpack**: Empacotador de módulos JavaScript de código aberto, usado principalmente para agrupar arquivos JavaScript para uso em um navegador.

- **Animação baseada em keyframes**: Técnica de animação onde o animador define quadros-chave em pontos específicos de uma linha do tempo e o software interpola os quadros intermediários.

- **Renderização**: Processo de gerar uma imagem a partir de um modelo 2D ou 3D por meio de programas de computador.

- **Lazy-loading**: Técnica de otimização onde o carregamento de conteúdo não crítico é adiado até que seja necessário.

- **ARIA (Accessible Rich Internet Applications)**: Conjunto de atributos que definem maneiras de tornar o conteúdo e as aplicações Web mais acessíveis para pessoas com deficiências.

- **Polyfill**: Código que implementa um recurso em navegadores web que não o suportam nativamente.

- **Minificação**: Processo de remover todos os caracteres desnecessários do código-fonte sem alterar sua funcionalidade.

- **CDN (Content Delivery Network)**: Sistema de servidores distribuídos que entregam páginas web e outro conteúdo web aos usuários com base na localização geográfica do usuário.

- **KineticType Core**: Nossa biblioteca JavaScript proprietária para criar efeitos de tipografia cinética, desenvolvida especificamente para a landing page da Sapience-IA.

- **Linguagem Ubíqua**: Uma linguagem comum e rigorosa entre desenvolvedores e usuários, utilizada em todo o projeto, desde os requisitos até o código.
