$(document).ready(function(){
    $('#dataTable').DataTable( {
        "responsive": true,
        "language": {"url": "https://cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"},
        "ajax": 'data/repo.json',
        "columns": [
            { "data": "Facultad" },
            { "data": "Materia" },
            { "data": "Recurso",
              "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<a href='data/files/" + oData.Facultad + "/" + oData.Materia + "/" + oData.Recurso + ".pdf' download>" + oData.Recurso + "</a>");
                }
            },
            { "data": "Autor" }
        ]
    });
});