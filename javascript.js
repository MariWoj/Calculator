function number(val) {
    document.getElementById("display").value = val;
}

function math(val) {
    document.getElementById("display").value += val;
}

function result() {
    try {
        number(eval(document.getElementById("display").value))
    }

    catch (e) {
        number('Błąd')
    }
}