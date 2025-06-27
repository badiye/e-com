    const modal = document.getElementById('productModal');
    modal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        document.getElementById('modalTitle').textContent = button.getAttribute('data-title');
        document.getElementById('modalDescription').textContent = button.getAttribute('data-description');
        document.getElementById('modalPrice').textContent = 'Price: ' + button.getAttribute('data-price');
        document.getElementById('modalStock').textContent = 'Stock: ' + (button.getAttribute('data-instock') === 'true' ? 'In Stock' : 'Sold Out');
        document.getElementById('modalSale').textContent = button.getAttribute('data-sale') === 'true' ? 'On Sale!' : '';
    });