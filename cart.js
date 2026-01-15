function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(i => i.id === item.id);
  if (existing) existing.qty++;
  else cart.push({...item, qty:1});
  saveCart(cart);

  const toast = document.createElement("div");
  toast.innerText = `${item.name} added to cart ☕`;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.background = "#238636";
  toast.style.color = "#fff";
  toast.style.padding = "10px 16px";
  toast.style.borderRadius = "6px";
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.5s ease";
  document.body.appendChild(toast);
  setTimeout(()=>toast.style.opacity="1",10);
  setTimeout(()=>toast.style.opacity="0",2000);
  setTimeout(()=>document.body.removeChild(toast),2500);
}
