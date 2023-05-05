const item = document.getElementById('switch');
const mql = window.matchMedia(`(prefers-color-scheme: dark)`);
const titleInput = document.querySelector('input[name=title]')
const slugInput = document.querySelector('input[name=slug]')

const slugify = (val)=>{
  return val.toString().trim()
    .replace(/&/g,'-and-')    //replace & with -and-
    .replace(/[\s\W-]+/g,'-')
};

titleInput.addEventListener('keyup',(e)=>{
  slugInput.setAttribute('value',slugify(titleInput.value));
});




function changeTheme(theme) {
  if (theme === 'theme-dark') {
    document.documentElement.className = 'theme-light';
    item.innerHTML = '<svg id="Layer_1" enable-background="new 0 0 496 496" height="20" viewBox="0 0 496 496" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000"><path d="m480 264h-24c-8.837 0-16-7.164-16-16s7.163-16 16-16h24c8.837 0 16 7.164 16 16s-7.163 16-16 16z"/><path d="m248 56c-8.837 0-16-7.164-16-16v-24c0-8.836 7.163-16 16-16s16 7.164 16 16v24c0 8.836-7.163 16-16 16z"/><path d="m383.563 112.24c-6.246-6.25-6.243-16.381.007-22.627l17.07-17.06c6.251-6.247 16.381-6.244 22.628.006 6.246 6.25 6.243 16.381-.007 22.627l-17.07 17.06c-6.249 6.245-16.379 6.248-22.628-.006z"/><path d="m100.77 117.08c-4.094 0-8.187-1.561-11.311-4.683l-17.069-17.06c-6.25-6.247-6.253-16.377-.006-22.627 6.246-6.25 16.377-6.253 22.627-.006l17.069 17.06c10.118 10.112 2.812 27.316-11.31 27.316z"/><path d="m40 265h-24c-8.837 0-16-7.164-16-16s7.163-16 16-16h24c8.837 0 16 7.164 16 16s-7.163 16-16 16z"/><path d="m400.989 424.027-17.069-17.06c-6.25-6.247-6.253-16.377-.006-22.627 6.246-6.25 16.377-6.253 22.627-.006l17.069 17.06c6.25 6.247 6.253 16.377.006 22.627-6.244 6.248-16.375 6.254-22.627.006z"/><path d="m248 496c-8.837 0-16-7.164-16-16v-24c0-8.836 7.163-16 16-16s16 7.164 16 16v24c0 8.836-7.163 16-16 16z"/><path d="m72.254 423.88c-6.247-6.25-6.244-16.381.006-22.627l17.069-17.06c6.249-6.247 16.38-6.245 22.627.006 6.247 6.25 6.244 16.381-.006 22.627l-17.069 17.06c-6.248 6.245-16.38 6.247-22.627-.006z"/></g><circle cx="248.5" cy="248.505" fill="#000" r="155.5"/><path d="m361.645 258.983c-25.264-63.124-84.001-109.009-151.953-117.357-23.844-2.929-26.222-36.489-3.08-42.934 99.519-27.718 198.863 48.313 197.366 152.421-.346 24.062-33.392 30.213-42.333 7.87z" fill="#000"/></svg>'
  } else {
    document.documentElement.className = 'theme-dark';
    item.innerHTML = '<svg id="Layer_1" enable-background="new 0 0 464 464" height="20" viewBox="0 0 464 464" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m446.532 347.132c-40.357 70.474-116.628 117.739-203.856 116.856-128.059-1.297-230.043-104.785-229.565-232.85.51-136.706 118.97-244.465 257.151-229.8 24.275 2.576 36.859 29.915 23.385 50.27-67.788 102.404 2.024 241.836 126.228 246.888 24.32.989 38.753 27.514 26.657 48.636z" fill="#ffe773"/><path d="m446.362 345.581c-3.776 6.587-11.095 10.358-18.657 9.676-162.749-14.683-262.101-197.835-178.197-343.895 3.84-6.685 11.274-10.475 18.947-9.73 1.013.098 2.023.203 3.032.315 23.682 2.645 35.745 29.446 22.475 49.23-70.148 104.429 4.934 243.898 125.95 247.359 23.592.902 38.253 26.453 26.45 47.045z" fill="#ffec8f"/></svg>';
  }
}

changeTheme(mql.matches ? 'theme-light' : 'theme-dark');

item.addEventListener('click', () => {
  item.innerHTML = '';
  if (document.documentElement.className === 'theme-light') {
    changeTheme('theme-light')
  } else {
    changeTheme('theme-dark')
  }
})


