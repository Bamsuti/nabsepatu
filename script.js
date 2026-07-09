let currentService = "brand";
let currentSubcategory = null;
let cart = [];

function formatPrice(price) {
  return "Rp" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function selectService(service) {
  currentService = service;
  currentSubcategory = null;

  document.querySelectorAll(".service-btn").forEach(function(btn) {
    btn.classList.remove("active");
  });
  document.querySelector('.service-btn[data-service="' + service + '"]').classList.add("active");

  renderSubcategories();
  showWelcome();
}

function renderSubcategories() {
  var container = document.getElementById("subcategories");
  var serviceData = nabsepatuData[currentService];
  var html = "";
  var keys = Object.keys(serviceData.subcategories);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var sub = serviceData.subcategories[key];
    html += '<button class="subcat-btn" data-key="' + key + '" onclick="selectSubcategory(\'' + key + '\')">' + sub.label + "</button>";
  }
  container.innerHTML = html;
}

function selectSubcategory(key) {
  currentSubcategory = key;

  document.querySelectorAll(".subcat-btn").forEach(function(btn) {
    btn.classList.remove("active");
  });
  var btn = document.querySelector('.subcat-btn[data-key="' + key + '"]');
  if (btn) btn.classList.add("active");

  renderProducts(key);
}

function renderProducts(subKey) {
  var container = document.getElementById("content");
  var products = nabsepatuData[currentService].subcategories[subKey].products;
  var html = '<div class="product-grid">';
  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    html += '<div class="product-card">';
    html += '<div class="product-image"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy"></div>';
    html += '<div class="product-info">';
    html += '<div class="product-name">' + p.name + "</div>";
    html += '<div class="product-category">' + nabsepatuData[currentService].label + " / " + nabsepatuData[currentService].subcategories[subKey].label + "</div>";
    html += '<div class="product-price">' + formatPrice(p.price) + "</div>";
    html += '<div class="product-actions">';
    html += '<button class="btn-beli" onclick="addToCart(\'' + p.id + '\')">Beli</button>';
    html += '<button class="btn-detail" onclick="showDetail(\'' + p.id + '\')">Detail</button>';
    html += "</div>";
    html += "</div>";
    html += "</div>";
  }
  html += "</div>";
  container.innerHTML = html;
}

function showWelcome() {
  var container = document.getElementById("content");
  container.innerHTML =
    '<div class="welcome"><h2>' +
    nabsepatuData[currentService].label +
    "</h2><p>Pilih subkategori di atas untuk melihat koleksi sepatu.</p></div>";
}

function showHome() {
  currentService = "brand";
  currentSubcategory = null;
  document.querySelectorAll(".service-btn").forEach(function(btn) {
    btn.classList.remove("active");
  });
  document.querySelector('.service-btn[data-service="brand"]').classList.add("active");
  renderSubcategories();
  var container = document.getElementById("content");
  container.innerHTML =
    '<div class="welcome"><h2>Selamat Datang di nab.sepatu</h2><p>Pilih layanan di atas untuk melihat koleksi sepatu terbaik kami.</p></div>';
  document.getElementById("searchInput").value = "";
}

function getProductById(id) {
  var cats = ["brand", "sport", "pria"];
  for (var c = 0; c < cats.length; c++) {
    var subs = nabsepatuData[cats[c]].subcategories;
    var keys = Object.keys(subs);
    for (var k = 0; k < keys.length; k++) {
      var products = subs[keys[k]].products;
      for (var p = 0; p < products.length; p++) {
        if (products[p].id === id) {
          return products[p];
        }
      }
    }
  }
  return null;
}

function addToCart(productId) {
  var product = getProductById(productId);
  if (!product) return;
  cart.push(product);
  updateCartCount();
  alert('"' + product.name + '" telah ditambahkan ke keranjang!');
}

function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.length;
}

function showDetail(productId) {
  var product = getProductById(productId);
  if (!product) return;
  document.getElementById("modalTitle").textContent = product.name;
  var body = document.getElementById("modalBody");
  body.innerHTML =
    '<div class="product-image"><img src="' +
    product.image +
    '" alt="' + product.name + '" loading="lazy"></div>' +
    '<div class="product-name" style="font-size:20px;font-weight:700;color:#1a237e">' +
    product.name +
    "</div>" +
    '<div class="product-price">' +
    formatPrice(product.price) +
    "</div>" +
    '<div class="product-description">' +
    product.description +
    "</div>" +
    '<button class="btn-beli" onclick="addToCartFromDetail(\'' +
    product.id +
    "')\">Beli Sekarang</button>";
  document.getElementById("modalOverlay").classList.add("active");
  document.getElementById("modal").classList.add("active");
}

function addToCartFromDetail(productId) {
  addToCart(productId);
  closeModal();
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.getElementById("modal").classList.remove("active");
}

function getUsers() {
  return JSON.parse(localStorage.getItem("nabsepatu_users") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("nabsepatu_users", JSON.stringify(users));
}

function handleLogin(event) {
  event.preventDefault();
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  if (email === "admin@nab.sepatu" && password === "admin123") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").classList.remove("app-hidden");
    document.getElementById("loginForm").reset();
    return;
  }

  var users = getUsers();
  var found = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      found = true;
      break;
    }
  }

  if (found) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").classList.remove("app-hidden");
    document.getElementById("loginForm").reset();
  } else {
    alert("Email atau kata sandi salah.");
  }
}

function showRegister() {
  document.getElementById("registerOverlay").classList.add("active");
  document.getElementById("registerModal").classList.add("active");
}

function closeRegister() {
  document.getElementById("registerOverlay").classList.remove("active");
  document.getElementById("registerModal").classList.remove("active");
  document.getElementById("registerForm").reset();
}

function handleRegister(event) {
  event.preventDefault();
  var name = document.getElementById("regName").value;
  var email = document.getElementById("regEmail").value;
  var password = document.getElementById("regPassword").value;

  var users = getUsers();

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      alert("Email sudah terdaftar. Gunakan email lain.");
      return;
    }
  }

  users.push({ name: name, email: email, password: password });
  saveUsers(users);
  alert("Pendaftaran berhasil! Silakan masuk.");
  closeRegister();
}

function handleLogout() {
  cart = [];
  updateCartCount();
  closeCart();
  document.getElementById("app").classList.add("app-hidden");
  document.getElementById("loginPage").style.display = "flex";
  document.getElementById("loginForm").reset();
}

function showCart() {
  var body = document.getElementById("cartModalBody");
  if (cart.length === 0) {
    body.innerHTML = "<p>Keranjang masih kosong.</p>";
    document.getElementById("cartModalOverlay").classList.add("active");
    document.getElementById("cartModal").classList.add("active");
    return;
  }
  var html = "";
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
    html +=
      '<div class="cart-item">' +
      '<div class="cart-item-image"><img src="' +
      item.image +
      '" alt="' + item.name + '" loading="lazy"></div>' +
      '<div class="cart-item-info">' +
      '<div class="cart-item-name">' +
      item.name +
      "</div>" +
      '<div class="cart-item-price">' +
      formatPrice(item.price) +
      "</div>" +
      "</div>" +
      '<button class="cart-item-remove" onclick="removeFromCart(' +
      i +
      ')">&times;</button>' +
      "</div>";
  }
  html += '<div class="cart-total"><span>Total</span><span>' + formatPrice(total) + "</span></div>";
  body.innerHTML = html;
  document.getElementById("cartModalOverlay").classList.add("active");
  document.getElementById("cartModal").classList.add("active");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  showCart();
}

function closeCart() {
  document.getElementById("cartModalOverlay").classList.remove("active");
  document.getElementById("cartModal").classList.remove("active");
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  alert("Pesanan berhasil! Total: " + formatPrice(total) + "\nTerima kasih telah berbelanja di nab.sepatu!");
  cart = [];
  updateCartCount();
  closeCart();
}

function handleSearch(query) {
  query = query.toLowerCase().trim();
  var container = document.getElementById("content");
  if (query === "") {
    if (currentSubcategory) {
      renderProducts(currentSubcategory);
    } else {
      showWelcome();
    }
    return;
  }

  var results = [];
  var cats = ["brand", "sport", "pria"];
  for (var c = 0; c < cats.length; c++) {
    var subs = nabsepatuData[cats[c]].subcategories;
    var keys = Object.keys(subs);
    for (var k = 0; k < keys.length; k++) {
      var products = subs[keys[k]].products;
      for (var p = 0; p < products.length; p++) {
        var prod = products[p];
        if (
          prod.name.toLowerCase().includes(query) ||
          prod.description.toLowerCase().includes(query) ||
          nabsepatuData[cats[c]].subcategories[keys[k]].label.toLowerCase().includes(query) ||
          nabsepatuData[cats[c]].label.toLowerCase().includes(query)
        ) {
          results.push(prod);
        }
      }
    }
  }

  if (results.length === 0) {
    var msg = document.createElement("div");
    msg.className = "no-results";
    msg.textContent = 'Produk dengan kata kunci "' + query + '" tidak ditemukan.';
    container.innerHTML = "";
    container.appendChild(msg);
    return;
  }

  currentService = null;
  currentSubcategory = null;

  var html = '<div class="product-grid">';
  for (var i = 0; i < results.length; i++) {
    var p = results[i];
    html += '<div class="product-card">';
    html += '<div class="product-image"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy"></div>';
    html += '<div class="product-info">';
    html += '<div class="product-name">' + p.name + "</div>";
    html += '<div class="product-price">' + formatPrice(p.price) + "</div>";
    html += '<div class="product-actions">';
    html += '<button class="btn-beli" onclick="addToCart(\'' + p.id + '\')">Beli</button>';
    html += '<button class="btn-detail" onclick="showDetail(\'' + p.id + '\')">Detail</button>';
    html += "</div>";
    html += "</div>";
    html += "</div>";
  }
  html += "</div>";
  container.innerHTML = html;
}

renderSubcategories();
