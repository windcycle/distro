var spamMessage = prompt("Ketik pesanmu sekarang!","");
var spamCounter= parseInt(prompt("Berapa banyak jumlah pesan ?",100));
window.InputEvent = window.Event || window.InputEvent;
var spamEvent = new InputEvent("input", {bubbles:true});
var textbox = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];
for(let spam = 0;spam<spamCounter;spam++){
    textbox.innerHTML = spamMessage;
    textbox.dispatchEvent(spamEvent);
    document.getElementsByClassName("_4sWnG")[0].click();
} 
// Created by:L.Adrian
