import Customer from "./customer"
import Invoice from "./invoice"
import Account from "./account"
import CusConfig from "./cusConfig"

document.getElementById("submit")?.addEventListener('click',()=>{

    var [ID,name,discount] = [ parseInt((<HTMLInputElement>document.getElementById("id")).value),
                            (<HTMLInputElement>document.getElementById("name")).value , 
                            parseInt((<HTMLInputElement>document.getElementById("discount")).value) 
                        ]

    var cus1:CusConfig = {
        ID,
        name,
        discount
    } 

    var amount = parseInt((<HTMLInputElement>document.getElementById("amount")).value)
    var deposit = parseInt((<HTMLInputElement>document.getElementById("deposit")).value)
    var withdraw = parseInt((<HTMLInputElement>document.getElementById("withdraw")).value)

    var customer1 = new Customer(cus1)
    var invoice1 = new Invoice(ID,customer1,amount)
    var account1 = new Account(ID,customer1)

    var op:string = `Amount after Discount: ${invoice1.getAmountAfterDiscount()}` 

    account1 = account1.deposit(deposit)
    op = op + `\nBalance after deposit: ${account1.toString()}` 

    account1 = account1.withdraw(withdraw)
    op = op + `\nBalance after withdraw: ${account1.toString()}`                                  

    alert(op)
})

