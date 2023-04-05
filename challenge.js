const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'


customers = 1
const loc = 'NAM'
currency = null
shipping = null
let shippingPice = null

if (loc === "RSA") {             //if (location = RSA) { shipping === 400 && currency === 'R' }
    shipping = 400
    currency = 'R'
} else if (loc === "NAM") {     //if location = NAM
    shipping = 600              //shipping = 600 
    currency = '$'              //else shipping = 800
} else {
    shipping = 800 
    currency = '$'
}

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED 

//shipping = null
currency = '$'
//                      300   + 70        + 0    + 0    + 500
let cost_w_shipping = shoes + batteries + pens + shirts + toys

if (currency === '$') {
    if(cost_w_shipping >= 60 && (loc == "NAM" || loc == "RSA") && customers === 1) {
        shipping = 0
    }
} else {
    if(cost_w_shipping >= 1000 && (loc == "NAM" || loc == "RSA") && customers === 1) {
        shipping = 0
    }
}
// if (shoes + batteries + pens + shirts > 1000 &&  ) {
// 	if (location = NAM && customers < 2) {
// 			if (location = RSA)
// 		    shipping = 0 || calcShipping
// 		}
// 	}
// }

if ((shipping === 0) && (customers !== 1)) { console.log(FREE_WARNING) }

loc === 'NK' ? console.log(BANNED_WARNING) : console.log('Price', currency, cost_w_shipping + shipping)