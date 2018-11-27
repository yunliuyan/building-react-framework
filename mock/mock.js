let Mock = require('mockjs');
let  Random = Mock.Random;

// Mock.mock('/api/user',{
//     'name': '@cname',
//     'intro': '@word(20)'
// })
module.exports = function(){
    var data = {};
    data.user = {
        'name': Random.cname(),
        'intro': Random.word(20)
    };
    return data;
}