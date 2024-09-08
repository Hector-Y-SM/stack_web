import { TextEditor } from "./src/TextEditor.js";

const editor = new TextEditor();
const txtArea = document.getElementById('txt');
const btn_undo = document.getElementById('btn_undo');
const btn_redo = document.getElementById('btn_redo');
const btn_clear = document.getElementById('btn_clear');

const updateTxtArea = () =>{
    txtArea.value = editor.getText();
}

txtArea.addEventListener('input', () => {
    editor.write(txtArea.value);
});

btn_undo.addEventListener('click', () =>{
    editor.undo();
    updateTxtArea();
});

btn_redo.addEventListener('click', () =>{
    editor.redo();
    updateTxtArea();
});

btn_clear.addEventListener('click', () =>{
    editor.clear();
    updateTxtArea();
})