/*
- 인큐
- 디큐
*/

class Queue {
    constructor() {
        this.head = new List();
    }

    enqueue(value) {
        if (this.list.getHead() == null) {
            this.setHead(new Node(value));
        }
        else {
            let head = this.getHead();
            while (head.next != null) {
                head = head.next
            }
            head.setNext(new Node(value));
        }
    }

    dequeue() {
        const tmp = this.getHead();
        this.head = this.getHead().getNext();
        return tmp.getValue();
    }

    tail() {
        let head = this.getHead();
        while (head.getNext() != null) {
            head = head.getNext();
        }
        return head.getValue();
    }

    size() {
        let count = 0;
        let head = this.getHead();
        while (head != null) {
            head = head.getNext();
            count++;
        }
        return count;
    }

    isEmpty() {
        return this.size() == 0;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    setNext(node) {
        this.next = node;
    }

    getNext() {
        return this.next;
    }

    getValue() {
        return this.value;
    }
}

describe('Queue', () => {
    describe('Create queue', () => {
        it('returns empty queue', () => {
            const queue = new Queue();
            expect(queue.isEmpty()).toBe(true);
        });
    });

    describe('Enqueue', () => {
        it('increases size of Queue', () => {
            const queue = new Queue();

            const originSize = queue.size();

            queue.enqueue(1);

            expect(queue.size() - originSize).toBe(1);
        })
    });
});

describe('queue is', () => {
    test('not empty', () => {
        const queue = new Queue();
        expect(queue).not.toBeNull();
    })

    test('possible to enqueue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.tail()).toBe(1);
        expect(queue.size()).toBe(1);
        queue.enqueue(2);
        expect(queue.tail()).toBe(2);
        expect(queue.size()).toBe(2);
    })

    test('possible to dequeue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
        expect(queue.dequeue()).toBe(1);
        expect(queue.size()).toBe(0);

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.size()).toBe(4);
        expect(queue.dequeue()).toBe(1);
        expect(queue.size()).toBe(3);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.dequeue()).toBe(4);
        expect(queue.size()).toBe(0);
    })

    test('possible to get size', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.size()).toBe(1);

        queue.enqueue(2);
        expect(queue.size()).toBe(2);
    })
})

describe('Node can', () => {

    test('not be empty', () => {
        const node = new Node();
        expect(node).not.toBeNull();
        expect(node.getValue()).toBe(undefined);
    })


    test('have next', () => {
        const node = new Node(1);
        const newNode = new Node(2);

        node.setNext(newNode);

        expect(node.getNext().getValue()).toBe(2);
    })

})
