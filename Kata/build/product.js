var products = [
    { id: 1, name: "Smartphone XY", category: "Électronique", price: 799.99, rating: 2 },
    { id: 2, name: "Basketball Pro Ball", category: "Sport", price: 29.99, rating: 4.2 },
    { id: 3, name: "Casque Audio Sans Fil", category: "Électronique", price: 199.99, rating: 4.8 },
    { id: 4, name: "Série de Romans Fantasy", category: "Livres", price: 59.99, rating: 5 },
    { id: 5, name: "Montre Connectée", category: "Électronique", price: 249.99, rating: 4.4 },
];
function orderByRating() {
    console.log(products.sort(function (b, a) { return a.rating - b.rating; }));
}
function filterByCategory(filter) {
    console.log(products.filter(function (products) { return products.category == filter; }));
}
orderByRating();
filterByCategory('Électronique');
