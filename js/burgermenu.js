function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function setdrop1(checked) {
    var elm = document.getElementById('drop-1');
    if (checked != elm.checked) {
        elm.click();
    }
}

function setdrop2(checked) {
    var elm = document.getElementById('drop-2');
    if (checked != elm.checked) {
        elm.click();
    }
}

