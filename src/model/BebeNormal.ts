import { Bebe } from "./Bebe";

export class BebeNormal extends Bebe{
    private vacinado: boolean;

    public constructor(_nome: string, _id: number, _peso: number, _altura: number,  _vacinado: boolean){
        super(_nome, _id, _peso, _altura);
        this.vacinado = _vacinado;
    }

    public setVacinado(_vacinado: boolean): void{
        this.vacinado = _vacinado;
    }

    public getVacinado(){
        return this.vacinado;
    }
}