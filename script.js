// ===== Project Data =====
const projectsData = {
    project1: {
        title: "iOS App Name",
        description: `Describe your iOS app here. Talk about what problem it solves, who it's for, and what makes it special.

Include details about the challenges you faced and how you overcame them. Recruiters love seeing your problem-solving process.`,
        technologies: ["Swift", "SwiftUI", "Core Data", "CloudKit"],
        images: [
            "assets/images/project1.jpg",
            "assets/images/project1-2.jpg",
            "assets/images/project1-3.jpg"
        ],
        github: "https://github.com/yourusername/project1",
        live: "https://apps.apple.com/app/yourapp"
    },
    project2: {
        title: "AI/ML Project Name",
        description: `Describe your AI/ML project here. Explain what it does, what datasets you used, and what results you achieved.

Mention any interesting techniques or algorithms you implemented.`,
        technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
        images: [
            "assets/images/project2.jpg",
            "assets/images/project2-2.jpg"
        ],
        github: "https://github.com/yourusername/project2",
        live: ""
    },
    project3: {
        title: "Another iOS App",
        description: `Description for your third project. Make sure to highlight the unique aspects and your contributions.`,
        technologies: ["Swift", "UIKit", "Firebase", "MapKit"],
        images: [
            "assets/images/project3.jpg"
        ],
        github: "https://github.com/yourusername/project3",
        live: ""
    },
    project4: {
        title: "Python Backend Project",
        description: `Description for your Python backend project. Explain the architecture, API design, and any AI integrations.`,
        technologies: ["Python", "OpenAI API", "PostgreSQL", "Docker"],
        images: [
            "assets/images/project4.jpg"
        ],
        github: "https://github.com/yourusername/project4",
        live: ""
    }
};

// ===== DOM Elements =====
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalClose = document.querySelector('.modal-close');
const sections = document.querySelectorAll('.section');
const cursorGlow = document.querySelector('.cursor-glow');

// ===== Cursor Glow Effect =====
let mouseX = 0;
let mouseY = 0;
let glowX = 0;
let glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;

    if (cursorGlow) {
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
    }

    requestAnimationFrame(animateGlow);
}

animateGlow();

// Hide glow on mobile
if ('ontouchstart' in window) {
    if (cursorGlow) cursorGlow.style.display = 'none';
}

// ===== Mobile Navigation =====
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Navbar scroll effect =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 10, 16, 0.95)';
    } else {
        navbar.style.background = 'rgba(5, 10, 16, 0.8)';
    }
});

// ===== Carousel =====
const carousel = document.querySelector('.carousel');
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const dotsContainer = document.querySelector('.carousel-dots');

let currentSlide = 0;
const totalSlides = slides.length;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

// Auto-play carousel
let autoplayInterval = setInterval(nextSlide, 5000);

// Pause on hover
if (carousel) {
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });
}

// Touch support for carousel
let touchStartX = 0;
let touchEndX = 0;

if (carousel) {
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (diff > swipeThreshold) {
        nextSlide();
    } else if (diff < -swipeThreshold) {
        prevSlide();
    }
}

// ===== Project Filters =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach((card, index) => {
            const category = card.dataset.category;

            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ===== Project Modal =====
const projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach(link => {
    link.addEventListener('click', () => {
        const projectId = link.dataset.project;
        const project = projectsData[projectId];

        if (project) {
            openModal(project);
        }
    });
});

function openModal(project) {
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description.trim();

    const mainImg = document.getElementById('modal-main-img');
    mainImg.src = project.images[0];

    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    thumbnailsContainer.innerHTML = '';

    project.images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.alt = `Screenshot ${index + 1}`;
        if (index === 0) thumb.classList.add('active');

        thumb.addEventListener('click', () => {
            mainImg.src = img;
            thumbnailsContainer.querySelectorAll('img').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });

        thumbnailsContainer.appendChild(thumb);
    });

    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';

    project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techContainer.appendChild(span);
    });

    const githubLink = document.getElementById('modal-github');
    const liveLink = document.getElementById('modal-live');

    if (project.github) {
        githubLink.href = project.github;
        githubLink.style.display = 'inline-flex';
    } else {
        githubLink.style.display = 'none';
    }

    if (project.live) {
        liveLink.href = project.live;
        liveLink.style.display = 'inline-flex';
    } else {
        liveLink.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===== Scroll Animations =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// ===== Active nav link on scroll =====
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Hero is always visible
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('visible');
});
