document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('product');
    select.options[0].disabled = true; // disable "Please select a product"
});
  