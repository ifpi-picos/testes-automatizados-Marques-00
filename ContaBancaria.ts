export default class ContaBancaria {
  // o 'this' usa para chamar algo dentro do atributo privado 
  //atributos
  private numeroConta: number
  private agencia: number
  private saldo: number
  private extrato: string[]

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
      let descricao = `Depósito de R$ ${valor.toFixed(2)}`;
      this.registrarOperacao(descricao)
      return this.saldo
    } else {
      throw new Error('Valor inválido!') //criar novo erro
    }
  }

  public sacar(valor: number) {
    if (valor <= this.saldo && valor > 0) {
      this.saldo -= valor;
      let descricao = `Saque de R$ ${valor.toFixed(2)}`;
      this.registrarOperacao(descricao)
      return this.saldo
    } else {
      throw new Error('Valor inválido!') //criar novo erro
    }
  }

  //público é quando você faz, privado quando você não faz
  private receberTransferencia(valor: number, conta: ContaBancaria) {
    conta.saldo += valor
    let descricao = `Transferencia de ${valor} recebida`
    conta.registrarOperacao(descricao)}
    
    

  public transferir(valor: number, conta: ContaBancaria) {
    if (valor > 0 && valor <= this.saldo) {
      conta.receberTransferencia(valor, conta)
      this.saldo -= valor
      let descricao=`Transferencia de ${valor} recebida`
      this.registrarOperacao(descricao)
      return this.saldo
    } else {
      throw new Error("Valor inválido ou saldo de insuficiente")
    }
  }

  public consultarSaldo() {
    return this.saldo
  }

  public exibirExtrato() {
    let extratoString = ""
    this.extrato.forEach((operacao, index) => {
      extratoString += `${index + 1}. ${operacao}\n`
    })
    return extratoString.trim() //trim remove caracteres especial e espaços vazios
  }

  private registrarOperacao (descricao:string){
    this.extrato.push (descricao)
  }


}


