const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'


customers = 1
const loc = 'NK'
currency = null
shipping = null

if (loc === "RSA") { 
    shipping = 400 
    currency = 'R'
} else if (loc === "NAM") {
    shipping = 600 
    currency = '$'
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
//                      300   + 70        + 0    + 0
const cost_w_shipping = shoes + batteries + pens + shirts

if ( (cost_w_shipping >= 1000 || cost_w_shipping >= 60) && (loc == "NAM" || loc == "RSA")) {
	if (customers === 1) {
        shipping = 0
	}
}

if ((shipping = 0) && (customers !== 1)) { console.log(FREE_WARNING) }

loc === 'NK' ? console.log(BANNED_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)