// Elements
const buyBtn = document.getElementById('buyBtn');
const formPopup = document.getElementById('formPopup');
const orderIdInput = document.getElementById('orderIdInput');
const couponInput = document.getElementById('coupon');
const priceDisplay = document.getElementById('price');
const orderForm = document.getElementById('orderForm');

// Base price in USD
const basePrice = 45;
const couponCodes = {
  "LIMITED23": 23,
  "INFLUENCER50": 23
};

// Open form popup and generate unique order ID
buyBtn.addEventListener('click', () => {
  formPopup.style.display = 'block';
  const uniqueId = 'ORD' + Math.floor(Math.random() * 1000000);
  orderIdInput.value = uniqueId;
  document.getElementById('orderId').textContent = uniqueId;
});

// Update price dynamically with coupon
couponInput.addEventListener('input', () => {
  const code = couponInput.value.toUpperCase();
  if(couponCodes[code]){
    priceDisplay.textContent = `$${couponCodes[code]}`;
  } else {
    priceDisplay.textContent = `$${basePrice}`;
  }
});

// Handle form submission
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(orderForm);
  let price = basePrice;
  const code = couponInput.value.toUpperCase();
  if(couponCodes[code]){
    price = couponCodes[code];
  }

  // Build PayPal.me link
  const paypalLink = `https://www.paypal.me/BuynowPortionprospoo/${price}`;
  window.location.href = paypalLink;
});
