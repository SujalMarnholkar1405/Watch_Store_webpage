function searchProduct() {
    let input = document.getElementById("search-box").value.toLowerCase();
    let watchCards = document.querySelectorAll(".watch-card");

    watchCards.forEach(card => {
        if (card.innerText.toLowerCase().includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
