export class Quotes {
    public showDescription: boolean;
    constructor(public title: string, public description: string, public author: string, public completeDate: Date) {
        this.showDescription = false;
    }
}
