const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
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

const calculateSalesTax = function(salesData, taxRates) {
  let results = {};
  for (each of salesData) {
    if (!results[each.name]) {
      results[each.name] = {
        totalTaxes : 0,
        totalSales : 0
      }

    }
  }
  let salesByProv = salesData.map(element => {
    return {
      name : element.name, 
      salesTotal: element.sales.reduce((a, b) => a + b),
      get SalesTax() {
        return this.salesTotal*salesTaxRates[element.province]
      }
    }
  })
  for (each of salesByProv) {
    results[each.name].totalSales += each.salesTotal
    results[each.name].totalTaxes += each.SalesTax
  }

  return results
}

console.log(calculateSalesTax(companySalesData,salesTaxRates))

