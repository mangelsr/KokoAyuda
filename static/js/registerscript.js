$(document).ready(function() {
      
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

    $("#nameInput").focusout(function (event){
        mostrarError($("#nombreFeedback"), $(this));
    });


    $("#idInput").focusout(function (event){
        $.getJSON( './data/users.json', function(data) {
            let disponible = true;
            let idInput = $("#idInput").val();
            for (usuario in data['users']){
                if (data['users'][usuario]['matricula'] === idInput) {
                    disponible = false;
                    break;
                }
            }
            console.log(disponible);
            if (disponible)
                $("#idInput")[0].setCustomValidity("");
            else
                $("#idInput")[0].setCustomValidity("Usuario ya registrado.");
        });
        mostrarError($("#idFeedback"), $(this));
    });


    $("#emailInput").focusout(function (event){
        mostrarError($("#emailFeedback"), $(this));
    });

    $("#passwdInput").focusout(function (event){
        mostrarError($("#passwordFeedback"), $(this));
    });

    $("#passwdConfirmInput").focusout(function (event){
        if ($("#passwdInput").val() === $(this).val()) {
            $(this)[0].setCustomValidity("");
        } else {
            $(this)[0].setCustomValidity("Las contrasenas deben coincidir.");
        }
        mostrarError($("#passwdConfirmFeedback"), $(this));
    });

    function mostrarError(elemento, input){
        elemento.hide();
        elemento.text(input[0].validationMessage);
        elemento.fadeIn();
    }
});