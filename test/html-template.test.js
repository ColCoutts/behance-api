import behanceData from '../data/behance-data.js';
import makeHtmlTemplate from '../src/template-component.js';
const test = QUnit.test;

QUnit.module('make template literal for html image list');

test('create template structure', function(assert) {
    //arrange
    const artData = behanceData;

    //act
    const result = makeHtmlTemplate(artData);
    const expected = /*html*/`
        <li>
        <h2>Illustrations for packaging design.</h2>
        <a href="https://www.behance.net/gallery/66573991/Illustrations-for-packaging-design">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/original/e3378b66573991.Y3JvcCwxMjAyLDk0MSwwLDE4MQ.jpg">
        </a>

        <h4>Keywords</h4>
        <p>Packaging, Branding, Illustration</p>
        <h5>Artist</h5>
        <p>Natalka Dmitrova</p>
        </li>
    `;

    //assert
    assert.htmlEqual(result, expected);
});


test('pass in template literal holders', function(assert) {
    //arrange
    const artData = behanceData;
    console.log(artData.projects[0].covers.original);
    //act
    const result = makeHtmlTemplate(artData);
    const expected = /*html*/`
        <li>
        <h2>Illustrations for packaging design.</h2>
        <a href="https://www.behance.net/gallery/66573991/Illustrations-for-packaging-design">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/original/e3378b66573991.Y3JvcCwxMjAyLDk0MSwwLDE4MQ.jpg">
        </a>

        <h4>Keywords</h4>
        <p>Packaging, Branding, Illustration</p>
        <h5>Artist</h5>
        <p>Natalka Dmitrova</p>
        </li>
    `;

    //assert
    assert.htmlEqual(result, expected);
});
