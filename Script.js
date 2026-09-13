const myPhoneNumber = "917324955441"; 

function orderOnWhatsApp(itemName, price) {
    let quantity = prompt(`${itemName} kitna chahiye? (e.g., 1 kg, 500g, 1 dozen)`);

    if (quantity === null || quantity.trim() === "") {
        alert("Kripya quantity bharein!");
        return;
    }

    let message = `Namaste! Mujhe order karna hai:\n\n- Item: ${itemName}\n- Price: ${price}\n- Quantity: ${quantity}\n\nKripya order confirm karein.`;

    let whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}
