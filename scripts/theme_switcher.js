
(() => {
    const _id = "attricss";
    const link = document.querySelector(`#${_id}`);
    const buildAttriCssLinkTag = (theme, link) => {
        let update = link != null;
        const link = link || document.createElement("link");

        if (theme === "dark") {
            link.href = "./styles/attricss/darkforest-green.css";
        } else {
            link.href = "./styles/attricss/brightlight-green.css"
        }

        if (!update) {
            link.id = _id;
            link.rel = "stylesheet";
            document.head.appendChild(link);
        }
    }
    
    const switchTheme = (event) => {
        if (event.matches) {
            // enable dark theme styling
            buildAttriCssLinkTag("dark", link);
        } else {
            buildAttriCssLinkTag("light", link);
        }
    }
    
    const startListening = () => {
        const mediaMatch = window.matchMedia("(prefers-color-scheme: dark)");
        mediaMatch.addEventListener(switchTheme);
    }

    startListening();
})();