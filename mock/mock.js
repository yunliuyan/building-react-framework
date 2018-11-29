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
    data.books = {
        'data': [
            {
                'name': '《了不起的盖茨比》',
                'star': '五颗星'
            },
            {
                'name': '《人性的弱点》',
                'star': '四颗星'
            },
            {
                'name': '《诗经》',
                'star': '五颗星'
            }
        ]
    }
    return data;
}