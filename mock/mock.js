let Mock = require('mockjs');
let  Random = Mock.Random;

 Mock.mock('/api/user',{
    'name': '@cname',
    'intro': '@word(20)'
});
Mock.mock('/api/books',{
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
});
Mock.mock('/api/login','post',function(options){
    options.body = JSON.parse(options.body);
    if(options.body.userName =='云流烟' && options.body.password === '123123'){
        return  {message: '登录成功',code: 0, token:'云流烟123123'}
    }else{
        return {message: '登录失败',code: 1}
    }
    
});
Mock.mock('api/check/token', 'post', function(options){
    if(options.body.token === '云流烟123123'){
        return  {message: '验证成功',code: true,token:'云流烟123123'}
    }else{
        return {message: '验证失败',code: false,token:'云流烟123123'}
    }
})
module.exports = Mock;
// module.exports = function(){
//     var data = {};
//     data.user = {
//         'name': Random.cname(),
//         'intro': Random.word(20)
//     };
//     data.books = {
//         'data': [
//             {
//                 'name': '《了不起的盖茨比》',
//                 'star': '五颗星'
//             },
//             {
//                 'name': '《人性的弱点》',
//                 'star': '四颗星'
//             },
//             {
//                 'name': '《诗经》',
//                 'star': '五颗星'
//             }
//         ]
//     };
//     data.login = {
//         'userName': '云流烟',
//         'password': '123123',
//     }
//     return data;
// }