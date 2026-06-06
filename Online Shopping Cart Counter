function shoppingCart() {
    let itemCount = 0; // private variable

    return {
        addItem: function () {
            itemCount++;
            console.log("Item added to cart.");
        },

        removeItem: function () {
            if (itemCount > 0) {
                itemCount--;
                console.log("Item removed from cart.");
            } else {
                console.log("Cart is already empty.");
            }
        },

        displayCount: function () {
            console.log("Current items in cart:", itemCount);
        }
    };
}

// Creating cart object
const cart = shoppingCart();

// Operations
cart.addItem();
cart.addItem();
cart.displayCount();

cart.removeItem();
cart.displayCount();
