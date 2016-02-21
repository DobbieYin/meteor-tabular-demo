/**
 * 公共模块
 * Created by yinfx on 16年2月21日.
 */
//创建集合
Books = new Mongo.Collection("books");
//规范模型
Books.attachSchema(new SimpleSchema({
    a1: {
        type: String,
        label: "A1",
        optional: true
    },
    a2: {
        type: String,
        label: "A2",
        optional: true
    }
}));
/**
 * 允许增删改的模型方法
 */
Books.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    }
});

/**
 * 初始化模型的tabular
 * @type {Tabular.Table}
 */
BooksTabular = new Tabular.Table({
    name: "Books",
    collection: Books,
    columns: [
        {data: "a1", title: "A1", tmpl: Meteor.isClient && Template.bookA1Cell},
        {data: "a2", title: "A2", tmpl: Meteor.isClient && Template.bookA2Cell}
    ]
});
/**
 * 注册全局helper：BooksTabular
 */
Meteor.isClient && Template.registerHelper('BooksTabular', BooksTabular);