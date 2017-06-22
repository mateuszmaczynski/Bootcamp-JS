/* Zakładamy, że taki obiekt byłby dodany
   gdzieś w kodzie HTML w tagu <script>
   przez system CMS generujący widok strony */

const currencies = window.currencies;

function formatPrice(currency) {

    let rate = currencies[currency];

    return function(strings, ...values) {

        let output = "";

        strings.forEach(function(string, index) {

            let value = values[index];

            output += string;

            if(value !== undefined) {

                if(typeof value === "number") {
                    output += (value / rate).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + " " + currency;
                } else {
                    output += value;
                }

            }

        });

        return output;

    };

}

let product = {
    name: "Pendrive 16GB",
    price: 23,
    quantity: 4
};

let { name: pName, price: pPrice, quantity: pQuantity } = product || {};

let info = formatPrice("USD")`Kupiłeś produkt '${pName}' w cenie ${pPrice} za sztukę. Łączna wartość zamówienia to ${pPrice * pQuantity}.`;

document.querySelector("#output").textContent = info;