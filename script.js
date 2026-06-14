// --- LÓGICA DO MENU MOBILE ---
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const icon = document.getElementById('menu-icon');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Fechar menu mobile ao clicar em algum link da navegação
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});

// --- LÓGICA DA ANIMAÇÃO DE ROLAGEM DA PÁGINA (REVEAL) ---
// Faz com que os elementos surjam suavemente enquanto o usuário faz o scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Descomente a linha abaixo se quiser que a animação aconteça apenas uma vez:
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// --- LÓGICA DO FORMULÁRIO DO WHATSAPP ---
// Captura os dados e envia a mensagem pronta pro WhatsApp
document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    const name = document.getElementById('clientName').value;
    const service = document.getElementById('clientService').value;
    
    // A MENSAGEM AUTOMÁTICA ULTRA CONVERSIVA
    const text = `Olá Juliana vim pelo site quero saber sobre seus serviços e ${service}. Meu nome é ${name}.`;
    
    const numeroWhatsApp = "5544998386527";
    const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
});
