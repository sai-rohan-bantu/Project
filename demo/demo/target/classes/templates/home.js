document.addEventListener("DOMContentLoaded", function() {
    const cartTotal = document.querySelector('.cart-total');
    const checkoutBtn = document.querySelector('.checkout-btn');
    let total = 0;

    function updateTotal() {
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    function updateQuantity(item, value) {
        const quantityElem = item.querySelector('.quantity');
        let quantity = parseInt(quantityElem.textContent) + value;
        quantity = Math.max(quantity, 0); // Ensure quantity is not negative
        quantityElem.textContent = quantity;
        total += parseFloat(item.querySelector('.price').textContent.slice(1)) * value;
        updateTotal();
    }

    document.querySelectorAll('.increment').forEach(function(btn) {
        btn.addEventListener('click', function() {
            updateQuantity(btn.closest('li'), 1);
        });
    });

    document.querySelectorAll('.decrement').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const quantityElem = btn.closest('li').querySelector('.quantity');
            if (parseInt(quantityElem.textContent) > 0) {
                updateQuantity(btn.closest('li'), -1);
            }
        });
    });

    checkoutBtn.addEventListener('click', function() {
        alert(`Your total is: $${total.toFixed(2)}. Proceed to checkout.`);
        // Add more functionality for checkout process
    });
});
