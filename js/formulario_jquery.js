$.validator.addMethod("terminaEn",function(value,element,parametro){

    if(value.endsWith(parametro)){
        return true;
    }
        return false;

},"Debe terminar en {0}")
    

$("#formulario_contacto").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        email: {
            required: true,
            email: true,
            terminaEn: ".com"
        },
        tipo_solicitud: {
            required: true
        },
        mensaje: {
            required: true,
            minlength: 5,
            maxlength: 200
        }
    }

})




$("#guardar").click(function() {
    if($("#formulario_contacto").valid() == false) {
        return;
    }
    let nombre = $("#nombre").val()
    let email = $("#email").val()
    let tipo_solicitud = $("#tipo_solicitud").val()
    let mensaje = $("#mensaje").val()
    let avisos = $("#avisos").is(":checked")
}) 