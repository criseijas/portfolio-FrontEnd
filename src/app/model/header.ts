export class Header {


    id?: number;
    urlP: string;
    urlLG: string;
    urlLI: string;
    urlLF: string;
    urlB: string;

    constructor(urlP: string, urlLG: string, urlLI: string, urlLF: string, urlB: string) {

        this.urlP = urlP;
        this.urlLG = urlLG;
        this.urlLI = urlLI;
        this.urlLF = urlLF;
        this.urlB = urlB;

    }

}
