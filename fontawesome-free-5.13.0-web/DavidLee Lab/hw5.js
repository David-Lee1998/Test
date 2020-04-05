var Cars = ['BM,W','Benz','Audi','Lexus'];
var Prices = [ 280,320,250,210];

var PricesWithTax = Prices.map(p=>p*1.05);
console.log(PricesWithTax);

var total = PricesWithTax.reduce((total,current)=>total+current);
 console.log(`車子總價:${total}`);