/*var x = {
    prop: 35,
    f: function() {
        return this.prop;
    },
    a: () => {
        return x.prop;
    }
}

const y = Object.create(x);

y.b = 3;


let ObjetoChido = {
    a: 3,
    b: 5,
    c: 7,
}

ObjetoChido.d = 15;
x.newProp = {};
x.newProp.a = 23;
x.newProp.b = {};
x.newProp.b.a = 21;
x.arrfunc = () => console.log("Hi!");
x.func = function(){
    console.log("Hi Normal!");
};
delete x.newProp;
x.arrfunc();
x.func();
*/

var x = {
    valor1: 35,
    valor2: 50,
    valor3: 21,
    valor4: "Hola",
};

var y1 = {...x}
var y2 = x;
var y3 = Object.create(x);

//function sumar (array) {
   // return array.reduce((current, x) => (current + x), 0);
//}

if(!Array.prototype.hasOwnProperty("adding")){
    Object.defineProperty(Array.prototype,"adding", {
        value: function(){
            return this.reduce((current, x) => (current + x), 0);
        }
    });
}
//const newValues = [3,2,1];
//const newArray = Object
//.keys(x)
//.filter(y => typeof x[y] == 'Number')
//.map((y) => x[y]);
//console.log(newArray);
//const valores = Object.keys(x).map((prop) => x[prop]);
//console.log(newValues.adding());

const user = {
    name: "Usuario",
    email: "usuario@usuario.com",
    login: function(){
        alert(`Hi ${this.name}`);
    },
    logout: function(){
        alert (`Bye ${this.name}`);
    }
};

let admin = Object.create(user);
//let admin2;
//admin2._proto_ = user;
admin.sales = 5000;
admin.checkSales = function (){
    alert (`You sold $${this.sales}`);
};

let Customer = function(name = "Usuario", email = "usuario@usuario.com"){
    const customer = Object.create(user);
    customer.name = name,
    customer.email = email,
    customer.balance = 500;
    customer.checkBalance = function(){
    alert(`You have $${this.balance}`)
    }
    return customer;
}

let Admin = function(name = "Usuario", email = "usuario@usuario.com"){
    const admin = Object.create(user);
    admin.name = name,
    admin.email = email,
    admin.sales = 5000;
    admin.checkSales = function(){
    alert(`You have $${this.sales}`)
    }
    return admin;
}

const a = new Customer("Ari", "ariadna26494@gmail.com");
const b = new Admin("Luz", "arigovea26@hotmail.com")
console.log(b.sales);

