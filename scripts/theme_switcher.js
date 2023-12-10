
(() => {
    const _id = "attricss";
    const buildAttriCssLinkTag = (theme) => {
        let link = document.querySelector(`#${_id}`);
        
        if (!link) {
            link = document.createElement("link");
            link.id = _id;
            link.rel = "stylesheet";
            document.head.appendChild(link);
        }
        

        if (theme === "dark") {
            link.href = "./styles/attricss/darkforest-green.css";
        } else {
            link.href = "./styles/attricss/brightlight-green.css"
        }
    }
    
    const switchTheme = (event) => {
        if (event.matches) {
            // enable dark theme styling
            buildAttriCssLinkTag("dark");
        } else {
            buildAttriCssLinkTag("light");
        }
    }
    
    const startListening = () => {
        const mediaMatch = window.matchMedia("(prefers-color-scheme: dark)");
        switchTheme(mediaMatch);
        mediaMatch.addEventListener("change", switchTheme);
    }

    startListening();
})();