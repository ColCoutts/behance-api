const test = QUnit.test;
import newData from '../data/new-data.js';

QUnit.module('test suite two');

export function captureId(newData) {
    console.log(newData.projects.length);
    for(let i = 0; i < newData.projects.length; i++){
        // console.log(newData.projects.owners);
        console.log(newData.projects[i].owners[129052].display_name);
        // let newArray = Object.keys(newData.projects[i].owners[129052]);
        let testArray = Object.values(newData.projects[0]);
        console.log(testArray);
        // console.log(newArray);
        // let newArray = [];
        let finalResult = newData.projects[i].owners[129052].display_name;
        return finalResult;

        
        // newArray.push(newData.projects[i].owners);
        // console.log(newArray);
       
        // return newArray;

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


