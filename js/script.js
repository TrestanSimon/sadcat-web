$(document).ready(function(){
    new DataTable('#sadcat-table', {
        ajax: '/sadcat-web/data/sadcat.json',
        // ajax: '/data/sadcat.json',
        layout: {
            topStart: {buttons: [
                {
                    extend: 'collection',
                    text: 'Export',
                    buttons: ['copy', 'csv']
                },
                'colvis'
            ],},
        },
        info: true,
        ordering: true,
        paging: false,
        columnDefs: [
            {
                targets: '_all',
                className: 'dt-right',
            },
            {
                targets: [1, 2, 3],
                render: DataTable.render.datetime('YYYY-MM-DD HH:mm'),
            },
            {
                targets: 6,
                render: function (data, type) {
                    if (type === 'sort' || type === 'type') {
                        return data
                    } else {
                        prefix = parseInt(data[6])
                        suffix = data.slice(0, 3)
                        if (prefix == 6) {
                            return 'C' + suffix
                        } else if (prefix == 5) {
                            return 'M' + suffix
                        } else if (prefix == 4) {
                            return 'X' + suffix
                        } else if (prefix == 3) {
                            return 'X' + data[0] + data[2]
                        } else { return data }
                    }
                }
            },
            {
                targets: 12,
                render: function (data, type) {
                    if (type === 'sort' || type === 'type') {
                        if (data == 'N/A') {
                            return 0
                        } else { return data }
                    } else { return data }
                }
            },
            {
                targets: 18,
                render: function (data, type) {
                    if (type === 'display') {
                        return '<a href=' + data + '><i class="fa fa-external-link"></i></a>'
                    } else { return data }
                }
            },
            {
                targets: [14, 15, 16, 17],
                visible: false,
            }
        ],
    });
});
