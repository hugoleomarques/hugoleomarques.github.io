document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    let lastFocusedElement = null;

    const openModal = (modalId, trigger) => {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        lastFocusedElement = trigger || document.activeElement;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const focusTarget = modal.querySelector('input, textarea, button');
        if (focusTarget) focusTarget.focus();
    };

    const closeModal = (modal) => {
        if (!modal || !modal.classList.contains('active')) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (lastFocusedElement) lastFocusedElement.focus();
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

    // Close active modal on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) closeModal(activeModal);
        }
    });

    // Buttons Actions
    const btnContact = document.getElementById('btn-contact');
    if (btnContact) {
        btnContact.addEventListener('click', () => openModal('modal-contact', btnContact));
    }

    // Contact Form Simulation
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
});
