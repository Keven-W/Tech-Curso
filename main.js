// Elementos DOM
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const ctaButton = document.getElementById('cta-button');
const testimonialsSlider = document.getElementById('testimonials-slider');

// Estado da aplicação
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const navDots = document.querySelectorAll('.nav-dot');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Função principal de inicialização
function initializeApp() {
  setupNavigation();
  setupScrollAnimations();
  setupTestimonialsSlider();
  setupSmoothScroll();
  setupParallaxEffect();
  setupButtonAnimations();
  
  // Animação inicial dos elementos
  animateOnLoad();
}

// Configuração da navegação móvel
function setupNavigation() {
  navToggle.addEventListener('click', toggleMobileMenu);
  
  // Fechar menu ao clicar em um link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
  
  // Fechar menu ao clicar fora
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });
}

// Toggle do menu mobile
function toggleMobileMenu() {
  navMenu.classList.toggle('active');
  
  // Animação do ícone hambúrguer
  const spans = navToggle.querySelectorAll('span');
  spans.forEach((span, index) => {
    if (navMenu.classList.contains('active')) {
      if (index === 0) span.style.transform = 'rotate(45deg) translate(6px, 6px)';
      if (index === 1) span.style.opacity = '0';
      if (index === 2) span.style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      span.style.transform = 'none';
      span.style.opacity = '1';
    }
  });
}

// Configuração das animações de scroll
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);
  
  // Observar cards de features
  document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
  });
  
  // Observar outros elementos animáveis
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Configuração do slider de depoimentos
function setupTestimonialsSlider() {
  // Auto-play do slider
  setInterval(() => {
    nextTestimonial();
  }, 5000);
  
  // Navegação pelos dots
  navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showTestimonial(index);
    });
  });
  
  // Navegação por teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      previousTestimonial();
    } else if (e.key === 'ArrowRight') {
      nextTestimonial();
    }
  });
}

// Mostrar depoimento específico
function showTestimonial(index) {
  // Remover classe active de todos
  testimonials.forEach(testimonial => {
    testimonial.classList.remove('active');
  });
  
  navDots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Adicionar classe active ao atual
  testimonials[index].classList.add('active');
  navDots[index].classList.add('active');
  
  currentTestimonial = index;
}

// Próximo depoimento
function nextTestimonial() {
  const next = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(next);
}

// Depoimento anterior
function previousTestimonial() {
  const prev = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
  showTestimonial(prev);
}

// Scroll suave para links internos
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Efeito parallax sutil
function setupParallaxEffect() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Aplicar parallax às partículas do hero
    document.querySelectorAll('.hero-particle').forEach((particle, index) => {
      const speed = (index + 1) * 0.1;
      particle.style.transform = `translateY(${rate * speed}px)`;
    });
  });
}

// Configuração das animações dos botões
function setupButtonAnimations() {
  // Animação do botão CTA principal
  ctaButton.addEventListener('click', function(e) {
    // Efeito ripple
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
    
    // Simular ação (pode ser substituído por funcionalidade real)
    showNotification('🚀 Redirecionando para o checkout...');
  });
  
  // Hover effect para todos os botões
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// Animações na carga da página
function animateOnLoad() {
  // Animar elementos do hero com delay
  const heroElements = [
    '.hero-title',
    '.hero-subtitle',
    '.hero-buttons',
    '.hero-stats'
  ];
  
  heroElements.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (element) {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, index * 200);
    }
  });
}

// Sistema de notificações
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Estilos inline para a notificação
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '16px 24px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    zIndex: '10000',
    transform: 'translateX(400px)',
    transition: 'transform 0.3s ease-out',
    maxWidth: '300px',
    fontSize: '14px',
    fontWeight: '500'
  });
  
  document.body.appendChild(notification);
  
  // Animar entrada
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remover após 3 segundos
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Utilitário: Debounce para otimizar eventos de scroll
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Configuração do header transparente
function setupHeaderTransparency() {
  const header = document.querySelector('.header');
  const debouncedScroll = debounce(() => {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(10, 10, 15, 0.95)';
      header.style.backdropFilter = 'blur(20px)';
    } else {
      header.style.background = 'rgba(10, 10, 15, 0.9)';
      header.style.backdropFilter = 'blur(10px)';
    }
  }, 10);
  
  window.addEventListener('scroll', debouncedScroll);
}

// Contador animado para estatísticas
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = counter.textContent;
    const isNumber = /^\d+/.test(target);
    
    if (isNumber) {
      const value = parseInt(target.replace(/\D/g, ''));
      const suffix = target.replace(/\d/g, '');
      let current = 0;
      const increment = value / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          current = value;
          clearInterval(timer);
        }
        counter.textContent = Math.floor(current) + suffix;
      }, 20);
    }
  });
}

// Configurar contador quando a seção hero estiver visível
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      heroObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

heroObserver.observe(document.querySelector('.hero-stats'));

// Adicionar estilos CSS para o efeito ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

// Configurar header transparente
setupHeaderTransparency();

// Easter egg: Konami Code
let konamiCode = [];
const konamiSequence = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.code);
  konamiCode = konamiCode.slice(-konamiSequence.length);
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    showNotification('🎉 Código secreto ativado! Desconto especial aplicado!', 'success');
    // Aqui você pode adicionar lógica para aplicar desconto
  }
});

// Exportar funções para possível uso externo
window.TechCurso = {
  showNotification,
  nextTestimonial,
  previousTestimonial,
  showTestimonial
};