<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theme Toggle Example</title>
    <style>
        body.dark-theme {
            background-color: #333;
            color: #fff;
        }
        .transition {
            transition: all 0.5s ease;
        }
    </style>
    <script>
        // Determine the expected state of the theme toggle, which can be "dark", "light", or "system". Default is "system".
        let determineThemeSetting = () => {
            let themeSetting = localStorage.getItem("theme");
            if (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") {
                themeSetting = "system";
            }
            return themeSetting;
        };

        // Determine the computed theme, which can be "dark" or "light". If the theme setting is "system", the computed theme is determined based on the user's system preference.
        let determineComputedTheme = () => {
            let themeSetting = determineThemeSetting();
            if (themeSetting == "system") {
                const userPref = window.matchMedia;
                if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
                    return "dark";
                } else {
                    return "light";
                }
            } else {
                return themeSetting;
            }
        };

        // Apply the initial theme setting.
        let applyInitialTheme = () => {
            let theme = determineComputedTheme();
            document.documentElement.setAttribute("data-theme", theme);
            if (theme === "dark") {
                document.body.classList.add('dark-theme');
            }
        };

        // Apply the initial theme as early as possible to prevent flickering
        applyInitialTheme();
    </script>
</head>
<body>
    <!-- This button will trigger the theme toggle -->
    <button id="light_toggle">Toggle Theme</button>

    <!-- This hidden button is the actual theme toggle button -->
    <button id="theme_toggle" style="display:none;">Hidden Toggle</button>

    <script>
        // Function to switch the theme
        function switchTheme() {
            console.log("Switching theme");
            var body = document.body;

            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            }
        }

        // Ensure the DOM is fully loaded before attaching event listeners
        document.addEventListener('DOMContentLoaded', function() {
            const lightToggle = document.getElementById('light_toggle');
            const themeToggle = document.getElementById('theme_toggle');

            // Add click event listener to light_toggle button
            lightToggle.addEventListener('click', function() {
                console.log("light_toggle clicked");
                themeToggle.click();
            });

            // Add click event listener to theme_toggle button
            themeToggle.addEventListener('click', function() {
                console.log("theme_toggle clicked");
                switchTheme();
            });
        });
    </script>
</body>
</html>

