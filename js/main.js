// Script is targeted towards Android 4 browser

function showContent() {
    document.getElementById("test").style.display = 'block'
}

function showConsole(msg) {
    var consl = document.getElementById("console")
    consl.innerHTML = console + '<br>' + msg
}

showConsole(stuff)