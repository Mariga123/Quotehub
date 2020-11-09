export class Quotes {
    public showDescription: boolean;
    like: number;
    dislike: number;
    constructor(public title: string, public description: string, public author: string, public completeDate: Date) {
        this.showDescription = false;
        this.like = 0;
        this.dislike = 0;
    }
}
