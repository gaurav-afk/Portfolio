

document.addEventListener("DOMContentLoaded", () => {
    const githubLinks = document.querySelectorAll(".project-div");

    githubLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        document.querySelectorAll(".project-div").forEach((div) => {
          if (!link.closest(".project-div").isSameNode(div)) {
            div.classList.add("stand-out-effect");
          }
        });
      });

      link.addEventListener("mouseout", () => {
        document.querySelectorAll(".project-div").forEach((div) => {
          div.classList.remove("stand-out-effect");
        });
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("#nav ul li a");

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const hrefAttribute = link.getAttribute("href");

        if (hrefAttribute.startsWith("#")) {
          e.preventDefault();

          const targetSection = document.querySelector(hrefAttribute);
          if (targetSection) {
            const offsetTop = targetSection.offsetTop;

            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }
        }
      });
    });
  });