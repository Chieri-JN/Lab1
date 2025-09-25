console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)
if (currentLink) { // or if (currentLink !== undefined)
    currentLink.classList.add("current");
}
// or
// currentLink?.classList.add("current");

// let pages = [
//     {url: "", title: "Home"},
//     {url: "projects/", title: "Projects"},
//     {url: "contact/", title: "Contact"},
//     {url: "photography/", title: "Photography"},
// ];
//
// let nav = document.createElement("nav");
// document.body.prepend(nav);
//
// const ARE_WE_HOME = document.documentElement.classList.contains("Home");
//
//
// for (let p of pages) {
//     let url = p.url;
//     let title = p.title;
//     if (!ARE_WE_HOME && !url.startsWith("http")) {
//         url = "../" + url;
//     }
//     // Create link and add it to nav
//     // nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
//     let a = document.createElement("a");
//     a.href = url;
//     a.textContent = title;
//     nav.append(a);
//
//     if (a.host === location.host && a.pathname === location.pathname) {
//         a.classList.add("current");
//     }
//     a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);
//
// }

$$('nav').forEach(n => n.remove());

const ARE_WE_HOME = document.documentElement.classList.contains('home');

const pages = [
    { url: '', title: 'Home' },
    { url: 'projects/', title: 'Projects' },
    { url: 'contact/', title: 'Contact' },
    { url: 'photography/', title: 'Photography' },
    { url: 'https://github.com/Chieri-JN', title: 'GitHub' },
    { url: 'https://drive.google.com/file/d/1GXt8NmCjheccrPx1D7HaUZamUhs0K3zx/view?usp=sharing', title: 'Resume' }
];

const nav = document.createElement('nav');
nav.className = 'nav-bar';
const ul = document.createElement('ul');
nav.append(ul);

document.body.prepend(nav);

for (const p of pages) {
    let url = p.url;
    const title = p.title;

    if (!ARE_WE_HOME && !url.startsWith('http')) {
        url = '../' + url;
    }

    const li = document.createElement('li');
    li.className = 'crumb';

    const a = document.createElement('a');
    a.href = url;
    a.textContent = title;

    if (a.host !== location.host) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
    }

    a.classList.toggle('current', a.host === location.host && a.pathname === location.pathname);

    li.append(a);
    ul.append(li);
}

document.body.insertAdjacentHTML("afterbegin", `
    <label class="color-scheme">
        Theme:
        <select id="color-scheme">
            <option value="light dark">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </label>
`);

const colorSchemeSelect = document.querySelector('#color-scheme');
colorSchemeSelect.addEventListener("input", function (event) {
    // console.log("color scheme changed to", event.target.value);
    document.documentElement.style.setProperty("color-scheme", event.target.value);

});









