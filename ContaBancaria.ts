export default class ContaBancaria {
    // o 'this' usa para chamar algo dentro do atributo privado 
    //atributos
  private numeroConta: number
  private agencia: number
  private saldo :number
  private extrato: string []
  
  public constructor() {
    this.numeroConta = 0
    this.agencia = 0
    this.saldo = 0
    this.extrato = []
  }
  
  //métodos
    public depositar(valor: number) {
      if (valor > 0) {
        this.saldo += valor;
        this.extrato.push(`Depósito de R$ ${valor.toFixed(2)}`);
        return this.saldo
      } else {
        throw new Error('Valor inválido!') //criar novo erro
      }
    }
  
    public sacar (valor: number){
      if(valor <= this.saldo && valor > 0) {
        this.saldo -= valor;
        return this.saldo
      } else {
        throw new Error('Valor inválido!') //criar novo erro
      }
    }
  
  
  
  }
  