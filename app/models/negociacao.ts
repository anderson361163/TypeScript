export class Negociacao{

    private readonly _data: Date;
    public readonly _quantidade: number;
    public readonly _valor: number;

    constructor(data: Date, quantidade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data() : Date{
        const data = new Date(this._data.getTime());
        return data; 
    }

    get quantidade() : number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        return this._quantidade * this._valor;
    }

}


/*

    set data(data: Date){
        this._data = data;
    }

    set quantidade(quantidade: number){
        this._quantidade = quantidade;
    }

    set valor(valor: number){
        this._valor = valor;
    }*/