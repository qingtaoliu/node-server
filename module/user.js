/**
 * Created by LiuQingtao on 2017/12/22.
 */
var mongoose = require('./mongodb');
Schema = mongoose.Schema;

var UserSchema = new Schema({
    user: {type: String},
    pwd: {type: String}
})


module.exports = mongoose.model('User',UserSchema);