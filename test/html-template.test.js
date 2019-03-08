const test = QUnit.test;

QUnit.module('make template literal for html image list');

export default function makeHtmlTemplate(artQuery) {
    const html = /*html*/`
        <li>
        <h2>Illustrations for packaging design</h2>
        <a href="https://www.behance.net/gallery/66573991/Illustrations-for-packaging-design">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/original/e3378b66573991.Y3JvcCwxMjAyLDk0MSwwLDE4MQ.jpg">
        </a>

        <h4>Keywords</h4>
        <p>Packaging Branding Illustration</p>
        <h5>Artist</h5>
        <p>Natalka Dmitrova</p>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;

}


test('time to write a test', function(assert) {
    //arrange
    const artQuery = {
        name: 'Illustrations for packaging design',
        url: 'https://www.behance.net/gallery/66573991/Illustrations-for-packaging-design',
        covers: 'https://mir-s3-cdn-cf.behance.net/projects/original/e3378b66573991.Y3JvcCwxMjAyLDk0MSwwLDE4MQ.jpg',
        fields: 'Packaging Branding Illustration',
        first_name: 'Natalka',
        last_name: 'Dmitrova',
        id: '66573991'
    };

    //act
    const result = makeHtmlTemplate(artQuery);
    const expected = /*html*/`
        <li>
        <h2>Illustrations for packaging design</h2>
        <a href="https://www.behance.net/gallery/66573991/Illustrations-for-packaging-design">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/original/e3378b66573991.Y3JvcCwxMjAyLDk0MSwwLDE4MQ.jpg">
        </a>

        <h4>Keywords</h4>
        <p>Packaging Branding Illustration</p>
        <h5>Artist</h5>
        <p>Natalka Dmitrova</p>
        </li>
    `;

    //assert
    assert.htmlEqual(result, expected);
});