/*
let num = prompt('enter a number')


if ( num >= 4 ){

    console.log('the number is less than 10')

} else if (num > 4 && num < 10 ) {

    console.log('the number is more than 4 and less than 10')

} else {

    console.log('it is not any number')

}
*/

let rows = '';
for( let index = 0; index < 5; index++ )
{
    rows += '<tr>';
        for( let col = 0; col < 3; col++ )
        {
            rows += '<td> cell </td>';

        }
    rows += '</tr>';

}
document.write('<table>' + rows + '</table>')