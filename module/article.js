/**
 * Created by LiuQingtao on 2017/12/27.
 */

var mongoose = require('./mongodb');
Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    id: {type: Number},
    author: {type: String},
    title: {type: String},
    create_time: {type: String},
    content: {type: String}
})

var schema = mongoose.model('article', ArticleSchema);

module.exports = schema;