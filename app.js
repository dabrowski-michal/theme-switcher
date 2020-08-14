const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const logo = document.getElementById('logo');
const body = document.body;

const themes = ['light','dark', 'summer', 'spoti']

const changeTheme = () => {

}


darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    logo.src = "./logos/logo-dark.svg";
}

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    logo.src = "./logos/logo-light.svg";
}