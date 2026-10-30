// Show only projects matched with the selected category
const filterButtons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll("article.active");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");

        const selected = button.dataset.filter;
        projects.forEach((project) => {
            const matched = selected == "all" || selected == project.dataset.category;
            project.classList.toggle("d-none", !matched);
        });
    });
});

// Prevent form refresh default
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}
