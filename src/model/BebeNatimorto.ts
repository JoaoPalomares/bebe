import { Bebe } from "./Bebe";

export class BebeNatimorto extends Bebe{
    private causa: string;

    public constructor(_nome: string, _id: number, _peso: number, _altura: number,  _causa: string){
        super(_nome, _id, _peso, _altura);
        this.causa = _causa;
    }

    public setCausa(_causa: string): void{
        this.causa = _causa;
    }

    public getCausa(){
        return this.causa;
    }
}