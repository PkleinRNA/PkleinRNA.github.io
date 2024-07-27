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
        let determineThemeSetting = () => {
            let themeSetting = localStorage.getItem("theme");
            if (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") {
                themeSetting = "system";
            }
            return themeSetting;
        };

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

        let applyInitialTheme = () => {
            let theme = determineComputedTheme();
            document.documentElement.setAttribute("data-theme", theme);
            if (theme === "dark") {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
        };

        applyInitialTheme();
    </script>
</head>
<body>
    <button id="light_toggle">Toggle Theme</button>
    <button id="theme_toggle" style="display:none;">Hidden Toggle</button>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('light_toggle').addEventListener('click', function() {
                document.getElementById('theme_toggle').click();
            });

            document.getElementById('theme_toggle').addEventListener('click', function() {
                switchTheme();
            });
        });

        function switchTheme() {
            var body = document.body;
            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            }
        }
    </script>
</body>
</html>
