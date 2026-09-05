const products = [
    { id: 1, name: "Wireless Mouse", price: 599, image: "mouse.jpg", category: "electronics", rating: 4.2 },
    { id: 2, name: "Bluetooth Headphones", price: 1299, image: "headphones.jpg", category: "electronics", rating: 4.5 },
    { id: 3, name: "Ethnic wear", price: 1549, image: "ethnic wear.jpg", category: "fashion", rating: 4.5 },
    { id: 4, name: "Mobiles", price: 23439, image: "mobile.jpg", category: "electronics", rating: 4.5 },
    { id: 5, name: "Computers", price: 50000, image: "computer.jpg", category: "electronics", rating: 4.5 },
    { id: 6, name: "Men's Fashion", price: 1990, image: "men fashion.jpg", category: "fashion", rating: 4.5 },
    { id: 7, name: "Women's Fashion", price: 1799, image: "women fashion.jpg", category: "fashion", rating: 4.5 },
    { id: 8, name: "Home", price: 399, image: "home.jpg", category: "home", rating: 4.5 },
    { id: 9, name: "Kitchen", price: 79, image: "kitchen.jpg", category: "kitchen", rating: 4.5 },
    { id: 10, name: "Pets", price: 12000, image: "pets.jpg", category: "pets", rating: 4.5 },
    { id: 11, name: "Furniture", price: 4000, image: "furniture.jpg", category: "furniture", rating: 4.5 },
    { id: 12, name: "Beauty & Grooming", price: 349, image: "beauty.jpg", category: "Beauty and grooming", rating: 4.5 }
]

const productcontainer = document.querySelector(".product-container")
products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `<img src="${product.image}"  alt="${product.name}">
        <h3>${product.name}</h3> 
        <p class="price"> ₹${product.price}</p>
        <button class="addtocartbtn" data-id="${product.id}">Add to cart</button>`;
    productcontainer.appendChild(card);
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll(".addtocartbtn").forEach(button => {
    button.addEventListener('click', function () {
        const productId = button.getAttribute('data-id')
        const product = products.find(p => p.id == productId);
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart));
        updatecartcount()

        button.innerText = "Added!"
    })
})

function updatecartcount() {
    document.getElementById("cart-count").innerText = cart.length
}
updatecartcount()

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updatecartcount();
}