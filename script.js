// POST VEHICLE SCRIPT
document.getElementById('vehicleForm').addEventListener('submit', function(e){
    e.preventDefault(); // Prevent page refresh

    // Read form values
    let name = document.getElementById('ownerName').value;
    let phone = document.getElementById('ownerPhone').value;
    let email = document.getElementById('ownerEmail').value;
    let model = document.getElementById('vehicleModel').value;
    let variant = document.getElementById('vehicleVariant').value;
    let mileage = document.getElementById('vehicleMileage').value;
    let features = document.getElementById('vehicleFeatures').value;
    let notes = document.getElementById('vehicleNotes').value;
    let rent = document.getElementById('vehicleRent').value;

    // Image preview
    let imgFile = document.getElementById('vehicleImage').files[0];
    let imgURL = imgFile ? URL.createObjectURL(imgFile) : 'https://via.placeholder.com/250x150?text=Car';

    // Save to localStorage
    let vehicle = {name, phone, email, model, variant, mileage, features, notes, rent, imgURL};
    let vehicles = JSON.parse(localStorage.getItem('vehicles') || "[]");
    vehicles.push(vehicle);
    localStorage.setItem('vehicles', JSON.stringify(vehicles));

    alert("Vehicle posted successfully!");
    document.getElementById('vehicleForm').reset();
});
