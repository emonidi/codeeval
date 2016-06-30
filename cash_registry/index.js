/**
 * Created by emonidi on 6/30/16.
 */
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line  = line.replace('\r','');

        var change = [];

        var currency = {
            'PENNY': 0.01,
            'NICKEL': 0.05,
            'DIME': 0.10,
            'QUARTER': 0.25,
            'HALF DOLLAR': 0.50,
            'ONE': 1.00,
            'TWO': 2.00,
            'FIVE': 5.00,
            'TEN': 10.00,
            'TWENTY': 20.00,
            'FIFTY': 50.00,
            'ONE HUNDRED': 100.00
        }

        var split = line.split(';'),
            price = parseFloat(split[0]),
            money = parseFloat(split[1]);



        if(price > money){
            change.push('ERROR');
        }else if(price === money){
            change.push('ZERO');
        }else{
            while(price != money){
                Object.keys(currency)
                    .reverse()
                    .forEach(function(item, index){
                        if(money  >= price+currency[item] ){
                            change.push(item);
                            price = Math.floor(adjustPrice(price, currency[item]));
                        }
                    });
            }
        }


        console.log(change.join(','));

    }
});

function adjustPrice(price, currencyItem){
    price += currencyItem;
    price = price.toFixed(20).slice(0,-18)
    price =  parseFloat(price);

    return price;
}