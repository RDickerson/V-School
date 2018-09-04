var shopper = {  
    store: "The Cool Place",
    totalPrice: 26.89,
    selfCheckout: true,
    items: ["apples", "milk", "cookies"],
    
    everything: function () {
        return "I went to " + shopper.store + " and spent $" + shopper.totalPrice + ".";
    }
 };
 console.log (shopper.items)