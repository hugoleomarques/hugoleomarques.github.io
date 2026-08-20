document.addEventListener('DOMContentLoaded', () => {
    // Modal Helpers
    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent body scroll
        }
    };

    const closeModal = (modal) => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Close buttons/Overlays
    document.querySelectorAll('.close-modal, .modal-overlay').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target === el || e.target.classList.contains('close-modal')) {
                const modal = el.closest('.modal-overlay') || el;
                closeModal(modal);
            }
        });
    });

    // Buttons Actions
    const btnContact = document.getElementById('btn-contact');
    if (btnContact) {
        btnContact.addEventListener('click', () => openModal('modal-contact'));
    }

    const btnLogin = document.getElementById('btn-login');
    if (btnLogin) {
        btnLogin.addEventListener('click', () => openModal('modal-login'));
    }

    // Forms Simulation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Enviando...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'Mensagem Enviada!';
                btn.style.background = '#10b981';

                setTimeout(() => {
                    closeModal(document.getElementById('modal-contact'));
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                    contactForm.reset();
                }, 1500);
            }, 1000);
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Isso simularia o cadastro! Em um app real, os dados seriam salvos.');
            closeModal(document.getElementById('modal-login'));
        });
    }

    // Google Button Simulation
    document.querySelector('.google-btn').addEventListener('click', () => {
        alert('Aqui abriria a janela de autenticação do Google.');
    });
});
