function showAlert() {
    alert("This is an alert from JS Interop");
}

function createPrompt(question) {
    return prompt(question)
}

function setElementTextById(id, text) {
    document.getElementById(id).innerText = text;
}

function focusOnElement(element) {
    element.focus();
}