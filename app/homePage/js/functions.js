const appContainer = document.querySelector('.app-content');
const changeEvent = new CustomEvent('changeState', {
    detail: getState
});
const paths = {
    '/': '/home',
    '/projects': '/projects',
    '/project/01/': '/project/01/'
}

export function setState(e) {
    e.preventDefault();

    history.pushState(null, '', e.target.href);
    getStateContent();
}

export async function getStateContent() {
    if (paths[location.pathname]) {
        const path = paths[location.pathname];

        const content = await fetch(path, {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => JSON.parse(data))
        .catch(err => console.error(err));

        renderContent(content);
    }
}

export function renderContent(content) {
    document.title = content.title;
    appContainer.innerHTML = content.body;
    window.dispatchEvent(changeEvent);
}

export function getState() {
    return location.pathname;
}
