/**
 * Created by LiuQingtao on 2017/12/27.
 */
var Article = require('../module/article');
var time = require('../util/time')

module.exports = {
    publishArticle: function (req, res) {
        var article = new Article({
            id: '',
            author: 'liuqingtao',
            title: req.body.title,
            create_time: time.getNowFormatDate(),
            content: req.body.content
        })
        console.log(article)
        article.save(function (err, response) {
            if (err) {
                console.log(err)
                res.end(JSON.stringify({
                    data: {},
                    error: 1,
                    message: '发布失败'
                }))
            } else {
                res.end(JSON.stringify({
                    data: {},
                    error: 0,
                    message: '发布成功'
                }))
            }
        })
    },
    articleList: function (req, res) {
        Article.find({}, {}, {}, function (error, result) {
            if (error) {
                return false;
            } else {
                res.render('article-list',
                    {
                        title: '发布文章',
                        data: {
                            article_list: result
                        }
                    }
                )
            }

        });
    },
    articleDetail: function (req, res) {
        var query = {id: req.param('id')};
        Article.find(query, {}, {}, function (error, result) {
            if (error) {
                return false;
            } else {
                res.render('article',
                    {
                        title: '文章详情页',
                        data: result[0]
                    }
                )
            }
        })
    }
}
