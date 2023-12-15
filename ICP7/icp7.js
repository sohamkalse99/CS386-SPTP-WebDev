function main() {
    let sales = ['2031, 3412, 2512, 4421', '1984, 4154, 2893, 3189', '2152, 4267, 5221, 4742'];
    let year = [2016, 2017, 2018];

    for (let i = 0; i < sales.length; i++) {
        // console.log(`Quarterly sales for year ${year[i]} = ${sales[i]}`);
        // Function to calculate total for each year
        let total = fYearlyTotals(sales, i);
        console.log(`Total sales for ${year[i]} = ${total}`);
    }
}

main();

function fYearlyTotals(arr, index) {
    let quarterlySales = arr[index];
    // Splitting string into arrays
    quarterlySales = quarterlySales.split(',').map(Number);
    let annualTotal = 0;
    for (let i = 0; i < quarterlySales.length; i++) {
        annualTotal += quarterlySales[i];
    }
    return annualTotal;
}