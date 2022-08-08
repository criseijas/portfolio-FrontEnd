export class Educacion {

    id?: number;
    institucionEdu: string;
    tituloEdu: string;
    infoEdu: string;

    constructor(institucionEdu: string, tituloEdu: string, infoEdu: string) {
        
        this.institucionEdu = institucionEdu;
        this.tituloEdu = tituloEdu;
        this.infoEdu = infoEdu; 
         
    }
    
}
