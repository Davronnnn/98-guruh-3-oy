var clientMoney = prompt('Qancha pulingiz bor?');

var dollarToSum = 10650.34;
var euroToSum = 10650.03;

var ticketPrice = 500;
var hotelPrice = 250;
var museumPrice = 120;

var totalPrice =
	ticketPrice * dollarToSum +
	hotelPrice * dollarToSum +
	museumPrice * euroToSum;

var message = `Sizning pulingiz ${clientMoney}  so'm`;

if (clientMoney >= totalPrice) {
	var extraMoney = clientMoney - totalPrice;
	alert(`siz borolasiz, qoldiq ${extraMoney} so'm `);
} else {
	var extraMoney = totalPrice - clientMoney;
	alert(`siz borolmaysiz kerak bo'ladi yana ${extraMoney} so'm`);
}
