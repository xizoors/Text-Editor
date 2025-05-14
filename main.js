const input = document.getElementById('input');
let fonts = false;

function bold() {
    input.style.fontWeight = '600';
}

function small() {
    input.style.fontWeight = 'normal';
}

function italic() {
    input.style.fontStyle = 'italic'
}

function Notitalic() {
    input.style.fontStyle = 'normal'
}

function font() {
    if(fonts) {
        input.style.fontFamily = 'sans-serif'
    }else {
        input.style.fontFamily = 'serif'
    }
    fonts = !fonts;
}