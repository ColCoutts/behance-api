
export default function makeHtmlTemplate(artDatas) {
    const artData = artDatas.projects;
    const keys = Object.keys(artData);
    const arrayOfObjects = keys.map(key => artData[key]);
    console.log(arrayOfObjects.covers);
 

    for(let i = 0; i < arrayOfObjects.length; i++){
        const userInfo = Object.entries(arrayOfObjects[i].owners);
        const usableData = userInfo[0][1];
        const displayName = usableData.display_name;
        const url = usableData.url;
        const fields = usableData.fields;
        const images = arrayOfObjects[i].covers.original;
        // console.log(images);
        
        const html = /*html*/`
        <li>
        <h2>${name}</h2>
        <a href="${url}">
        <img src="${images}">
        </a>
        
        <h4>Keywords</h4>
        ${fields.map(fields => {
            return /*html*/`
            <p>${fields}</p>
            `;
        })}
        <h5>Artist</h5>
        <p>${displayName}</p>
        </li>
    `;         
        const imageList = document.getElementById('image-list');
        const template = document.createElement('template');
        template.innerHTML = html;
        const dom = template.content;
        imageList.appendChild(dom);
    }
}   


// export function loadArtGallery(artArray){
//     artArray.forEach(artProject => {
//         const dom = makeHtmlTemplate(artProject);
//         imageList.appendChild(dom);
//     });
// }

       // return userInfo[0][1];
    // const keys = Object.entries(artData);
    // const array = Object.entries(key[0].owners);
    // console.log(array[0][1]);