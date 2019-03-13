const test = QUnit.test;
// import newData from '../data/new-data.js';

QUnit.module('test suite two');

export function objectToArray(object) {
    const keys = Object.keys(object);
    const key = keys.map(key => object[key]);
    console.log(key);
    key.forEach(key => {
        console.log(key.display_name);
        return key.display_name;
    });
    return key;

}


test('target ids which are 6 digit number, function(assert', assert => {
    //arrange
    const object = {
        '129052': {
            'id': 129052,
            'first_name': 'Jeremy',
            'last_name': 'Packer',
            'username': 'zombieyeti',
            'city': 'Elkhart',
            'state': 'Indiana',
            'country': 'United States',
            'company': 'Zombie Yeti Studios',
            'occupation': '',
            'created_on': 1256039356,
            'url': 'http://www.behance.net/zombieyeti',
            'display_name': 'Jeremy Packer',
            'images': {
                '32': 'http://behance.vo.llnwd.net/profiles3/129052/32x67de83ba6f6acad093832861dea34a66.jpg',
                '50': 'http://behance.vo.llnwd.net/profiles3/129052/50x67de83ba6f6acad093832861dea34a66.jpg',
                '78': 'http://behance.vo.llnwd.net/profiles3/129052/78x67de83ba6f6acad093832861dea34a66.jpg',
                '115': 'http://behance.vo.llnwd.net/profiles3/129052/115x67de83ba6f6acad093832861dea34a66.jpg',
                '129': 'http://behance.vo.llnwd.net/profiles3/129052/129x67de83ba6f6acad093832861dea34a66.jpg',
                '138': 'http://behance.vo.llnwd.net/profiles3/129052/67de83ba6f6acad093832861dea34a66.jpg'
            }
        },
        '55952': {
            'id': 55952,
            'first_name': 'Chris',
            'last_name': 'Thornley',
            'username': 'Raid71',
            'city': 'Darwen',
            'state': '',
            'country': 'United Kingdom',
            'company': 'RAID71',
            'occupation': 'Director',
            'created_on': 1197020084,
            'url': 'http://www.behance.net/Raid71',
            'display_name': 'Chris Thornley',
            'images': {
                '32': 'http://behance.vo.llnwd.net/profiles/55952/32xc61a6bc2f13226906bae138695ec3754.jpg',
                '50': 'http://behance.vo.llnwd.net/profiles/55952/50xc61a6bc2f13226906bae138695ec3754.jpg',
                '78': 'http://behance.vo.llnwd.net/profiles/55952/78xc61a6bc2f13226906bae138695ec3754.jpg',
                '115': 'http://behance.vo.llnwd.net/profiles/55952/115xc61a6bc2f13226906bae138695ec3754.jpg',
                '129': 'http://behance.vo.llnwd.net/profiles/55952/129xc61a6bc2f13226906bae138695ec3754.jpg',
                '138': 'http://behance.vo.llnwd.net/profiles/55952/c61a6bc2f13226906bae138695ec3754.jpg'
            }
        },

        '159576': {
            'id': 159576,
            'first_name': 'Mikael',
            'last_name': 'LugnegÃÂÃÂ¥rd',
            'username': 'MLugnegard',
            'city': 'Umea',
            'state': '',
            'country': 'Sweden',
            'company': 'Lugnegard Design',
            'occupation': 'Founder',
            'created_on': 1269448219,
            'url': 'http://www.behance.net/MLugnegard',
            'display_name': 'Mikael LugnegÃÂÃÂ¥rd',
            'images': {
                '32': 'http://behance.vo.llnwd.net/profiles4/159576/32x01595761269448249.jpg',
                '50': 'http://behance.vo.llnwd.net/profiles4/159576/50x01595761269448249.jpg',
                '78': 'http://behance.vo.llnwd.net/profiles4/159576/78x01595761269448249.jpg',
                '115': 'http://behance.vo.llnwd.net/profiles4/159576/115x01595761269448249.jpg',
                '129': 'http://behance.vo.llnwd.net/profiles4/159576/129x01595761269448249.jpg',
                '138': 'http://behance.vo.llnwd.net/profiles4/159576/01595761269448249.jpg'
            }
        }

    };

    //assert

    const expected = [object[55952], object[129052], object[159576]];

    const result = objectToArray(object);

    assert.deepEqual(result, expected);
});


