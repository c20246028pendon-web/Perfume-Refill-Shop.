

        // DARK MODE
        const themeToggle = document.getElementById("themeToggle");
        const mobileThemeToggle = document.getElementById("mobileThemeToggle");

        function updateThemeButtons() {
            const isDark = document.documentElement.classList.contains("dark");

            themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
            mobileThemeToggle.textContent = isDark ? "☀️" : "🌙";
        }

        function toggleTheme() {
            document.documentElement.classList.toggle("dark");

            const isDark = document.documentElement.classList.contains("dark");

            localStorage.setItem("luis-theme", isDark ? "dark" : "light");

            updateThemeButtons();
        }

        // LOAD SAVED THEME
        if (localStorage.getItem("luis-theme") === "dark") {
            document.documentElement.classList.add("dark");
        }

        updateThemeButtons();

        themeToggle.addEventListener("click", toggleTheme);
        mobileThemeToggle.addEventListener("click", toggleTheme);


        // MOBILE MENU
        const menuToggle = document.getElementById("menuToggle");
        const mobileMenu = document.getElementById("mobileMenu");

        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");

            menuToggle.textContent =
                mobileMenu.classList.contains("hidden") ? "☰" : "✕";
        });

        // CLOSE MOBILE MENU AFTER CLICKING A LINK
        document.querySelectorAll("#mobileMenu a").forEach(link => {
            link.addEventListener("click", function () {
                mobileMenu.classList.add("hidden");
                menuToggle.textContent = "☰";
            });
        });

   