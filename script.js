   // =====================================
        // DARK MODE
        // =====================================

        const themeToggle = document.getElementById("themeToggle");
        const mobileThemeToggle = document.getElementById("mobileThemeToggle");

        function updateThemeButtons() {

            const isDark =
                document.documentElement.classList.contains("dark");

            themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
            mobileThemeToggle.textContent = isDark ? "☀️" : "🌙";
        }

        function toggleTheme() {

            document.documentElement.classList.toggle("dark");

            const isDark =
                document.documentElement.classList.contains("dark");

            localStorage.setItem(
                "luis-theme",
                isDark ? "dark" : "light"
            );

            updateThemeButtons();
        }

        if (localStorage.getItem("luis-theme") === "dark") {
            document.documentElement.classList.add("dark");
        }

        updateThemeButtons();

        themeToggle.addEventListener("click", toggleTheme);
        mobileThemeToggle.addEventListener("click", toggleTheme);


        // =====================================
        // MOBILE MENU
        // =====================================

        const menuToggle = document.getElementById("menuToggle");
        const mobileMenu = document.getElementById("mobileMenu");

        menuToggle.addEventListener("click", function () {

            mobileMenu.classList.toggle("hidden");

            menuToggle.textContent =
                mobileMenu.classList.contains("hidden") ? "☰" : "✕";

        });

        document.querySelectorAll("#mobileMenu a").forEach(link => {

            link.addEventListener("click", function () {

                mobileMenu.classList.add("hidden");
                menuToggle.textContent = "☰";

            });

        });


        // =====================================
        // SCROLL PERCENTAGE
        // =====================================

        const scrollProgress = document.getElementById("scrollProgress");
        const scrollPercent = document.getElementById("scrollPercent");

        function updateScrollProgress() {

            const scrollTop = window.scrollY;

            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const percentage = scrollHeight > 0
                ? Math.min(100, Math.round((scrollTop / scrollHeight) * 100))
                : 0;

            scrollProgress.style.width = percentage + "%";

            scrollPercent.textContent = percentage + "%";
        }

        window.addEventListener("scroll", updateScrollProgress, {
            passive: true
        });

        window.addEventListener("resize", updateScrollProgress);

        updateScrollProgress();


        // =====================================
        // GSAP AND SCROLLTRIGGER
        // =====================================

        gsap.registerPlugin(ScrollTrigger);

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!prefersReducedMotion) {

            // NAVIGATION ANIMATION

            gsap.from("nav", {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });


            // HERO ANIMATION

            const heroTimeline = gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });

            heroTimeline
                .from("#heroTitle", {
                    y: 80,
                    opacity: 0,
                    duration: 1
                })
                .from("#heroText", {
                    y: 40,
                    opacity: 0,
                    duration: 0.8
                }, "-=0.5")
                .from("#heroButton", {
                    y: 30,
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.7
                }, "-=0.4");


            // ABOUT ANIMATION

            gsap.from(".about-content", {

                scrollTrigger: {
                    trigger: "#about",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },

                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out"

            });


            // SERVICES TITLE

            gsap.from(".services-title", {

                scrollTrigger: {
                    trigger: "#services",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },

                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"

            });


            // SERVICES CARDS

            gsap.fromTo(".service-card",

                {
                    opacity: 0,
                    y: 80
                },

                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.25,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: "#services",
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }

                }
            );


            // PRODUCTS TITLE

            gsap.from(".products-title", {

                scrollTrigger: {
                    trigger: "#products",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },

                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"

            });


            // PRODUCT CARDS

            gsap.fromTo(".product-card",

                {
                    opacity: 0,
                    y: 100,
                    scale: 0.9
                },

                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    stagger: 0.3,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: "#products",
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }

                }
            );


            // CONTACT TITLE

            gsap.from(".contact-title", {

                scrollTrigger: {
                    trigger: "#contact",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },

                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"

            });


            // CONTACT CONTENT

            gsap.from(".contact-content", {

                scrollTrigger: {
                    trigger: "#contact",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },

                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"

            });


            // FOOTER

            gsap.from("footer", {

                scrollTrigger: {
                    trigger: "footer",
                    start: "top 95%",
                    toggleActions: "play none none reverse"
                },

                opacity: 0,
                y: 30,
                duration: 0.8

            });

        }