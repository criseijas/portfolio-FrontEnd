export class Contacto {

    id?: number;
    nombreC: string;
    apellidoC: string;
    emailC: string;
    tel: string;

    constructor(nombreC: string, apellidoC: string, emailC: string, tel: string) {

        this.nombreC = nombreC;
        this.apellidoC = apellidoC;
        this.emailC = emailC;
        this.tel = tel;
    }
}
