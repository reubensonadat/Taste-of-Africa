// The smooth scrolling logic has been removed from this file and is now
// handled by CSS in `index.html` for better performance and simplicity.

// Expand/collapse menu items with image
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        // Close any other open items
        document.querySelectorAll('.menu-item').forEach(otherItem => {
            if (otherItem !== this) {
                otherItem.querySelector('.item-details').classList.remove('expanded');
            }
        });
        
        // Toggle the clicked item
        const details = this.querySelector('.item-details');
        details.classList.toggle('expanded');
    });
});

// WhatsApp order functionality
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent triggering the menu item expand
        
        const menuItem = this.closest('.menu-item');
        const itemName = menuItem.querySelector('.item-name').textContent;
        const itemPrice = menuItem.querySelector('.item-price').textContent;
        
        // Pre-fill WhatsApp message
        const phoneNumber = '1234567890'; // Replace with actual number
        const message = `Hello! I would like to order: ${itemName} (${itemPrice}). My name is: `;
        const encodedMessage = encodeURIComponent(message);
        this.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    });
});
