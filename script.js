document.addEventListener("DOMContentLoaded", function () {

    /* ================= MOBILE MENU ================= */

    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        navMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });

        });
    }


    /* ================= ACTIVE NAVIGATION ================= */

    const navLinks = document.querySelectorAll(
        ".navbar nav a[href^='#']"
    );

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    function updateActiveNav() {

        let current = "home";

        sections.forEach(function (section) {

            const top = section.getBoundingClientRect().top;

            if (top <= 130) {
                current = section.id;
            }

        });

        navLinks.forEach(function (link) {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + current
            );

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* ================= SCHOOL WEBSITE SLIDESHOW ================= */

    document.querySelectorAll(".slideshow").forEach(function (slideshow) {

        const slides = slideshow.querySelector(".slides");

        const images = slideshow.querySelectorAll(
            ".slides img"
        );

        const dots = slideshow.querySelectorAll(
            ".dot"
        );

        const prev = slideshow.querySelector(".prev");

        const next = slideshow.querySelector(".next");

        let current = 0;


        function showSlide(index) {

            if (images.length === 0) {
                return;
            }

            current =
                (index + images.length) % images.length;

            slides.style.transform =
                "translateX(-" + (current * 100) + "%)";


            dots.forEach(function (dot, i) {

                dot.classList.toggle(
                    "active",
                    i === current
                );

            });

        }


        /* NEXT BUTTON */

        if (next) {

            next.addEventListener("click", function (event) {

                event.stopPropagation();

                showSlide(current + 1);

            });

        }


        /* PREVIOUS BUTTON */

        if (prev) {

            prev.addEventListener("click", function (event) {

                event.stopPropagation();

                showSlide(current - 1);

            });

        }


        /* DOT BUTTONS */

        dots.forEach(function (dot) {

            dot.addEventListener("click", function (event) {

                event.stopPropagation();

                showSlide(
                    Number(dot.dataset.index)
                );

            });

        });


        /* AUTOMATIC SLIDESHOW */

        if (images.length > 1) {

            setInterval(function () {

                showSlide(current + 1);

            }, 5000);

        }

    });


    /* ================= PROJECT DETAILS MODAL ================= */

    const modal =
        document.getElementById("project-modal");

    const closeOne =
        document.getElementById("modal-close");

    const closeTwo =
        document.getElementById("modal-close-two");


    const projects = {

        student: {

            title: "Student Management System",

            type: "WEB APPLICATION",

            description:
                "A web-based system designed to manage students, teachers, courses and academic marks in one place.",

            technologies:
                "PHP, MySQL, HTML, CSS, XAMPP",

            focus:
                "Student and academic management",

            image:
                "images/project1.jpg"

        },


        attendance: {

            title: "Employee Attendance System",

            type: "WEB APPLICATION",

            description:
                "A web-based system for managing employee attendance, departments and leave requests.",

            technologies:
                "PHP, MariaDB, HTML, CSS, XAMPP",

            focus:
                "Employee attendance management",

            image:
                ""

        },


        ai: {

            title: "Personal AI Assistant",

            type: "PERSONAL PROJECT",

            description:
                "A personal project exploring AI-assisted information retrieval, databases and privacy-focused digital assistance.",

            technologies:
                "AI, RAG, Vector Database",

            focus:
                "AI and information retrieval",

            image:
                ""

        }

    };


    /* OPEN PROJECT DETAILS */

    document.querySelectorAll(
        ".details-button[data-project]"
    ).forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const project =
                    projects[button.dataset.project];

                if (!project) {
                    return;
                }


                document.getElementById(
                    "modal-title"
                ).textContent =
                    project.title;


                document.getElementById(
                    "modal-type"
                ).textContent =
                    project.type;


                document.getElementById(
                    "modal-description"
                ).textContent =
                    project.description;


                document.getElementById(
                    "modal-technologies"
                ).textContent =
                    project.technologies;


                document.getElementById(
                    "modal-focus"
                ).textContent =
                    project.focus;


                const modalImage =
                    document.getElementById(
                        "modal-project-image"
                    );


                if (project.image) {

                    modalImage.src =
                        project.image;

                    modalImage.alt =
                        project.title;

                    modalImage.style.display =
                        "block";

                } else {

                    modalImage.style.display =
                        "none";

                }


                modal.classList.add("show");

                modal.setAttribute(
                    "aria-hidden",
                    "false"
                );

                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    /* CLOSE MODAL */

    function closeModal() {

        if (!modal) {
            return;
        }

        modal.classList.remove("show");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";

    }


    if (closeOne) {

        closeOne.addEventListener(
            "click",
            closeModal
        );

    }


    if (closeTwo) {

        closeTwo.addEventListener(
            "click",
            closeModal
        );

    }


    /* CLICK OUTSIDE MODAL */

    if (modal) {

        modal.addEventListener(
            "click",
            function (event) {

                if (event.target === modal) {

                    closeModal();

                }

            }
        );

    }


    /* ESCAPE KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeModal();

            }

        }
    );


    /* ================= THEME BUTTON ================= */

    const themeButton =
        document.getElementById(
            "theme-button"
        );


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "soft-dark"
                );

            }
        );

    }

});