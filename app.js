

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euros) => {
  let dollars = euros *  1.07;
  return dollars;
}


const fromDollarToYen = (dollars) => {
     let yenes = (dollars / 1.07) * 156.5
     return yenes;
   }

   const fromYenToPound = (yenes) => {
     let pounds = (yenes / 156.5) * 0.87;
     return pounds;
   }

   module.exports  = { fromDollarToYen, fromEuroToDollar, fromYenToPound}