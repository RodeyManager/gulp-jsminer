class Test {

    private name: string;
    private id: number = 0;

    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    public say(message: string){
        console.log(this.name + ' say "' + (message || '') + '"');
    }

}

const test = new Test('GULP-JSMINER', 2);
console.log(test.say('Hello '));
