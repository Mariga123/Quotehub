export class Quotes {
    showDescription: boolean;
    constructor(public title: string, public description: string, public author: string, public date: string) {
        this.showDescription = false;
    }
}
