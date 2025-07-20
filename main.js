// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');
const homeSection = document.getElementById('home');

// Show home section by default
homeSection.style.display = 'block';

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');
        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));
        homeSection.style.display = 'none';
        // Hide auth form and reset button when rời khỏi trang chủ
        if (link.getAttribute('data-section') !== 'home') {
            homeAuthFormWrapper.style.display = 'none';
            showAuthFormBtn.textContent = 'Đăng nhập/Đăng ký';
        }
        // Show selected section
        const sectionId = link.getAttribute('data-section');
        if (sectionId === 'home') {
            homeSection.style.display = 'block';
        } else {
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        }
    });
});

// Form handling
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (email && password) {
        alert('Đăng nhập thành công! Chào mừng bạn đến với Explore Vietnam 360.');
        loginForm.reset();
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }
    if (name && email && password) {
        alert('Đăng ký thành công! Chào mừng bạn đến với Explore Vietnam 360.');
        registerForm.reset();
    }
});

// CTA button functionality
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Navigate to about section
    document.querySelector('[data-section="about"]').click();
});

// Show Auth Form button functionality
const showAuthFormBtn = document.getElementById('showAuthFormBtn');
const homeAuthFormWrapper = document.getElementById('homeAuthFormWrapper');
showAuthFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Chỉ cho phép mở form khi đang ở trang chủ
    if (homeSection.style.display === 'block') {
        if (homeAuthFormWrapper.style.display === 'none') {
            homeAuthFormWrapper.style.display = 'block';
            showAuthFormBtn.textContent = 'Đóng';
        } else {
            homeAuthFormWrapper.style.display = 'none';
            showAuthFormBtn.textContent = 'Đăng nhập/Đăng ký';
        }
    }
});

// Smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
}); 