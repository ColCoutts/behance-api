const test = QUnit.test;
import projects from '../data/behance-data.js';

QUnit.module('make template literal for html image list');

export default function makeHtmlTemplate(artData) {
    const html = /*html*/`
        <li>
        <h2>${artData.project.name}</h2>
        <a href=${artData.project.url}>
        console.log('hi');
            <img src="${artData.project.covers}">
        </a>

        <h4>Keywords</h4>
        <p>Advertising, Photography, Visual Effects</p>
        <h5>Artist</h5>
        <p>Tim Tadder</p>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;

}


test('create template structure', function(assert) {
    //arrange
    const artData = projects;
    
    //act
    const result = makeHtmlTemplate(artData);
    const expected = /*html*/`
        <li>
        <h2>Water Wigs</h2>
        <a href="http://www.behance.net/gallery/Water-Wigs/4889175">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/original/e3378b66573991.Y3JvcCwxMjAyLDk0MSwwLDE4MQ.jpg">
        </a>

        <h4>Keywords</h4>
        <p>Advertising, Photography, Visual Effects</p>
        <h5>Artist</h5>
        <p>Tim Tadder</p>
        </li>
    `;

    //assert
    assert.htmlEqual(result, expected);
});


test('pass in template literal holders', function(assert) {
    //arrange
    const artData = projects;
    
    //act
    const result = makeHtmlTemplate(artData);
    const expected = /*html*/`
        <li>
        <h2>Water Wigs</h2>
        <a href="http://www.behance.net/gallery/Water-Wigs/4889175">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/original/e3378b66573991.Y3JvcCwxMjAyLDk0MSwwLDE4MQ.jpg">
        </a>

        <h4>Keywords</h4>
        <p>Advertising, Photography, Visual Effects</p>
        <h5>Artist</h5>
        <p>Tim Tadder</p>
        </li>
    `;

    //assert
    assert.htmlEqual(result, expected);
});
