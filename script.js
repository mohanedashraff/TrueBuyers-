document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateDetails);
});

function generateDetails() {
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var adress = document.getElementById('adress').value;
    var bedrooms = document.getElementById('bedrooms').value;
    var bathrooms = document.getElementById('bathrooms').value;
    var garage = document.getElementById('garage').value;
    var renovations = document.getElementById('renovations').value;
    var damage = document.getElementById('damage').value;
    var sellingReason = document.getElementById('selling_reason').value;
    var mortgages = document.getElementById('mortgages').value;
    var isRented = document.getElementById('is_rented').checked ? 'Yes' : 'No';
    var askingPrice = document.getElementById('asking_price').value;
    var propertyRating = document.getElementById('property_rating').value;
    var zestimate = document.getElementById('zestimate').value;
    var isListed = document.getElementById('is_listed').checked ? 'Yes' : 'No';
    var garageCars = document.getElementById('garage_cars').value;
    var leaseType = document.getElementById('lease_type').value;
    var leaseExpire = document.getElementById('lease_expire').value;
    var callBackTime = document.getElementById('call_back_time').value;
    var size = document.getElementById('size').value;
    var condition = document.getElementById('condition').value;
    var occupancy = document.getElementById('occupancy').value;
    var motivation = document.getElementById('motivation').value;
    var timeframe = document.getElementById('timeframe').value;
    var motivationLevel = document.getElementById('motivation_level').value;
    var zillowLink = document.getElementById('zillow_link').value;
    var redfinValue = document.getElementById('redfin_value').value;
    var redfinLink = document.getElementById('redfin_link').value;
    var caller = document.getElementById('caller').value;

    var webhookUrl = document.getElementById('webhook').value; // Get the webhook URL

    var formattedMessage = `
    Name: ${name}
    Phone Number: ${number}
    Adress: ${adress}
    Bedrooms: ${bedrooms}
    Bathrooms: ${bathrooms}
    Garage or Storage Space: ${garage}
    Recent Renovations or Upgrades: ${renovations}
    Damage that Needs Repair: ${damage}
    Reason for Selling: ${sellingReason}
    Existing Mortgages or Liens: ${mortgages}
    Is the Property Rented? ${isRented}
    Asking Price: ${askingPrice}
    Property Rating: ${propertyRating}
    Zestimate: ${zestimate}
    Is the Property Listed? ${isListed}
    Number of Garage Cars: ${garageCars}
    Lease Type: ${leaseType}
    Lease Expiry Date: ${leaseExpire}
    Best Time to Call Back: ${callBackTime}
    Property Size (sq. ft.): ${size}
    Condition: ${condition}
    Occupancy: ${occupancy}
    Motivation: ${motivation}
    Timeframe: ${timeframe}
    Motivation Level: ${motivationLevel}
    Zillow Link: ${zillowLink}
    Redfin Value: ${redfinValue}
    Redfin Link: ${redfinLink}
    Caller: ${caller}
    `;

    // Discord webhook URL
    var discordWebhookUrl = webhookUrl; // Use the webhook URL from the form

    // Send data to Discord channel via webhook
    fetch(discordWebhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: formattedMessage,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log(data); // Log the response from Discord webhook (optional)
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });


}
