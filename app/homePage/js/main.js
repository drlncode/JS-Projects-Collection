import { setState, getStateContent, getState } from "./functions.js";

const btns = document.querySelectorAll('.state-link');

document.addEventListener('DOMContentLoaded', getStateContent);

for (let n = 0; n < btns.length; n++) {
    btns[n].addEventListener('click', setState);
}
