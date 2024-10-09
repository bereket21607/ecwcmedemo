document.getElementById('equipmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Capture the form data
    const itemNo = document.getElementById('itemNo').value;
    const equipmentType = document.getElementById('equipmentType').value;
    const hpCapacity = document.getElementById('hpCapacity').value;
    const hourlyRentalRate = document.getElementById('hourlyRentalRate').value;

    // Display a success message (you can change this to store the data somewhere)
    alert(`Equipment Registered:\nItem No: ${itemNo}\nEquipment Type: ${equipmentType}\nBoundary HP/Capacity: ${hpCapacity}\nNew Hourly Rental Rate: ${hourlyRentalRate}`);
    
    // Optionally, clear the form fields after submission
    document.getElementById('equipmentForm').reset();
});