export default function makeHtmlTemplate(artData) {

    for(let i = 0; i < artData.projects.length; i++){

        const html = /*html*/`
            <li>
            <h2>${artData.projects[i].name}</h2>
            <a href="${artData.projects[i].url}">
                <img src="${artData.projects[i].covers.original}">
            </a>
    
            <h4>Keywords</h4>
            <p>${artData.projects[i].fields[i]}, ${artData.projects[i].fields[i + 1]}, ${artData.projects[i].fields[i + 2]}</p>
            <h5>Artist</h5>
            <p>${artData.projects[i].owners[i].first_name} ${artData.projects[i].owners[i].last_name}</p>
            </li>
        `;

        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content;
    }

}

const imageList = document.getElementById('image-list');

export function loadArtGallery(artArray){
    artArray.forEach(artProject => {
        const dom = makeHtmlTemplate(artProject);
        imageList.appendChild(dom);
    });
}