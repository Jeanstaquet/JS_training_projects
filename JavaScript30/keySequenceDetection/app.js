const pressed = [];
const secretCode = "matilde";

window.addEventListener("keydown", (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    console.log(pressed);
    
    if (pressed.join("").toLowerCase().includes(secretCode)) {
        cornify_add();
    }
});

