/**
 * Created by LiuQingtao on 2017/12/21.
 */
var User = require('../module/user');

module.exports = {
    login: function (req, res) {
        var account = req.body;
        User.count(account, function (err, doc) {
            if(doc && !err){
                User.find({user:account.user},{},function (err, result) {
                    if (!err) {
                        console.log(result)
                        var timestamp = (new Date()).valueOf();
                        res.cookie('session_key', result[0].user);
                        res.end(JSON.stringify({
                            data: {
                                user_name: result[0].user
                            },
                            error: 0,
                            message: '登录成功'
                        }))
                    }else{
                        res.cookie('session_key', '');
                        res.end(JSON.stringify({
                            data: {},
                            error: 1,
                            message: '账号密码错误'
                        }))
                    }
                })
            }else {
                res.cookie('user', '');
                res.end(JSON.stringify({
                    data: {},
                    error: 1,
                    message: '您还没有注册，请前去注册'
                }))
            }

        })
    },
    register: function (req, res) {
        var user = new User({
            user: req.body.user,
            pwd: req.body.pwd
        })
        var response = res;
        user.save(function (err, res) {
            if(err){
                response.end(JSON.stringify({
                    data: {},
                    error: 1,
                    message: '注册失败'
                }))
            }else{
                response.end(JSON.stringify({
                    data: {},
                    error: 0,
                    message: '注册成功'
                }))
            }
        })

    },
    logout: function () {
        res.cookie('session_key', '');

    }

}