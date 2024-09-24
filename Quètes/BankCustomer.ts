import assert from 'assert'

class BankCustomer{

    private name : string;
    private code : string;

    constructor(name:string,code:string){
        this.name = name;
        this.code = code;
    }

    public getName():string{
        return this.name;
    }

    public verifyPinInput(code:string):boolean{
        if(code === this.code){
            return true;
        }else{
            return false;
        }
    }
}

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));