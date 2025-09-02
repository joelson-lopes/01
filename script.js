// ==========================
// MENU INTERATIVO
// ==========================
const menuLinks = document.querySelectorAll("header nav a");

// Scroll suave até as seções
menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

// ==========================
// ANIMAÇÃO AO ROLAR
// ==========================
const sections = document.querySelectorAll(".secao");

function aparecerSecoes() {
    const trigger = window.innerHeight * 0.8;
    sections.forEach(secao => {
        const topo = secao.getBoundingClientRect().top;
        if (topo < trigger) {
            secao.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", aparecerSecoes);
aparecerSecoes();

// ==========================
// ANIMAÇÃO NOS CARDS
// ==========================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.classList.add("destaque");
    });
    card.addEventListener("mouseout", () => {
        card.classList.remove("destaque");
    });
});
