// Product price & coupons
let basePrice = 45; // USD
const coupons = {
  "LIMITED23": 23,
  "INFLUENCER50": 20
};

const productPriceEl = document.getElementById("product-price");
const couponInput = document.getElementById("coupon-code");
const couponFeedback = document.getElementById("coupon-feedback");
const buyNowBtn = document.getElementById("buy-now");
const formPopup = document.getElementById("order-form-popup");
const orderForm = document.getElementById("order-form");
const orderIdInput = document.getElementById("order-id");
const closeFormBtn = document.getElementById("close-form");

// Carousel swipe functionality
let startX = 0;
const carousel = document.querySelector(".carousel");
carousel.addEventListener("touchstart", e => startX = e.touches[0].clientX);
carousel.addEventListener("touchmove", e => {
  let x = e.touches[0].clientX;
  let walk = startX - x;
  carousel.scrollLeft += walk;
  startX = x;
});

// Coupon handler
couponInput.addEventListener("input", () => {
  const code = couponInput.value.trim().toUpperCase();
  if (coupons[code]) {
    productPriceEl.textContent = coupons[code];
    couponFeedback.textContent = `Coupon applied: $${coupons[code]}`;
  } else {
    productPriceEl.textContent = basePrice;
    couponFeedback.textContent = "";
  }
});

// Generate unique Order ID
function generateOrderId() {
  return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Open popup
buyNowBtn.addEventListener("click", () => {
  orderIdInput.value = generateOrderId();
  formPopup.style.display = "flex";
});

// Close popup
closeFormBtn.addEventListener("click", () => formPopup.style.display = "none");

// Form submit
orderForm.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(orderForm);
  const amount = productPriceEl.textContent;
  const paypalLink = `https://www.paypal.me/BuynowPortionprospoo/${amount}`;
  window.location.href = paypalLink;
});
