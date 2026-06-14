// --- LÓGICA DO MENU MOBILE ---
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const icon = document.getElementById('menu-icon');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Fechar menu mobile ao clicar em algum link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});

// --- LÓGICA DA ANIMAÇÃO DE ROLAGEM (REVEAL) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// --- LÓGICA DO FORMULÁRIO DO WHATSAPP ---
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
