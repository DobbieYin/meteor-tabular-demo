/**
 * 客户端模块
 * Created by yinfx on 16年2月21日.
 */

Template.booksTable.onCreated(function () {
    this.autorun(() => {
        Meteor.subscribe('Books', function () {
            Session.set('booksSearch', Books.find({}).fetch());
        })
    });
});

/**
 * 表格模板的helpers定义
 */
Template.booksTable.helpers({
    books: function () {
        let result = Session.get('booksSearch');
        let books = result;
        //TODO 处理显示
        return books;
    }
});

/**
 * 表格模板的事件定义
 */
Template.booksTable.events({
    'click #form-add-action': function (e) {
        e.preventDefault();
        console.log('新增操作.....');
        let a1 = $('#form-a1').val();
        let a2 = $('#form-a2').val();
        console.log('a1=' + a1 + ',a2=' + a2);
        if (!a1 || !a2) return;
        Books.insert({a1: a1, a2: a2});
    }
});
//TODO 可优化复用A1、A2的模板
/**
 * A1列的单元格模板
 */
Template.bookA1Cell.helpers({
    /**
     * 是否匹配的函数，主要用于修改列的匹配样式：红色字体
     * @returns {*}
     */
    isMatch: function () {
        let keyword = $('#BooksTabularTable_filter>label>input').val();
        return keyword ? this.a1.match(new RegExp(keyword, 'g')) : false;
    },
    /**
     * 获取当前表格的值
     * @returns {*}
     */
    value: function () {
        return this.a1
    }
});
/**
 * A2列的单元格模板
 */
Template.bookA2Cell.helpers({
    /**
     * 是否匹配的函数，主要用于修改列的匹配样式：红色字体
     * @returns {*}
     */
    isMatch: function () {
        let keyword = $('#BooksTabularTable_filter>label>input').val();
        return keyword ? this.a2.match(new RegExp(keyword, 'g')) : false;
    },
    /**
     * 获取当前表格的值
     * @returns {*}
     */
    value: function () {
        return this.a2
    }
});