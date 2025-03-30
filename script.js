function sendToWhatsApp() {
    let name = document.getElementById('name').value;
    let product = document.getElementById('product').value;
    let customText = document.getElementById('customText').value;

    let message = `Halo, saya ingin membeli ${product}.\nNama: ${name}\nDeskripsi: ${customText}`;
    let whatsappURL = `https://wa.me/62XXXXXXXXXX?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
}