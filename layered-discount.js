// Scenario in this problem is if you buy 100 or less than 100 products you have to give 100 taka for the first 100 products. For the next 100 products you have to give 90 taka per product and for above 200 products you have to give 70 taka for each products.


function discountPrice(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const remainedPrice = 70;

    if(quantity <= 100){
        let totalPrice = first100Price * quantity;
        return totalPrice;
    }
    else if((quantity > 100 && quantity <= 200)){
        let first100Total = first100Price * 100;
        let remainingPrice = (second100Price * (quantity-100))
        let totalPrice = first100Total + remainingPrice;
        return totalPrice;
    }
    else{
        let first200Price = (first100Price * 100) + (second100Price * 100);
        let remainingOthersPrice = (remainedPrice * (quantity-200));
        let totalPrice = first200Price + remainingOthersPrice;
        return totalPrice;
    }
}
const totalPrice = discountPrice(202);
console.log(totalPrice);



