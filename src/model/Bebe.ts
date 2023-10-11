export abstract class Bebe {
    private nome: string;
    private id: number;
    private peso: number;
    private altura: number;

    public constructor(_nome: string, _id: number, _peso: number, _altura: number){
        this.nome = _nome;
        this.id = _id;
        this.peso = _peso;
        this.altura = _altura;
    }

    public setNome(_nome: string):void{
        this.nome = _nome;
    }

    public getNome(){
        return this.nome;
    }

    public setId(_id: number):void{
        this.id = _id;
    }

    public getId(): number{
        return this.id;
    }

    public setPeso(_peso: number): void{
        this.peso = _peso;
    }

    public getPeso(): number{
        return this.peso;
    }

    public setAltura(_altura: number): void{
        this.altura = _altura;
    }

    public getAltura(): number{
        return this.altura;
    }
}