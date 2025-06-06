// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                // Close all other FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ
                item.classList.toggle('active');
            });
        });
    }
    
    // Translations object
    const translations = {
        pt: {
            title: "Tire Seu Negócio do Papel com Ajuda da Inteligência Artificial",
            login: "Entrar",
            getStarted: "Quero Garantir Minha Vaga",
            blog: {
                title: "Quem Está por Trás do Curso",
                instructor: {
                    name: "Thiago Fagundes",
                    role: "Publicitário, mentor e especialista em IA aplicada a pequenos negócios, com mais de 20 anos de experiência em marketing digital e automações.",
                    quote: ""Também já me senti preso por não saber por onde começar. Criei esse curso pra te mostrar que, com a abordagem certa, qualquer pessoa pode usar IA para empreender.""
                },
                readMore: "Saiba Mais",
                post1: {
                    date: "15 de Junho, 2023",
                    title: "Identificação com o Público-Alvo",
                    excerpt: "Você já tentou de tudo para colocar seu negócio no mundo: cursos gratuitos, vídeos no YouTube, ajuda de parentes, freelancers… e mesmo assim, ainda sente que falta algo?"
                },
                post2: {
                    date: "28 de Maio, 2023",
                    title: "Dificuldades Comuns",
                    excerpt: "Cansa de depender dos outros pra fazer as coisas acontecerem? Fica insegura com tecnologia? Se sente travada, sem saber o próximo passo?"
                },
                post3: {
                    date: "10 de Abril, 2023",
                    title: "Nossa Proposta",
                    excerpt: "Você não está sozinha. E existe um caminho mais fácil – e prático. Aprenda a usar IA para acelerar e simplificar seus processos."
                }
            },
            nav: {
                home: "Início",
                features: "Recursos",
                workshop: "Workshop",
                blog: "Blog",
                about: "Sobre",
                contact: "Contato"
            },
            hero: {
                title: "Tire Seu Negócio do Papel com Ajuda da<br>Inteligência Artificial<br>– Mesmo Sem Ser "Tech"",
                description: "Aprenda a montar um pequeno negócio do zero: da ideia até sua presença digital, com ferramentas práticas e o apoio da IA – mesmo que você nunca tenha feito isso antes.",
                eventDate: "📅 Data: 28 de junho (sexta-feira)",
                eventTime: "🕒 Horário: 19h (Horário de Brasília)",
                eventFormat: "💻 Formato: Online e Ao Vivo via Zoom",
                cta: "Quero Garantir Minha Vaga"
            },
            features: {
                title: "Este curso é para você que quer:",
                card1: {
                    title: "Montar sua empresa facilmente",
                    description: "Colocar sua empresa no ar de forma simples e rápida, sem complicações técnicas."
                },
                card2: {
                    title: "Usar IA para acelerar processos",
                    description: "Aprenda a usar Inteligência Artificial para acelerar e simplificar seus processos de negócio."
                },
                card3: {
                    title: "Criar identidade digital",
                    description: "Criar sua marca, identidade visual e presença digital com total autonomia."
                },
                card4: {
                    title: "Passo a passo guiado",
                    description: "Ter clareza do que fazer e como fazer – com apoio e passo a passo simples e prático."
                }
            },
            workshop: {
                title: "O Que Você Vai Aprender",
                item1: {
                    title: "Módulo 1 – Conceito e Direção",
                    description: "Como gerar ideias de negócio com ajuda da IA e encontrar oportunidades reais no mercado."
                },
                item2: {
                    title: "Módulo 2 – Plano de Negócio Simplificado",
                    description: "Crie seu plano com IA (sem planilhas complicadas) e defina público-alvo e gere o nome da empresa com ferramentas automáticas."
                },
                item3: {
                    title: "Módulo 3 – Identidade Visual",
                    description: "Criação de logo, paleta de cores e fontes com IA. Monte seu kit visual mesmo sem ser designer."
                },
                item4: {
                    title: "Módulo 4 – Conteúdo e Criativos",
                    description: "Planejamento de postagens e publicações para redes sociais. Crie textos, criativos e copies que vendem com IA."
                },
                item5: {
                    title: "Módulo 5 – Landing Page e Presença Online",
                    description: "Estrutura validada de página de vendas. Publicação com ferramentas no-code e textos prontos com IA."
                },
                item6: {
                    title: "Benefícios Diretos",
                    description: "Comece seu negócio mesmo sem saber nada de tecnologia. Tenha liberdade para criar tudo por conta própria e aumente sua visibilidade online."
                }
            },
            testimonials: {
                title: "Prova Social – Depoimentos Reais",
                testimonial1: {
                    name: "Carla",
                    role: "39 anos",
                    quote: '"Achei que seria complicado, mas com a orientação certa, consegui criar minha marca sozinha!"'
                },
                testimonial2: {
                    name: "Luciana",
                    role: "44 anos",
                    quote: '"Criei minha logo, posts e até meu mini site em menos de uma semana. Foi libertador."'
                },
                testimonial3: {
                    name: "Juliana",
                    role: "36 anos",
                    quote: '"O conteúdo é direto ao ponto. Usei tudo na prática e já estou vendendo pelo WhatsApp!"'
                }
            },
            registration: {
                title: "Convite à Transformação + Detalhamento dos Planos",
                subtitle: "Você já tem a vontade. Só precisa da direção certa. Agora é sua vez de dar o próximo passo com apoio, clareza e sem enrolação.",
                planoAoVivo: "Plano Ao Vivo",
                planoAoVivoFeatures: [
                    "Participação no curso de 3h ao vivo",
                    "Grupo de suporte no WhatsApp durante o evento",
                    "Material de apoio"
                ],
                planoVitalicio: "Plano Vitalício",
                planoVitalicioFeatures: [
                    "Tudo do plano ao vivo +",
                    "Gravação com acesso vitalício",
                    "Atualizações futuras do conteúdo",
                    "Bônus: modelos editáveis (logo, post, planejamento, site)"
                ],
                investimento: "Investimento:",
                precoAoVivo: "Plano Ao Vivo: R$ 48",
                precoVitalicio: "Plano Vitalício: R$ 137",
                form: {
                    namePlaceholder: "Nome Completo",
                    emailPlaceholder: "Endereço de E-mail",
                    selectDate: "Selecione a Data do Workshop",
                    date1: "28 de Junho, 2023",
                    date2: "10 de Julho, 2023",
                    date3: "5 de Agosto, 2023",
                    submitBtn: "Escolher Meu Plano"
                },
                faq: {
                    title: "Perguntas Frequentes (FAQ)",
                    q1: "Preciso saber usar IA?",
                    a1: "Não. Vamos te ensinar tudo com uma linguagem simples.",
                    q2: "É gravado ou ao vivo?",
                    a2: "O curso é ao vivo. O acesso à gravação está incluso apenas no plano vitalício.",
                    q3: "Como posso pagar?",
                    a3: "Pix, cartão ou boleto. Você escolhe.",
                    q4: "Vou conseguir aplicar mesmo sem experiência?",
                    a4: "Sim! O conteúdo é prático e você sai com tudo estruturado."
                }
            },
            footer: {
                quickLinks: {
                    title: "Links Rápidos",
                    home: "Início",
                    features: "Recursos",
                    workshops: "Workshops",
                    blog: "Blog",
                    about: "Sobre Nós"
                },
                resources: {
                    title: "Recursos",
                    documentation: "Documentação",
                    api: "API",
                    support: "Suporte",
                    community: "Comunidade"
                },
                connect: {
                    title: "Conecte-se",
                    twitter: "Twitter",
                    linkedin: "LinkedIn",
                    facebook: "Facebook",
                    instagram: "Instagram"
                },
                copyright: "© 2025 Brave ID. Todos os direitos reservados."
            }
        }
    };

    // Set language to Portuguese (no language selection needed)
    setLanguage('pt');
    
    // Function to set language
    function setLanguage(lang) {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const keys = element.dataset.i18n.split('.');
            let text = translations[lang];
            
            // Navigate through nested objects
            for (const key of keys) {
                text = text[key];
                if (!text) break;
            }
            
            if (text) {
                if (element.tagName === 'TITLE') {
                    element.textContent = text;
                } else {
                    element.innerHTML = text;
                }
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const keys = element.dataset.i18nPlaceholder.split('.');
            let text = translations[lang];
            
            for (const key of keys) {
                text = text[key];
                if (!text) break;
            }
            
            if (text) {
                element.placeholder = text;
            }
        });
        
        // Update select options
        document.querySelectorAll('[data-i18n-select]').forEach(select => {
            const selectBase = select.dataset.i18nSelect;
            
            Array.from(select.options).forEach(option => {
                if (option.dataset.i18n) {
                    const optionKey = option.dataset.i18n;
                    const keys = optionKey.split('.');
                    let text = translations[lang];
                    
                    for (const key of keys) {
                        text = text[key];
                        if (!text) break;
                    }
                    
                    if (text) {
                        option.textContent = text;
                    }
                }
            });
        });
    }
    
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Update URL hash without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // Add animation effects on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .workshop-item, .testimonial-card, .blog-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };

    // Add visible class to elements in viewport
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Navbar background change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form validation
    const registrationForm = document.querySelector('.registration-form form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const inputs = registrationForm.querySelectorAll('input, select');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.classList.add('success-message');
                successMessage.textContent = 'Registration successful! We will contact you shortly.';
                
                registrationForm.innerHTML = '';
                registrationForm.appendChild(successMessage);
            }
        });
    }

    // Add light particle effect to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Create canvas element
        const canvas = document.createElement('canvas');
        canvas.classList.add('particles-canvas');
        heroSection.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = heroSection.offsetWidth;
            canvas.height = heroSection.offsetHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, 255, ${Math.random() * 0.5 + 0.1})`;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x < 0 || this.x > canvas.width) {
                    this.speedX = -this.speedX;
                }
                
                if (this.y < 0 || this.y > canvas.height) {
                    this.speedY = -this.speedY;
                }
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Create particles array
        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }
        
        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Connect nearby particles with lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(100, 100, 255, ${0.1 * (1 - distance / 100)})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
});

// Update CSS styles dynamically for animation effects
document.head.insertAdjacentHTML('beforeend', `
<style>
    .feature-card, .workshop-item, .testimonial-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .feature-card.visible, .workshop-item.visible, .testimonial-card.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .particles-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    
    header.scrolled {
        background-color: rgba(10, 10, 24, 0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    
    .success-message {
        background-color: rgba(76, 175, 80, 0.2);
        color: #4CAF50;
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        margin-top: 20px;
        border: 1px solid rgba(76, 175, 80, 0.5);
    }
    
    .error {
        border-color: #ff308f !important;
        box-shadow: 0 0 5px rgba(255, 48, 143, 0.5);
    }
</style>
`);