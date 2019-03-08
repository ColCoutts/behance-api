export default function makeHtmlTemplate(artData) {
    const html = /*html*/`
        <li>
        <h2>${artData.projects[0].name}</h2>
        <a href="${artData.projects[0].url}">
            <img src="${artData.projects[0].covers.original}">
        </a>

        <h4>Keywords</h4>
        <p>${artData.projects[0].fields[0]}, ${artData.projects[0].fields[1]}, ${artData.projects[0].fields[2]}</p>
        <h5>Artist</h5>
        <p>${artData.projects[0].owners[0].first_name} ${artData.projects[0].owners[0].last_name}</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;

}