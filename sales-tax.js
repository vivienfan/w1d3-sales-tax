var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

// !!!!! companySalesData is an ARRAY !!!!!
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var results = {};
  for (var sale of salesData) {
    // undefined is false
    if (!results[sale.name]) {
      results[sale.name] = {totalSales: 0, totalTaxes: 0};
    }
    var total = sale.sales.reduce(function(a, b) { return a + b; }, 0);
    results[sale.name].totalTaxes += total * taxRates[sale.province];
    results[sale.name].totalSales += total;
  }
  return results;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/