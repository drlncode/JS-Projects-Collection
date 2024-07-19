const currentAppTitle = document.querySelector('.current-page-content > .title');
const appContainer = document.querySelector('.app-content');
const btns = document.querySelectorAll('.nav-link');
const paths = {
    '/': '/home',
    '/projects': '/projects'
}

document.addEventListener('DOMContentLoaded', getStateContent);

for (let n = 0; n < btns.length; n++) {
    btns[n].addEventListener('click', setState);
}

function setState(e) {
    e.preventDefault();

    history.pushState(null, '', e.target.href);
    getStateContent();
}

async function getStateContent() {
    const path = paths[location.pathname];

    const content = await fetch(path, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => JSON.parse(data))
    .catch(err => console.error(err));

    renderContent(content);
}

function renderContent(content) {
    currentAppTitle.textContent = content.title;
    appContainer.innerHTML = content.body;
}
