// Contador de visitas
function initVisitCounter() {
    let visits = localStorage.getItem('sancapurris_visits');
    
    if (!visits) {
        visits = 0;
    }
    
    visits = parseInt(visits) + 1;
    localStorage.setItem('sancapurris_visits', visits);
    
    // Animación del contador
    animateCounter(visits);
}

function animateCounter(targetValue) {
    const counterElement = document.getElementById('visitCounter');
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 50);
    const duration = 1500; // 1.5 segundos
    const stepTime = duration / (targetValue / increment);
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }
        counterElement.textContent = currentValue.toLocaleString();
    }, stepTime);
}

// Cargar imágenes de la galería
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    // Cargar imágenes guardadas en localStorage
    let savedImages = localStorage.getItem('sancapurris_images');
    let imagesList = [];
    
    if (savedImages) {
        imagesList = JSON.parse(savedImages);
    }
    
    // Cargar imágenes originales (las que vienen con el sitio)
    const originalImages = [
        "WhatsAppImage2025-10-07at12.06.25PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.06.25PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.06.25PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.06.25PM(4).jpeg",
        "WhatsAppImage2025-10-07at12.06.25PM.jpeg",
        "WhatsAppImage2025-10-07at12.06.26PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.06.26PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.06.26PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.06.26PM.jpeg",
        "WhatsAppImage2025-10-07at12.06.27PM.jpeg",
        "WhatsAppImage2025-10-07at12.06.28PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.06.28PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.06.28PM.jpeg",
        "WhatsAppImage2025-10-07at12.06.29PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.06.29PM.jpeg",
        "WhatsAppImage2025-10-07at12.06.31PM.jpeg",
        "WhatsAppImage2025-10-07at12.06.32PM(4).jpeg",
        "WhatsAppImage2025-10-07at12.06.33PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.06.33PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.06.33PM.jpeg",
        "WhatsAppImage2025-10-07at12.06.34PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.06.34PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.06.34PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.06.34PM(4).jpeg",
        "WhatsAppImage2025-10-07at12.06.34PM.jpeg",
        "WhatsAppImage2025-10-07at12.06.35PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.06.35PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.06.36PM.jpeg",
        "WhatsAppImage2025-10-07at12.06.37PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.06.37PM.jpeg",
        "WhatsAppImage2025-10-07at12.06.38PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.06.53PM.jpeg",
        "WhatsAppImage2025-10-07at12.06.57PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.06.57PM.jpeg",
        "WhatsAppImage2025-10-07at12.06.59PM.jpeg",
        "WhatsAppImage2025-10-07at12.11.43PM.jpeg",
        "WhatsAppImage2025-10-07at12.12.03PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.12.03PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.12.03PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.12.05PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.12.05PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.12.05PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.12.05PM.jpeg",
        "WhatsAppImage2025-10-07at12.12.06PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.12.06PM.jpeg",
        "WhatsAppImage2025-10-07at12.12.07PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.12.07PM.jpeg",
        "WhatsAppImage2025-10-07at12.12.08PM.jpeg",
        "WhatsAppImage2025-10-07at12.12.10PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.12.10PM.jpeg",
        "WhatsAppImage2025-10-07at12.12.11PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.12.11PM(4).jpeg",
        "WhatsAppImage2025-10-07at12.12.11PM.jpeg",
        "WhatsAppImage2025-10-07at12.12.12PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.12.12PM.jpeg",
        "WhatsAppImage2025-10-07at12.12.13PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.12.13PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.12.13PM.jpeg",
        "WhatsAppImage2025-10-07at12.12.15PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.12.16PM.jpeg",
        "WhatsAppImage2025-10-07at12.12.18PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.12.19PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.12.19PM.jpeg",
        "WhatsAppImage2025-10-07at12.12.21PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.12.22PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.17.02PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.17.02PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.17.02PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.17.50PM.jpeg",
        "WhatsAppImage2025-10-07at12.17.56PM.jpeg",
        "WhatsAppImage2025-10-07at12.17.57PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.17.57PM.jpeg",
        "WhatsAppImage2025-10-07at12.17.58PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.18.00PM.jpeg",
        "WhatsAppImage2025-10-07at12.18.02PM(4).jpeg",
        "WhatsAppImage2025-10-07at12.18.03PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.18.04PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.18.10PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.18.11PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.18.11PM.jpeg",
        "WhatsAppImage2025-10-07at12.18.12PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.18.13PM.jpeg",
        "WhatsAppImage2025-10-07at12.18.15PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.20.28PM(2).jpeg",
        "WhatsAppImage2025-10-07at12.20.34PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.20.34PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.20.36PM(1).jpeg",
        "WhatsAppImage2025-10-07at12.20.36PM(3).jpeg",
        "WhatsAppImage2025-10-07at12.20.37PM(1).jpeg"
    ];
    
    // Combinar imágenes originales con las nuevas
    const allImages = [...originalImages.map(img => ({ src: `./images/${img}`, type: 'original' })), ...imagesList];
    
    // Limpiar galería
    galleryGrid.innerHTML = '';
    
    // Agregar cada imagen a la galería
    allImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.05}s`;
        
        const img = document.createElement('img');
        img.src = image.src || image;
        img.alt = `Momento Sancapurris ${index + 1}`;
        img.loading = 'lazy';
        
        // Manejar errores de carga de imagen
        img.onerror = function() {
            console.error('Error cargando imagen:', this.src);
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23ddd" width="400" height="400"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="sans-serif" font-size="18"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
        };
        
        galleryItem.appendChild(img);
        galleryItem.onclick = () => openModal(img.src, img.alt);
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Manejar subida de nueva imagen
function handleImageUpload(event) {
    const file = event.target.files[0];
    
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imageData = e.target.result;
            
            // Guardar imagen en localStorage
            let savedImages = localStorage.getItem('sancapurris_images');
            let imagesList = savedImages ? JSON.parse(savedImages) : [];
            
            imagesList.push({
                src: imageData,
                type: 'uploaded',
                date: new Date().toISOString()
            });
            
            localStorage.setItem('sancapurris_images', JSON.stringify(imagesList));
            
            // Recargar galería
            loadGallery();
            
            // Mostrar mensaje de éxito
            showNotification('¡Imagen agregada exitosamente! 🎉');
        };
        
        reader.readAsDataURL(file);
    } else {
        showNotification('Por favor selecciona un archivo de imagen válido', 'error');
    }
    
    // Limpiar input
    event.target.value = '';
}

// Mostrar notificación
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#e74c3c'};
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideInRight 0.5s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Abrir modal con imagen
function openModal(src, alt) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    
    modal.style.display = 'block';
    modalImg.src = src;
    caption.textContent = alt;
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Agregar estilos de animación dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    initVisitCounter();
    loadGallery();
});
