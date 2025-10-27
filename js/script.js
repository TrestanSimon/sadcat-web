$(document).ready(function(){
    new DataTable('#sadcat-table', {
        ajax: '/data/sadcat.json',
        layout: {
            topStart: {buttons: ['copy', 'csv'],},
        },
        info: false,
        ordering: false,
        paging: false,
        columnDefs: [
            {
                targets: '_all',
                className: 'dt-right',
            },
            {
                targets: [0,1,2],
                render: DataTable.render.datetime('YYYY-MM-DD hh:mm'),
            }
        ],
    });
});
