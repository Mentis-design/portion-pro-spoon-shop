// Image carousel
const images = [
  "https://image2url.com/r2/default/images/1768647034317-2da33fef-d189-4b40-90cf-e88fb9e3909f.jpg",
  "https://image2url.com/r2/default/images/1768647439321-a4e3ac3e-525b-4240-9a44-d61d6e1bd546.jpg",
  "https://image2url.com/r2/default/images/1768648202222-8e0691d4-9abc-4ccb-ab81-8ab987a34190.jpg",
  "https://image2url.com/r2/default/images/1768648535207-e8c6992a-fb91-4a12-b7ed-077bc8658d47.jpg",
  "https://image2url.com/r2/default/images/1768648886242-2743e8a7-046b-493d-a5ad-41887b58bc81.jpg"
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  carouselImage.src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  carouselImage.src = images[currentIndex];
}

// Coupon code
const couponCode = "INFLUENCER23";
const discountPrice = 23;

function applyCoupon() {
  const input = document.getElementById("couponCode").value.trim();
  const priceSpan = document.getElementById("price");
  const message = document.getElementById("couponMessage");

  if(input === couponCode) {
    priceSpan.textContent = discountPrice;
    message.textContent = "Coupon applied! Price updated.";
    // Update PayPal link to include discounted amount
    document.getElementById("paypalButton").href = `https://www.paypal.me/BuynowPortionprospoo/${discountPrice}`;
  } else {
    message.textContent = "Invalid coupon code.";
  }
}

// Auto-generate unique order ID
function generateOrderID() {
  return 'ORDER-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("orderID").value = generateOrderID();
  const form = document.getElementById("orderForm");

  // Form submit handling
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";

    // Send form data to Formspree
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if(response.ok){
        console.log("Form submitted!");
      } else {
        console.error("Form submission error");
      }
    }).catch(err => console.error("Form error:", err));
  });
});
