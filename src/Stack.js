class Nodo{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

export class Stack{
    constructor(){
        this.top = null;
        this.length = 0;
    }

    push(value){
        const nodo = new Nodo(value);
        nodo.next = this.top;
        this.top = nodo;
        this.length++;
    }

    pop() {
        if (this.top === null) return null; 
        const nodoDelete = this.top;
        this.top = this.top.next; 
        this.length--;
        return nodoDelete.value; 
    }

    peek(){
        if(this.top != null){
            return this.top.value;
        }
    }

    isEmpty(){
        return this.length == 0;
    }

    size(){
        return this.length;
    }

    clear(){
        this.top = null;
        this.length = 0;
    }
}