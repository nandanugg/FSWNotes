const month = 1

months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

monthConv = months[month - 1]

console.log(monthConv)

function string(date, month, year) {
    const ouctput = `${date} ${month} of ${year} `
    console.log(output);
}
console.log(string(date, monthConv, year))