export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
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
