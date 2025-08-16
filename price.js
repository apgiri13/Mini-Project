function updatePrice() {
    // Get the selected vehicle and location
    var vehicle = document.getElementById("vehicle").value;
    var location = document.getElementById("location").value;

    // Base price for the vehicle selection
    var price = 10; // Default price for 'auto'

    // Update price based on vehicle
    if (vehicle === "auto") {
        price = 10;
    } else if (vehicle === "metro") {
        price = 5;
    } else if (vehicle === "bus") {
        price = 3;
    } else if (vehicle === "bike") {
        price = 2;
    }

    // Modify price based on location
    if (location === "downtown") {
        price += 5; // Additional charge for downtown
    } else if (location === "suburb") {
        price += 3; // Additional charge for suburb
    } else if (location === "airport") {
        price += 8; // Additional charge for airport
    } else if (location === "beach") {
        price += 6; // Additional charge for beach
    }

    // Update the displayed price
    document.getElementById("priceValue").textContent = "$" + price;

    // Show more details based on the location selected
    showLocationDetails(location);
}

function showLocationDetails(location) {
    var detailsText = "";
    var detailsElement = document.getElementById("detailsText");

    // Display details based on the selected location
    if (location === "downtown") {
        detailsText = `
            <strong>Downtown</strong>: The heart of the city, with shopping centers, restaurants, and cultural landmarks.
            <br><strong>Attractions:</strong> City Mall, Central Park, City Museum
            <br><strong>Best Time to Visit:</strong> Spring and Fall for pleasant weather.
        `;
    } else if (location === "suburb") {
        detailsText = `
            <strong>Suburb</strong>: A quieter, residential area with parks, schools, and local stores.
            <br><strong>Attractions:</strong> Greenhill Park, Suburb Farmers Market
            <br><strong>Best Time to Visit:</strong> Year-round, especially for families.
        `;
    } else if (location === "airport") {
        detailsText = `
            <strong>Airport</strong>: Located near the city center, offering both domestic and international flights.
            <br><strong>Attractions:</strong> Duty-Free Shops, Airport Lounge, Business Center
            <br><strong>Best Time to Visit:</strong> Before 9 AM or after 6 PM to avoid rush hours.
        `;
    } else if (location === "beach") {
        detailsText = `
            <strong>Beach</strong>: A relaxing location with sandy shores, water activities, and scenic views.
            <br><strong>Attractions:</strong> Surfing, Beach Volleyball, Seaside Cafes
            <br><strong>Best Time to Visit:</strong> Summer for the best beach experience.
        `;
    }

    // Update the destination details section
    detailsElement.innerHTML = detailsText;
}
