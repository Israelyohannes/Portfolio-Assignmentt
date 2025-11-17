document.addEventListener('DOMContentLoaded', () => {
    // Splash Screen on Page Load
    const splashScreen = document.getElementById('splashScreen');
    const splashText = document.getElementById('splashText');
    
    // Show initial splash screen for 2 seconds
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 1000); // Matches fade-out animation duration
    }, 2000); // Display for exactly 2 seconds

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
        themeToggle.textContent = document.body.classList.contains('light-theme') ? 'Dark Mode' : 'Light Mode';
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.textContent = 'Dark Mode';
    }

    // Genre Modal
    const modal = document.getElementById('genreModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLink = document.getElementById('modalLink');
    const closeModal = document.querySelector('.close-modal');
    const genreCards = document.querySelectorAll('.genre-card');

    genreCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default navigation
            const genre = card.getAttribute('data-genre');
            const description = card.getAttribute('data-description');
            const link = card.getAttribute('data-link');

            modalTitle.textContent = genre;
            modalDescription.textContent = description;
            modalLink.setAttribute('href', link);
            modal.style.display = 'flex';
        });
    });

    // Navigate when "Watch Now" is clicked
    modalLink.addEventListener('click', (e) => {
        const href = modalLink.getAttribute('href');
        if (href && href !== '#') {
            window.location.href = href;
        }
    });

    // Close modal when clicking the close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});