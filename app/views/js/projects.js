import { setState } from "./functions.js";
const projectsPaths = [
    '/project/01/'
]
const scripts = {
    '01': './index.js'
}
const styles = {
    '01': './styles.css'
}

window.addEventListener('changeState', (e) => {
    if (e.detail() === '/projects') {
        const projectsContainers = document.getElementsByClassName('project');

        for (let n = 0; n < projectsContainers.length; n++) {
            const link = projectsContainers[n].getElementsByTagName('a')[1];

            link.addEventListener('click', (e) => {
                setState(e);
            });
        }
    } else if (projectsPaths.includes(e.detail())) {
        const projectId = e.detail().split('/')[2];
        const scriptsKeys = Object.keys(scripts);
        const stylesKeys = Object.keys(styles);

        stylesKeys.map(id => {
            if (id === projectId && !document.getElementById(`style${projectId}`)) {
                const stylesFile = document.createElement('link');

                stylesFile.id = `style${projectId}`;
                stylesFile.rel = 'stylesheet';
                stylesFile.href = styles[projectId];
                
                document.head.appendChild(stylesFile);
            }
        });
        
        scriptsKeys.map(id => {
            if (id === projectId && !document.getElementById(`script${projectId}`)) {
                const scriptFile = document.createElement('script');

                scriptFile.id = `script${projectId}`;
                scriptFile.src = scripts[projectId];

                document.body.appendChild(scriptFile);
            }
        });
    }
});
