document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".typing-text");
    const fullText = title ? title.textContent.trim() : "";

    if (title) {
        title.textContent = "";
        let index = 0;

        const typeNext = () => {
            if (index >= fullText.length) {
                return;
            }

            title.textContent += fullText.charAt(index);
            index += 1;
            setTimeout(typeNext, 26);
        };

        typeNext();
    }

    const revealTargets = document.querySelectorAll(".section, .hero-panel, .project-card");
    revealTargets.forEach((node) => node.classList.add("reveal"));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.16,
        }
    );

    revealTargets.forEach((node) => observer.observe(node));
});
