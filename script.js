let appliedCoupon = "";

function applyCoupon() {
  const code = document.getElementById("couponInput").value.trim();
  const msg = document.getElementById("couponMsg");

  if (!code) {
    msg.textContent = "Enter influencer code";
    return;
  }

  appliedCoupon = code.toUpperCase();

  document.getElementById("price").textContent = "$23";
  document.getElementById("priceZar").textContent = "≈ R430";
  msg.textContent = "Discount unlocked";
}

function openModal() {
  if (!appliedCoupon) {
    alert("Please enter an influencer code first.");
    return;
  }

  document.getElementById("modal").style.display = "flex";
  document.getElementById("orderID").value =
    "ORD-" + Math.random().toString(36).substr(2,9).toUpperCase();
  document.getElementById("couponField").value = appliedCoupon;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
                                       }
