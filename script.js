function sendToWhatsApp() {
    let name = document.getElementById('name').value;
    let product = document.getElementById('product').value;
    let customText = document.getElementById('customText').value;
    let phone = `6283194451891`;
    
    let message = `✨ Assalamu'alaikum Bang!✨\n\nSaya Ingin Membeli:\nNama: ${name}\nProduk: ${product}\nDeskripsi: ${customText}`;
    let whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
}
