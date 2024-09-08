import { Stack } from "./Stack.js";

export class TextEditor {
    constructor() {
        this.undoStack = new Stack();
        this.redoStack = new Stack();
        this.txt = '';
    }

    write(newText) { 
        this.undoStack.push(this.txt);
        this.txt = newText;
        this.redoStack.clear();
    }

    undo() {
        if (!this.undoStack.isEmpty()) {
            this.redoStack.push(this.txt);
            this.txt = this.undoStack.pop();
        }
    }

    redo() {
        if (!this.redoStack.isEmpty()) {
            this.undoStack.push(this.txt);
            this.txt = this.redoStack.pop();
        }
    }

    clear() {
        this.txt = '';
        this.undoStack.clear();
        this.redoStack.clear();
    }

    getText() {
        return this.txt;
    }
}
