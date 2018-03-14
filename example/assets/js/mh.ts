class ML {

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
