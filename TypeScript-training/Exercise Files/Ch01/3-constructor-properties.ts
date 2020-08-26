export class Message {
    title: string;
    message: string;
    isSent: boolean;

    constructor(title: string,messege:string){
        this.title = title;
        this.message = messege;
        this.isSent = false;
    }
}

const message = new Message('hello','world');