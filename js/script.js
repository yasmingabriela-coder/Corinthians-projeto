// Variáveis globais
let currentFilter = 'todos';
let allTitulos = [];

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
});

// Inicializar página
function initializePage() {
    allTitulos = corinthiansData.titulos;
    renderTitulos(allTitulos);
    updateActiveFilter('todos');
}

// Configurar event listeners
function setupEventListeners() {
    // Enter na busca
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchTitles();
            }
        });
        
        // Busca em tempo real
        searchInput.addEventListener('input', function() {
            searchTitles();
        });
    }
    
    // Fechar modal ao clicar fora
    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Renderizar títulos
function renderTitulos(titulos) {
    const grid = document.getElementById('titulosGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (titulos.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; font-size: 1.5rem; color: rgba(255,255,255,0.6);">Nenhum título encontrado</p>';
        return;
    }
    
    titulos.forEach((titulo, index) => {
        const card = createTituloCard(titulo, index);
        grid.appendChild(card);
    });
}

// Criar card de título
function createTituloCard(titulo, index) {
    const card = document.createElement('div');
    card.className = `titulo-card ${titulo.categoria}`;
    card.onclick = () => openModal(titulo);
    
    card.innerHTML = `
        <div class="card-header">
            <span class="card-numero">#${String(titulo.id).padStart(3, '0')}</span>
            <span class="card-ano">${titulo.ano}</span>
        </div>
        <h3 class="card-titulo">${titulo.nome}</h3>
        <span class="card-categoria ${titulo.categoria}">${getCategoriaLabel(titulo.categoria)}</span>
        <p class="card-descricao">${titulo.descricao}</p>
        <p class="card-destaque">⭐ ${titulo.destaque}</p>
    `;
    
    // Animação escalonada
    card.style.animationDelay = `${index * 0.1}s`;
    
    return card;
}

// Obter label da categoria
function getCategoriaLabel(categoria) {
    const labels = {
        'internacional': 'Internacional',
        'nacional': 'Nacional',
        'estadual': 'Estadual'
    };
    return labels[categoria] || categoria;
}

// Filtrar títulos
function filterTitles(categoria) {
    currentFilter = categoria;
    updateActiveFilter(categoria);
    
    // Esconder seção de ídolos
    document.getElementById('idolos').style.display = 'none';
    document.getElementById('titulos').style.display = 'block';
    
    if (categoria === 'todos') {
        renderTitulos(allTitulos);
    } else {
        const filtered = allTitulos.filter(t => t.categoria === categoria);
        renderTitulos(filtered);
    }
    
    // Scroll suave para a seção
    document.getElementById('titulos').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Atualizar botão ativo
function updateActiveFilter(categoria) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === categoria) {
            btn.classList.add('active');
        }
    });
}

// Buscar títulos
function searchTitles() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!searchTerm) {
        filterTitles(currentFilter);
        return;
    }
    
    const filtered = allTitulos.filter(titulo => {
        return titulo.nome.toLowerCase().includes(searchTerm) ||
               titulo.descricao.toLowerCase().includes(searchTerm) ||
               titulo.ano.toString().includes(searchTerm) ||
               titulo.categoria.toLowerCase().includes(searchTerm);
    });
    
    renderTitulos(filtered);
}

// Mostrar ídolos
function showIdolos() {
    updateActiveFilter('idolos');
    
    // Esconder seção de títulos
    document.getElementById('titulos').style.display = 'none';
    document.getElementById('idolos').style.display = 'block';
    
    renderIdolos();
    
    // Scroll suave para a seção
    document.getElementById('idolos').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Renderizar ídolos
function renderIdolos() {
    const grid = document.getElementById('idolosGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    corinthiansData.idolos.forEach((idolo, index) => {
        const card = createIdoloCard(idolo, index);
        grid.appendChild(card);
    });
}

// Criar card de ídolo
function createIdoloCard(idolo, index) {
    const card = document.createElement('div');
    card.className = 'idolo-card';
    
    const conquistasList = idolo.conquistas.map(c => `<li>${c}</li>`).join('');
    
    card.innerHTML = `
        <h3 class="idolo-nome">${idolo.nome}</h3>
        <p class="idolo-posicao">${idolo.posicao}</p>
        <p class="idolo-periodo">${idolo.periodo}</p>
        <p class="idolo-descricao">${idolo.descricao}</p>
        <div class="idolo-conquistas">
            <h4>Principais Conquistas:</h4>
            <ul>${conquistasList}</ul>
        </div>
    `;
    
    // Animação escalonada
    card.style.animationDelay = `${index * 0.1}s`;
    
    return card;
}

// Abrir modal com detalhes
function openModal(titulo) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <h2 style="font-size: 3rem; margin-bottom: 1rem; color: var(--cor-dourado);">${titulo.ano}</h2>
            <h3 style="font-size: 2.5rem; margin-bottom: 1rem;">${titulo.nome}</h3>
            <span class="card-categoria ${titulo.categoria}" style="font-size: 1.2rem; padding: 0.8rem 1.5rem;">
                ${getCategoriaLabel(titulo.categoria)}
            </span>
        </div>
        
        <div style="margin-top: 2rem; padding: 2rem; background-color: rgba(0,0,0,0.3); border-radius: 15px;">
            <h4 style="font-size: 1.5rem; color: var(--cor-vermelho); margin-bottom: 1rem;">📖 História</h4>
            <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">${titulo.descricao}</p>
            
            <h4 style="font-size: 1.5rem; color: var(--cor-dourado); margin-bottom: 1rem;">⭐ Destaque</h4>
            <p style="font-size: 1.1rem; line-height: 1.8; font-style: italic;">${titulo.destaque}</p>
        </div>
        
        <div style="margin-top: 2rem; text-align: center;">
            <button onclick="closeModal()" style="padding: 1rem 3rem; font-size: 1.1rem; background-color: var(--cor-vermelho); color: white; border: none; border-radius: 50px; cursor: pointer; font-weight: 700; transition: 0.3s;">
                Fechar
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fechar modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Função para animação de números (contador)
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Animação de entrada quando elementos ficam visíveis
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.titulo-card, .idolo-card, .resumo-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar efeito de parallax no hero
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Função para copiar link
function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copiado para a área de transferência!');
    });
}

// Função para compartilhar nas redes sociais
function shareOnSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('História do Corinthians - Corinthiansdex');
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${title}%20${url}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Adicionar botão "voltar ao topo"
function createBackToTop() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--cor-vermelho);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: 0.3s;
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    document.body.appendChild(button);
}

// Inicializar funcionalidades extras
createBackToTop();

// Log de boas-vindas no console
console.log('%c🏆 Corinthiansdex - História do Timão 🏆', 'font-size: 20px; font-weight: bold; color: #DC143C;');
console.log('%cVai Corinthians! ⚫⚪', 'font-size: 16px; color: #FFD700;');