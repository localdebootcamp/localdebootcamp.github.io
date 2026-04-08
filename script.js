/**
 * Premium Data Engineering Mentorship
 * Content Management & Interactivity
 */

// 1. Mentor Configuration (Easy to update)
const mentorData = {
    name: "Subhan S. Karki",
    title: "Data Engineering Architect | Teaching Engineers How Real Data Systems Work",
    bio: [
        "Specializing in building real-world, production-grade systems that scale.",
        "Over a decade of experience in teaching data engineering principles and mentoring engineers.",
        "Passionate about system design thinking and architectural excellence in data platforms."
    ],
    linkedin: "https://www.linkedin.com/in/sskarki/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEGI3uNVmvcpg/profile-displayphoto-scale_200_200/B56Zr1GhPRHAAY-/0/1765048719232?e=1777507200&v=beta&t=g_RlpXW3TBUgngBjcuTznrqKuUoN1S6uY6WLUd0NfBA"
};

// 2. Inject Mentor Data
function injectMentorInfo() {
    const container = document.getElementById('mentor-section');
    if (!container) return;

    container.innerHTML = `
        <div class="mentor-card">
            <img src="${mentorData.image}" alt="${mentorData.name}" class="mentor-image">
            <div class="mentor-info">
                <span class="badge">Your Mentor</span>
                <h2>${mentorData.name}</h2>
                <p class="mentor-title">${mentorData.title}</p>
                <div class="mentor-bio">
                    ${mentorData.bio.map(para => `<p style="margin-bottom: 1rem;">${para}</p>`).join('')}
                </div>
                <a href="${mentorData.linkedin}" target="_blank" class="btn btn-outline" style="margin-top: 1.5rem;">
                    <i data-lucide="linkedin"></i> View LinkedIn Profile
                </a>
            </div>
        </div>
    `;
    
    // Re-initialize icons for the injected content
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// 3. Smooth Scrolling for Navigation
function initSmoothScroll() {
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
}

// 4. Form Success Message (Optional Enhancement)
// If you want to show a message instead of redirecting, you would use AJAX.
// But since the user wants a redirect, we'll let Formspree handle it via the hidden input in HTML.

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    injectMentorInfo();
    initSmoothScroll();
});
