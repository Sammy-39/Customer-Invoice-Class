//to import Customer class from customer.ts
import Customer from "./customer"

export default class Account extends Customer{
    id: number
    customer: Customer
    balance: number = 0.0

    constructor(id:number,customer:Customer,balance?:number){
        super(customer)
        this.id = id
        this.customer = customer
        if(typeof(balance)!=='undefined') { this.balance = balance }
    }

    //to return ID value
    getID():number{
        return this.id
    }

    //to return customer class value
    getCustomer():Customer{
        return this.customer
    }

    //to get balance value
    getBalance():number{
        return this.balance
    }

    //to set balance value
    setBalance(balance:number):void{
        this.balance = balance
    }

    //to return customer name(ID) and balance as string
    toString():String{
        return `${this.customer.toString()} balance= $${this.balance.toFixed(2)}`
    }

    //to return customer name from customer class
    getCustomerName():String{
        return this.customer.getName()
    }

    //to set balance value and return the class Account
    deposit(amount:number):Account{
        this.setBalance(amount)
        return this
    }

    //to set balance value after subtracting from the passed amount value and return the class Account
    withdraw(amount:number):Account{
        if(this.balance >= amount){
            this.balance = this.getBalance() - amount
        }
        else{
            console.log("amount withdrawn exceeds the current balance!")
        }
        return this
    }
}