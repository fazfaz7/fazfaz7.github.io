// ===== Project Data =====
const projectsData = {
    "vaccination-sim": {
        title: "Drive-Thru Vaccination Centre Simulation",
        description: `A multi-agent simulation of a COVID-19 drive-thru vaccination center focused on improving traffic distribution and reducing waiting times. The system models cars, vaccination modules, and a supervisor agent that dynamically assigns vehicles to the most efficient routes. The simulation runs in Python and is visualized in real time using Unity.`,
        technologies: ["Python", "Mesa", "Unity", "Client-Server Architecture", "Systems Modeling"],
        icon: "assets/images/icons/vaccinationsystem_icon.jpg",
        images: [
            "assets/images/screenshots/vaccination/vacc1.gif",
            "assets/images/screenshots/vaccination/vacc1.jpeg",
            "assets/images/screenshots/vaccination/vacc2.jpeg",
            "assets/images/screenshots/vaccination/vacc3.jpeg"
        ],
        github: "",
        live: ""
    },
    "ensena": {
        title: "EnSeña — Mexican Sign Language App",
        description: `An iOS application designed to make learning Mexican Sign Language more accessible through structured videos, images, and interactive quizzes. The app includes a backend system to store user progress and was fully designed, developed, and published to the App Store under the university's developer account.`,
        technologies: ["SwiftUI", "Flask", "MongoDB", "REST APIs", "Figma"],
        icon: "assets/images/icons/ensena_icon.png",
        images: [
            "assets/images/screenshots/ensena/lsm1.jpeg",
            "assets/images/screenshots/ensena/lsm2.jpeg",
            "assets/images/screenshots/ensena/lsm3.jpeg"
        ],
        github: "",
        live: "",
        appStore: "https://apps.apple.com/us/app/itc-mty-ense%C3%B1a/id6467686248"
    },
    "intelia": {
        title: "Intelia — Educational iPad App",
        description: `An educational iPad app that helps children learn Spanish and basic mathematics through augmented reality, handwriting exercises, and speech-based interaction. The app was designed with accessibility in mind and won first place in the Software Development category at the Engineering Expo.`,
        technologies: ["SwiftUI", "ARKit", "PencilKit", "Speech Framework", "Accessibility APIs"],
        icon: "assets/images/icons/intelia_icon.jpg",
        images: [
            "assets/images/screenshots/intelia/intelia1.jpeg",
            "assets/images/screenshots/intelia/intelia2.jpeg",
            "assets/images/screenshots/intelia/intelia3.jpeg",
            { type: "youtube", id: "g_hdnVCyGVs" },
        ],
        github: "",
        live: ""
    },
    "smart-speak": {
        title: "Smart Speak — AI English Assessment Platform",
        description: `A web-based platform designed to automate English proficiency assessments for hiring processes. Candidates interact with an AI through real-time conversations, while the system analyzes grammar, vocabulary, and coherence to generate detailed feedback and scores. The platform also provides an admin dashboard for reviewing recordings and evaluation results.`,
        technologies: ["Remix (React)", "Python (Flask)", "OpenAI API", "PostgreSQL", "MongoDB"],
        icon: "assets/images/icons/smartspeak_icon.jpg",
        images: [
            "assets/images/screenshots/smartspeak/smartspeak1.jpeg",
            "assets/images/screenshots/smartspeak/smartspeak2.jpeg",
            "assets/images/screenshots/smartspeak/smartspeak3.jpeg"
        ],
        github: "",
        live: ""
    },
    "class-insight": {
        title: "Class Insight — AI Classroom Analytics",
        description: `An AI-powered system that automatically tracks student attendance and participation in classrooms using computer vision. Facial recognition is used to register attendance, while pose estimation detects hand-raising for participation. The system includes a web dashboard where teachers can review statistics and insights about class engagement.`,
        technologies: ["Python", "Computer Vision", "YOLO", "MediaPipe", "Next.js"],
        icon: "assets/images/icons/studentparticipation_icon.png",
        images: [
            "assets/images/screenshots/studentparticipation/students1.gif",
            "assets/images/screenshots/studentparticipation/students2.jpeg",
            "assets/images/screenshots/studentparticipation/students4.jpeg",
            { type: "youtube", id: "Kapee6-aIT4" }
        ],
        github: "",
        live: ""
    },
    "dropout-prediction": {
        title: "Student Dropout Risk Prediction",
        description: `A data science project focused on predicting student dropout risk using supervised machine learning models. The work involved data preprocessing, feature selection, training multiple models, and comparing their performance using standard evaluation metrics to identify the most effective approach.`,
        technologies: ["Python", "Pandas", "scikit-learn", "NumPy", "Machine Learning"],
        icon: "assets/images/icons/studentdroput_icon.png",
        images: [
            "assets/images/screenshots/studentdropout/studentdroput_icon.png"
        ],
        github: "",
        live: "",
        article: "https://drive.google.com/file/d/1UzfQMHFQO1eJmtOS3jd5FDZ5p4xdp7Lu/view"
    },
    "itmeans": {
        title: "itMeans — Real-Life Vocabulary Builder",
        description: `An iOS app designed to help language learners build vocabulary from real-life experiences. Users can quickly save words or phrases as they encounter them, add meanings later, and review them naturally through a daily Home Screen widget. The app focuses on low-friction input, offline-first usage, and long-term retention through repetition.`,
        technologies: ["SwiftUI", "SwiftData", "WidgetKit", "AppStorage", "iOS"],
        icon: "assets/images/icons/itmeans_icon.png",
        images: [
            "assets/images/screenshots/itmeans/itmeans1.png",
            "assets/images/screenshots/itmeans/itmeans2.png",
            "assets/images/screenshots/itmeans/itmeans3.png"
        ],
        github: "",
        live: "",
        appStore: "https://apps.apple.com/us/app/itmeans/id6740202316"
    },
    "pinch-it": {
        title: "Pinch It! — Touchless Hand Therapy App",
        description: `An iOS app that transforms a traditional finger-pinching therapy exercise into a playful, touchless experience for children with dysgraphia. Using the device camera, the app detects hand and finger movements in real time. The experience was refined through multiple user-testing sessions with children and iterated based on observed behavior.`,
        technologies: ["SwiftUI", "Vision Framework", "Hand & Finger Tracking", "Camera-Based Interaction", "Accessibility Design"],
        icon: "assets/images/icons/pinchit_icon.png",
        images: [
            "assets/images/screenshots/pinchit/pinchit1.jpeg",
            "assets/images/screenshots/pinchit/pinchit2.jpeg"
        ],
        github: "",
        live: "",
        appStore: "https://apps.apple.com/us/app/pinch-it/id6742778952"
    },
    "blinko": {
        title: "Blinko — Find, Learn, Remember",
        description: `A language-learning app for children aged 5–7 that turns real-world exploration into vocabulary discovery. Using the device camera, children scan objects around them to learn new words while following a story-driven experience. The app uses a custom-trained object recognition model deployed on-device and was refined through testing sessions with children in Italian schools.`,
        technologies: ["SwiftUI", "CoreML", "YOLOv8", "Transfer Learning", "Computer Vision"],
        icon: "assets/images/icons/blinko_icon.png",
        images: [
            "assets/images/screenshots/blinko/Blinko1.PNG",
            "assets/images/screenshots/blinko/Blinko2.PNG",
            "assets/images/screenshots/blinko/Blinko3.PNG",
            "assets/images/screenshots/blinko/Blinko4.PNG",
            "assets/images/screenshots/blinko/Blinko5.PNG"
        ],
        github: "",
        live: "",
        appStore: "https://apps.apple.com/us/app/blinko-find-learn-remember/id6745825407"
    },
    "chicken-airport": {
        title: "The International Chicken Airport",
        description: `An interactive storytelling app designed to make Natural Language Processing concepts more approachable. Set in a chaotic chicken airport, users complete playful missions that simulate tokenization, lemmatization, parts of speech, and sentiment analysis, helping them understand how language-processing systems work behind the scenes.`,
        technologies: ["SwiftUI", "Natural Language Framework", "NLP Fundamentals", "Educational Game Design", "iOS"],
        icon: "assets/images/icons/chickenairport_icon.png",
        images: [
            "assets/images/screenshots/chickenairport/chicken1.jpeg",
            "assets/images/screenshots/chickenairport/chicken2.jpeg",
            "assets/images/screenshots/chickenairport/chicken3.jpeg",
            "assets/images/screenshots/chickenairport/chicken4.jpeg",
            { type: "youtube", id: "rTCyQm_u5Cw" }
        ],
        github: "",
        live: ""
    },
    "lost-museum": {
        title: "The Lost Museum",
        description: `An educational iOS app where users restore a broken museum guided by a friendly ghost. Progress is achieved by learning about countries, flags, and capitals through interactive galleries. The project combines storytelling and education and was selected as a winner of the Swift Student Challenge 2024.`,
        technologies: ["SwiftUI", "Swift", "State Management", "Educational UX", "iOS"],
        icon: "assets/images/icons/lostmuseum_icon.jpg",
        images: [
            { type: "youtube", id: "xfZ0n6wjn8M" }
        ],
        github: "",
        live: ""
    },
    "heyplan": {
        title: "HeyPlan — Voice-Based Finance Assistant",
        description: `A first-place Datathon project that allows users to register cash transactions using voice input. The app converts speech into structured financial records, automatically categorizes transactions, and provides personalized recommendations and retirement planning features using AI-based natural language understanding.`,
        technologies: ["Swift", "Speech-to-Text", "OpenAI API", "NLP", "iOS"],
        icon: "assets/images/icons/heyplan_icon.png",
        images: [
            { type: "youtube", id: "zUJILh3eaCA" }
        ],
        github: "",
        live: ""
    },
    "gemify": {
        title: "Gemify — Spatial Computing Science App",
        description: `A spatial computing application for visionOS that lets users interact with chemical elements in an immersive 3D environment and combine them to create gemstones. The project explores spatial interaction paradigms, gesture-based input, and immersive educational experiences on Apple Vision Pro.`,
        technologies: ["visionOS", "Spatial Computing", "Gesture-Based Interaction", "3D UI Design", "Apple Vision Frameworks"],
        icon: "assets/images/icons/gemify_icon.jpg",
        images: [
            "assets/images/screenshots/gemify/gemify1.jpg",
            "assets/images/screenshots/gemify/gemify2.jpg",
            "assets/images/screenshots/gemify/gemify3.jpg"
        ],
        github: "",
        live: "",
        appStore: "https://apps.apple.com/us/app/gemify-craft-your-own-gems/id6753974353"
    }
};

// ===== DOM Elements =====
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
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
const categoryFilters = document.querySelectorAll('#category-filters .filter-btn');
const stackFilters = document.querySelectorAll('#stack-filters .filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const noResults = document.getElementById('no-results');

let activeCategory = 'all';
let activeStack = 'all';

function filterProjects() {
    let visibleCount = 0;

    projectCards.forEach((card, index) => {
        const cardCategory = card.dataset.category;
        const cardStack = card.dataset.stack || '';

        const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
        const matchesStack = activeStack === 'all' || cardStack.includes(activeStack);

        if (matchesCategory && matchesStack) {
            card.classList.remove('hidden');
            card.style.animationDelay = `${visibleCount * 0.05}s`;
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    // Show/hide no results message
    if (noResults) {
        if (visibleCount === 0) {
            noResults.classList.add('visible');
        } else {
            noResults.classList.remove('visible');
        }
    }
}

// Category filter click handlers
categoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.filter;
        filterProjects();
    });
});

// Stack filter click handlers
stackFilters.forEach(btn => {
    btn.addEventListener('click', () => {
        stackFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeStack = btn.dataset.stack;
        filterProjects();
    });
});

// ===== Project Modal =====
const projectLinks = document.querySelectorAll('.project-link');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');
const galleryDotsContainer = document.getElementById('gallery-dots');

let currentGalleryImages = [];
let currentGalleryIndex = 0;

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

    // Use only project images (fallback to icon if no images)
    currentGalleryImages = project.images && project.images.length > 0
        ? project.images
        : [project.icon];
    currentGalleryIndex = 0;

    // Display first media item
    displayMediaItem(currentGalleryImages[0]);

    // Setup gallery navigation
    setupGalleryNavigation();

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

    const appStoreLink = document.getElementById('modal-appstore');
    if (project.appStore) {
        appStoreLink.href = project.appStore;
        appStoreLink.style.display = 'inline-flex';
    } else {
        appStoreLink.style.display = 'none';
    }

    const articleLink = document.getElementById('modal-article');
    if (project.article) {
        articleLink.href = project.article;
        articleLink.style.display = 'inline-flex';
    } else {
        articleLink.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function setupGalleryNavigation() {
    const dotsContainer = document.getElementById('gallery-dots');
    dotsContainer.innerHTML = '';

    // Hide navigation if only one image
    if (currentGalleryImages.length <= 1) {
        galleryPrev.classList.add('hidden');
        galleryNext.classList.add('hidden');
        return;
    }

    galleryPrev.classList.remove('hidden');
    galleryNext.classList.remove('hidden');

    // Create dots
    currentGalleryImages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('gallery-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToGalleryImage(index));
        dotsContainer.appendChild(dot);
    });

    updateGalleryButtons();
}

function goToGalleryImage(index) {
    currentGalleryIndex = index;
    displayMediaItem(currentGalleryImages[index]);
    updateGalleryDots();
    updateGalleryButtons();
}

function displayMediaItem(item) {
    const mainImg = document.getElementById('modal-main-img');
    const videoContainer = document.getElementById('modal-video-container');

    // Check if item is a YouTube video (object with type: "youtube")
    if (typeof item === 'object' && item.type === 'youtube') {
        mainImg.classList.add('hidden');
        videoContainer.classList.add('active');
        videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${item.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    } else {
        // It's an image (string)
        mainImg.classList.remove('hidden');
        videoContainer.classList.remove('active');
        videoContainer.innerHTML = '';
        mainImg.src = item;
    }
}

function updateGalleryDots() {
    const dots = document.querySelectorAll('.gallery-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentGalleryIndex);
    });
}

function updateGalleryButtons() {
    // Disable prev on first image, next on last image
    galleryPrev.disabled = currentGalleryIndex === 0;
    galleryNext.disabled = currentGalleryIndex === currentGalleryImages.length - 1;
}

function galleryPrevImage() {
    if (currentGalleryIndex > 0) {
        goToGalleryImage(currentGalleryIndex - 1);
    }
}

function galleryNextImage() {
    if (currentGalleryIndex < currentGalleryImages.length - 1) {
        goToGalleryImage(currentGalleryIndex + 1);
    }
}

galleryPrev.addEventListener('click', galleryPrevImage);
galleryNext.addEventListener('click', galleryNextImage);

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentGalleryImages = [];
    currentGalleryIndex = 0;

    // Clear video container to stop playback
    const videoContainer = document.getElementById('modal-video-container');
    videoContainer.innerHTML = '';
    videoContainer.classList.remove('active');
    document.getElementById('modal-main-img').classList.remove('hidden');
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
    // Arrow key navigation for gallery
    if (modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            galleryPrevImage();
        } else if (e.key === 'ArrowRight') {
            galleryNextImage();
        }
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
