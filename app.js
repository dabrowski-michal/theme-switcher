const lightButton = document.getElementById('light');
const darkButton = document.getElementById('dark');
const spotiButton = document.getElementById('spoti');
const summerButton = document.getElementById('summer');

const body = document.body;
const header = document.getElementById("header");

const changeTheme = (themeClassName) =>{
    body.className = themeClassName;
};


lightButton.onclick = () => {
    changeTheme("light-theme");
}

darkButton.onclick = () => {
    changeTheme("dark-theme");
}

spotiButton.onclick = () => {
    changeTheme("spoti");
}

summerButton.onclick = () =>{
    changeTheme("summer");
}