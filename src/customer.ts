//to import CusConfig interface from cusConfig.ts
import CusConfig from './cusConfig'

//to create customer class
export default class Customer{
    ID: number
    name: String
    discount: number

    constructor(custData:CusConfig){
        this.ID = custData.ID
        this.name = custData.name
        this.discount = custData.discount
    }

    //to return ID value
    getID():number{
        return this.ID
    }

    //to return name value
    getName():String{
        return this.name
    }

    //to get discount value
    getDiscount():number{
        return this.discount
    }

    //to set discount value
    setDiscount(discount:number):void{
        this.discount = discount
    }

    //to return name ID value as string
    toString():String{
        return `Name(ID): ${this.name}(${this.ID})`
    }
}