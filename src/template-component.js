


export default function makeHtmlTemplate(artDatas) {
    const artData = artDatas.projects;
    artData.forEach(artData => {
        console.log(artData);
        const name = artData.name;
        const url = artData.url;
        const covers = artData.covers[202];
        const fields = artData.fields;
        const displayName = artData;
        console.log(displayName);
        // const lastName = artData.owners.last_name;

        const html = /*html*/`
            <li>
            <h2>${name}</h2>
            <a href="${url}">
                <img src="${covers}">
            </a>
    
            <h4>Keywords</h4>
            ${fields.map(fields => {
                return /*html*/`
                    <p>${fields}</p>
                    `;
                })}
                ${displayName.map(displayName => {
                    return /*html*/`
                    <h5>Artist</h5>
                    <p>${displayName.display_name}</p>
                    </li>
                    `;
                })}
        `;         
        const imageList = document.getElementById('image-list');
        const template = document.createElement('template');
        template.innerHTML = html;
        const dom = template.content;
        imageList.appendChild(dom);
    });
}


// export function loadArtGallery(artArray){
//     artArray.forEach(artProject => {
//         const dom = makeHtmlTemplate(artProject);
//         imageList.appendChild(dom);
//     });
// }