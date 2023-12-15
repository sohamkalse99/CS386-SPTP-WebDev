let sales = [[345.54, 389.21, 745.90, 451.89, 395.67, 451.45, 598.42, 575.64, 523.78, 678.55, 874.56, 945.34],
[423.54, 423.87, 432.87, 534.77, 385.29, 642.89, 452.84, 523.88, 554.78, 767.90, 523.44, 899.34],
[623.87, 518.66, 372.67, 745.56, 634.56, 429.88, 528.67, 418.56, 276.52, 514.95, 639.52, 786.58]];

// Part 1
function fCalcRowTotal(sales, index) {
    let rowTotal = 0;

    if (index < 0 || index > 2)
        return 'Invalid Row Index';
    else {
        let i = 1;
        for (let j = 0; j < sales[index].length; j++) {
            rowTotal += sales[index][j];
        }
    }

    return rowTotal.toFixed(2);
}

let rowSum = fCalcRowTotal(sales, 1);

// Part 2
function fCalcColTotal(sales, col) {
    let colTotal = 0;
    if (col < 0 || col > 11)
        return 'Invalid Column Index';
    else {
        for (let j = 0; j < sales.length; j++) {
            colTotal += sales[j][col];
        }
    }

    return colTotal.toFixed(2);
}

let colSum = fCalcColTotal(sales, 4);
// console.log(colSum);

let year = 2016;
let totYearSales = 0;

console.log('------Totals per year-------------------');
for (let i = 0; i < 3; i++) {
    console.log(`Total for year ${year}     = $${fCalcRowTotal(sales, i)}`);
    totYearSales += parseFloat(fCalcRowTotal(sales, i));
    year += 1;
}
console.log('----------------------------------------');
console.log(`Yearly average sales    = $${(totYearSales / 3)}`);
console.log('\n');

let month = 1;
let totMonth = 0;

console.log('------Totals per month---------------------------------------------');
for (let i = 0; i < 12; i++) {
    if (i > 8) {
        console.log(`Total for month ${month}    = $${fCalcColTotal(sales, i)} (Monthly average sales = $${(fCalcColTotal(sales, i) / 3).toFixed(2)})`);
    }
    else {
        console.log(`Total for month ${month}     = $${fCalcColTotal(sales, i)} (Monthly average sales = $${(fCalcColTotal(sales, i) / 3).toFixed(2)})`);
    }
    month += 1;
}
console.log('\n');