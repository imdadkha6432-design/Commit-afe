function getCart(){return JSON.parse(localStorage.getItem("cart"))||[]}
function saveCart(c){localStorage.setItem("cart",JSON.stringify(c))}
function addToCart(i){const c=getCart();const f=c.find(x=>x.id===i.id);f?f.qty++:c.push({...i,qty:1});saveCart(c)}
function removeFromCart(id){saveCart(getCart().filter(i=>i.id!==id));renderCart()}
function updateQty(id,q){const c=getCart();const i=c.find(x=>x.id===id);if(i)i.qty=q;saveCart(c);renderCart()}