class Queue {

    constructor() {

        this.arr = []
        this.size = 6

    }

    InsertElement(element) {

        if (this.arr.length < this.size) {

            this.arr.push(element)

        }
        else {

            console.log("Is overFlow");

        }
    }

    addElement(value, index) {

        for (let i = (this.arr.length - 1); i >= index; i--) {

            this.arr[i + 1] = this.arr[i]

        }

        this.arr[index] = value

        console.log(this.arr);
    }

    removeIndex(index) {

        for (let i = index; i < this.arr.length; i++) {

            this.arr[i] = this.arr[i + 1]

        }

        this.arr.length = this.arr.length - 1

    }

    print() {

        if (this.arr.length !== 0) {

            this.arr.map((val, index) => {

                console.log(val);

            })
        }
        else {

            console.log("underflow");

        }
    }
}


let s1 = new Queue()

s1.InsertElement(5)
s1.InsertElement(2)
s1.InsertElement(50)
s1.InsertElement(8)

s1.removeIndex(4)
s1.addElement(20)

s1.print()