$(document).ready(function () {
    $("#calcular").click(function () {
        let n1 = parseFloat($("#n1").val());
        let n2 = parseFloat($("#n2").val());
        let operacao = $("input[name='operacao']:checked").val();
        let resultado = calcular(n1, n2, operacao);

        $("#resultado").html("Resultado: " + resultado);
    });
});

function limpar() {
    $("#n1").val("");
    $("#n1").focus();
    $("#n2").val("");
    $("input[name='operacao']").prop("checked", false);
    $("#resultado").html("Resultado: ");
}

function calcular(n1, n2, operacao) {
    let resultado = 0;

    if (operacao == "soma") {
        resultado = n1 + n2;
    } else if (operacao == "sub") {
        resultado = n1 - n2;
    } else if (operacao == "mult") {
        resultado = n1 * n2;
    } else if (operacao == "div") {
        resultado = n1 / n2;
    }

    switch (operacao) {
        case "soma":
            resultado = n1 + n2;
            break;
        case "sub":
            resultado = n1 - n2;
            break;
        case "mult":
            resultado = n1 * n2;
            break;
        case "div":
            resultado = n1 / n2;
            break;
    }

    return resultado;

}
