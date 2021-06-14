import * as wasm from "wasm-internals";

let sentenceInput = document.getElementById("sentence-input");
let sentenceSubmit = document.getElementById("sentence-submit");
let sentenceOutput = document.getElementById("sentence-output");

/**
 * Generates a html string of formatted object.
 * 
 * @param {Object} result the result
 * 
 * @returns {string} the html string
 */
function formatObj(result) {
    let s = "";
    for(let i in result) {
        s += `<p>${i}: ${result[i]}</p>`;
    }

    return s;
}

sentenceSubmit.addEventListener("click", (e) => {
    let sentence = sentenceInput.value;
    let result = wasm.sentence_mode(sentence);

    sentenceOutput.innerHTML = formatObj(result);
});