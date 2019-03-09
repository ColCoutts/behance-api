export default function makeHtmlTemplate(artDatas) {
    const artData = artDatas.projects;
    artData.forEach(artData => {
        console.log(artData);
        const name = artData.name;
        console.log(name);
        const url = artData.url;
        const covers = artData.covers.original;
        const fields = artData.fields;
        const firstName = artData.owners.display_name;
        console.log(firstName);
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
                    <h5>Artist</h5>
                    `;
                })}
                <p>${firstName}</p>
                </li>
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