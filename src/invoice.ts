//to import Customer class from customer.ts
import Customer from "./customer"

//to create Invoice class and inherit Customer class
export default class Invoice extends Customer{
    ID: number
    customer: Customer
    amount: number

    constructor(ID:number,customer:Customer,amount:number){
        super(customer)
        this.ID = ID
        this.customer = customer
        this.amount = amount
    }

    //to return ID value
    getID():number{
        return this.ID
    }

    //to return customer class
    getCustomer():Customer{
        return this.customer
    }

    //to set customer class
    setCustomer(customer:Customer):void{
        this.customer = customer
    }

    //to return amount value as string
    getAmount():String{
        return this.amount.toString()
    }

    //to return amount value
    setAmount(amount:number):void{
        this.amount = amount
    }

    //to return customer name value from customer class 
    getCustomerName():String{
        return this.customer.getName()
    }

    //to return the difference of amount value and discount value(from customer class)
    getAmountAfterDiscount():number{
        return this.amount - this.customer.getDiscount()
    }
}