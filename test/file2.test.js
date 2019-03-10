const test = QUnit.test;
import newData from '../data/new-data.js';

QUnit.module('test suite two');

export function captureId(newData) {
    console.log(newData.projects.length);
    for(let i = 0; i < newData.projects.length; i++){
        
        let newArray = Object.keys(newData.projects[i].owners);
        return newArray;

    }


    // console.log(Object.keys(properties[0]));

}


test('target ids which are 6 digit number, function(assert', assert => {
    //arrange

    //assert


    const expected = ['55952','129052', '159576'];

    const result = captureId(newData);

    assert.deepEqual(result, expected);
});


