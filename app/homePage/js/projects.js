import { setState } from "./functions.js";

window.addEventListener('changeState', (e) => {
    if (e.detail() === '/projects') {
        const projectsContainers = document.getElementsByClassName('project');

        for (let n = 0; n < projectsContainers.length; n++) {
            const link = projectsContainers[n].getElementsByTagName('a')[1];

            link.addEventListener('click', (e) => {
                setState(e);
            });
        }
    }
});
