const factura = {
    sucursal: "Oblatos",
    vendedor: "Pedro",
    totalPrice: function() {
        return this.articulos
        .map((x) => x.price * x.quantity)
        .reduce((current, x) => current + x, 0);
    },
    liquidar: function(balance){
        return balance - this.totalPrice();
    },
    showTotal: function(){
        return `$${this.totalPrice().toFixed(2)}`
    },
};
const Electronico = function (obj) {
    return {
        id: obj.id || 0,
        name: obj.name || "",
        price: obj.price || 0,
        quantity: obj.quantity || 0,
    };
};

const getItemsElec = function (quantity) {
    const array = [];
    for (let i = 0; i < quantity; i++) {
        array.push(new Electronico({
            id: i + 1,
            name: `FactElec${i+1}`,
            price: parseFloat(Math.random() * (200 - 1) + 1).toFixed(2),
            quantity: parseInt(Math.random() * (20 - 1) + 1).toFixed(1),
        }));
    };
    return array;
};
const FacturaElectronica = function (id, name) {
   let item = Object.create(factura);
   item.id = id,
   item.name = name,
   item.articulos = getItemsElec(10);
    return item;
};

const Groceries = function (obj) {
    return {
        id: obj.id || 0,
        name: obj.name || "",
        price: obj.price || 0,
        quantity: obj.quantity || 0,
        quality: obj.quality || 0,
        freshness: obj.freshness || 0,
    };
};

const getItemsGro = function (quantity) {
    const array = [];
    for (let i = 0; i < quantity; i++) {
        array.push(new Groceries({
            id: i + 1,
            name: `FactGro${i+1}`,
            price: parseFloat(Math.random() * (200 - 1) + 1).toFixed(2),
            quantity: parseInt(Math.random() * (20 - 1) + 1),
            quality: parseInt(Math.random() * (5 - 1) + 1),
            freshness: parseInt(Math.random() * (5 - 1) + 1),
        }));
    };
    return array;
};

const FacturaGroceries = function (id, name) {
    let item = Object.create(factura);
    item.id = id,
    item.name = name,
    item.articulos = getItemsGro(10);
    item.indiceCalidad = function(){
      const x = this.articulos.reduce((current, y) => {
          return (current = {
            freshness: current.freshness + y.freshness,
            quality: current.quality + y.quality
          });
        }, {freshness: 0, quality: 0});
        return Math.ceil((x.freshness + x.quality) / 2) / this.articulos.length;
    }
     return item;
};


const facturaJanuarElec = new FacturaElectronica(1, "Enero");
const facturaJanuarGroc = new FacturaGroceries(1, "Enero");
console.log(facturaJanuarGroc);
console.log(facturaJanuarGroc.totalPrice());
console.log(facturaJanuarElec.showTotal());
console.log(facturaJanuarGroc.indiceCalidad());
//console.log(facturaJanuarElec.totalPrice());
//console.log(new FacturaGroceries(1, "Marzo"));