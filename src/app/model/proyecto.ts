export class Proyecto {

    public id: number;
    public nombreP: string;
    public descripcionP: string;
    public img: string;
    public repo: string;

    constructor(nombreP: string, descripcionP: string, img: string, repo: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.img = img;
        this.repo = repo;
    }

}
