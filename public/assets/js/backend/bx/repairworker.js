define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'bx/repairworker/index',
                    add_url: 'bx/repairworker/add',
                    //edit_url: 'bx/repairworker/edit',
                    del_url: 'bx/repairworker/del',
                    multi_url: 'bx/repairworker/multi',
                    table: 'repair_worker',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id'),visable:false,},
                        {field: 'name', title: __('姓名')},
                        {field: 'nickname', title: __('所属单位')},
                        {field: 'mobile', title: __('电话')},
                        {field: 'operate', title: __('操作'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate,
                            buttons: [
                                {name: 'workProgress',  classname: 'btn btn-xs btn-primary btn-success btn-workProgress  btn-dialog', icon: 'fa fa-list',title:'待维修订单', url: 'bx/Repairworker/workProgress', callback: function (data){}},      
                                {name: 'workResult',  classname: 'btn btn-xs btn-primary btn-info btn-workResult  btn-dialog', icon: 'fa fa-list-alt',title:'已完成订单', url: 'bx/Repairworker/workResult', callback: function (data){}},      
                            ],      
                        }
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        workprogress: function () {
            $('.btn-cancel').on('click',function () {
                Fast.api.close();
            });
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});