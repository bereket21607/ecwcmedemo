   // Function to calculate total cost
   document.getElementById('calculateTotal').addEventListener('click', function() {
    const materialCostSource = parseFloat(document.getElementById('materialCostSource').value) || 0;
    const materialCostSourceNew = parseFloat(document.getElementById('materialCostSourceNew').value) || 0;
    const loadingCosts = parseFloat(document.getElementById('loadingCosts').value) || 0;
    const transportationCostPerUnit = parseFloat(document.getElementById('transportationCostPerUnit').value) || 0;
    const transportationCost = parseFloat(document.getElementById('transportationCost').value) || 0;

    const totalCost = materialCostSource + materialCostSourceNew + loadingCosts + transportationCost + transportationCostPerUnit;

    document.getElementById('totalCost').value = totalCost.toFixed(2);
});

// Prevent form submission for demonstration purposes
document.getElementById('materialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Material registered successfully!');
});