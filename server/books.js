/**
 * 服务端模块
 * Created by yinfx on 16年2月21日.
 */

/**
 * 服务端发布books集合
 */
Meteor.publish('Books', function () {
    return Books.find({});
});
