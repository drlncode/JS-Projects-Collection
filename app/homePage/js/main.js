const appContainer = document.querySelector('.app-content');
const btns = document.getElementsByTagName('a');
const paths = {
    '/': 'http://localhost:3000/home',
    '/projects': 'http://localhost:3000/projects'
}

document.addEventListener('DOMContentLoaded', getStateContent)

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
    .then(response => response.text())
    .then(data => data)
    .catch(err => console.error(err));
}