class Queue {

    constructor() {
        this.items = [];
    }

    enterqueue(element) {
        this.items.push(element);
    }

    deletequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

}


let queue = new Queue();

console.log(queue.deletequeue());
console.log(queue.isEmpty());
queue.enterqueue(1);
queue.enterqueue(2);
queue.enterqueue(3);
queue.enterqueue(4);
queue.enterqueue(5);
queue.enterqueue(6);
console.log(queue.printQueue());
console.log(queue.front());
console.log(queue.deletequeue());
console.log(queue.printQueue());
console.log(queue.deletequeue());
console.log(queue.printQueue());