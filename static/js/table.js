$(document).ready(function(){
    $('#dataTable').DataTable( {
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
        },
        "ajax": 'data/repo.json'
    } );
});