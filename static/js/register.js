$(document).ready(function() {

    // $("#registerForm").validate({
    //     debug: true
    // });
      
    $("#idInput").focusout(function (event) {
        $.getJSON( './data/users.json', function(data) {
            let disponible = true;
            let idInput = $("#idInput").val();
            for (usuario in data['users']){
                if (data['users'][usuario]['matricula'] === idInput) {
                    disponible = false;
                    break;
                }
            }
            if (!disponible){
                $("#idFeedback").text("Usuario ya registrado").css("color", "red");;
            }
            else
                $("#idFeedback").text("");
        });
    });

    $("#btnRegistrar").click(function (event) {
        event.preventDefault();
        let form = document.getElementById("registerForm");
        if (form.checkValidity()) {    
            $.getJSON( './data/users.json', function(data) {
                console.log(data);
                let user = {
                    nombre: $("#nameInput").val(),
                    matricula: $("#idInput").val(),
                    correo: $("#emailInput").val(),
                    contrasenia: $("#passwdInput").val()
                };
                data.users.push(user);

                let mensaje = $("<div>");
                let boton = $("<button>");
                let x = $("<span>");
                boton.append(x);
                mensaje.append(boton);
                x.attr("aria-hidden", "true");
                x.text("&times;");   
                boton.addClass("close");
                boton.attr("data-dismiss", "alert");
                boton.attr("aria-label", "close");
                boton.attr("type", "button");
                mensaje.addClass("alert alert-success alert-dismissible");
                mensaje.attr("role", "alert");
                
                mensaje.text("Usuario registrado correctamente");
                $("#registerForm").prepend(mensaje);
                mensaje.hide();
                mensaje.fadeIn();

                let divprueba = $("<div>");
                divprueba.append(boton);
                $("#registerForm").append(divprueba);

                localStorage.setItem('/data/myStorage', JSON.stringify(data));
            });   
        } else {
            $("#failAlert").show();
        }
    });

    // $("#passwdConfirmInput").keyup(function (event) {
    //     if ($(this).val() !== $("#passwdInput").val()) {
    //         console.log("Diferente");
    //         $(this).parent().removeClass("has-success");
    //         $(this).parent().addClass("has-error");
    //     } else {
    //         console.log("Iguales");
    //         $(this).parent().removeClass("has-error");
    //         $(this).parent().addClass("has-success");
    //     }
    // });
});