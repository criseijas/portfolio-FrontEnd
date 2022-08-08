export class Experiencia {

    id?: number;
    empresaE: string;
    puestoE: string;
    anioE: string;
    tareasE: string;

    constructor(empresaE:string, puestoE:string, anioE:string, tareasE:string) {
        this.empresaE = empresaE;
        this.puestoE = puestoE;
        this.anioE = anioE;
        this.tareasE = tareasE;
    }
}
