/* =========================================================
   LASER.STORE
   STORE DATA
   عدّل البيانات هنا فقط
========================================================= */

const STORE = {

  // اسم المتجر
  name: "LASER.STORE",

  // رقم الهاتف
  phone: "2010XXXXXXXX",

  // رقم WhatsApp
  // اكتب الرقم بدون + وبدون مسافات
  // مثال: 01012345678 يصبح 201012345678
  whatsapp: "2010XXXXXXXX",

  // البريد الإلكتروني
  email: "info@laserstore-eg.com",

  // Instagram
  instagram: "https://instagram.com/yourusername",

  // Facebook
  facebook: "https://facebook.com/yourusername"

};


/* =========================================================
   PRODUCTS
   لإضافة منتج جديد:
   انسخ أي منتج والصقه في آخر القائمة
   ثم غيّر البيانات فقط
========================================================= */

const products = [

  /* =========================
     1 — مكاتب وشركات
     أطقم مكتب
  ========================= */

  {
    id: 1,
    name: "طقم مكتب خشبي",

    category: "office",
    sub: "desk",

    price: 650,

    material: "خشب",
    size: "حسب الطلب",

    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",

    desc: "طقم مكتب أنيق قابل للتخصيص بالاسم أو اللوجو.",

    badge: "الأكثر مبيعًا"
  },


  /* =========================
     2 — مكاتب وشركات
     لوحات مخصصة
  ========================= */

  {
    id: 2,
    name: "لوحة مخصصة بالاسم",

    category: "office",
    sub: "name",

    price: 250,

    material: "MDF",
    size: "30 × 20 سم",

    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&w=1000&q=85",

    desc: "لوحة اسم للمكتب أو الباب بتصميم حسب الطلب.",

    badge: "مميز"
  },


  /* =========================
     3 — مكاتب وشركات
     منظمات مكتب
  ========================= */

  {
    id: 3,
    name: "منظم مكتب",

    category: "office",
    sub: "organizer",

    price: 350,

    material: "MDF",
    size: "حسب الطلب",

    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85",

    desc: "منظم عملي للأقلام والكروت وإكسسوارات المكتب.",

    badge: "جديد"
  },


  /* =========================
     4 — هدايا
  ========================= */

  {
    id: 4,
    name: "هدية مخصصة",

    category: "gifts",
    sub: "personal",

    price: 280,

    material: "خشب / أكريليك",
    size: "حسب الطلب",

    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1000&q=85",

    desc: "هدية شخصية بالاسم أو العبارة التي تختارها.",

    badge: "مميز"
  },


  /* =========================
     5 — علب هدايا
  ========================= */

  {
    id: 5,
    name: "علبة هدايا",

    category: "boxes",
    sub: "boxes",

    price: 450,

    material: "خشب",
    size: "25 × 18 × 8 سم",

    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1000&q=85",

    desc: "علبة هدايا خشبية قابلة للتخصيص.",

    badge: "جديد"
  },


  /* =========================
     6 — ديكور
     ديكور حوائط
  ========================= */

  {
    id: 6,
    name: "ديكور حائط",

    category: "decor",
    sub: "wall",

    price: 350,

    material: "MDF",
    size: "50 × 50 سم",

    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85",

    desc: "قطعة ديكور عصرية بتفاصيل ليزر دقيقة.",

    badge: "مميز"
  },


  /* =========================
     7 — ديكور
     ساعات حائط
  ========================= */

  {
    id: 7,
    name: "ساعة حائط",

    category: "decor",
    sub: "clock",

    price: 550,

    material: "MDF",
    size: "50 سم",

    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85",

    desc: "ساعة حائط بتصميم ليزر هندسي.",

    badge: "جديد"
  },


  /* =========================
     8 — استاندات عرض
  ========================= */

  {
    id: 8,
    name: "ستاند عرض",

    category: "stands",
    sub: "display",

    price: 700,

    material: "MDF + Acrylic",
    size: "حسب الطلب",

    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",

    desc: "ستاند عرض للمحلات والفعاليات والشركات.",

    badge: "للشركات"
  },


  /* =========================
     9 — استاندات أكريليك
  ========================= */

  {
    id: 9,
    name: "ستاند أكريليك",

    category: "stands",
    sub: "acrylic",

    price: 500,

    material: "Acrylic",
    size: "حسب الطلب",

    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&w=1000&q=85",

    desc: "ستاند شفاف للمنتجات والـ Branding.",

    badge: ""
  }

];


/* =========================================================
   CATEGORIES
   لا تحتاج لتعديلها إلا لو أردت إضافة قسم جديد
========================================================= */

const cats = {

  all: "الكل",

  office: "مكاتب وشركات",

  gifts: "هدايا",

  decor: "ديكور",

  boxes: "علب هدايا",

  stands: "استاندات عرض"

};


/* =========================================================
   SUB CATEGORIES
========================================================= */

const subs = {

  office: {

    all: "الكل",

    desk: "أطقم مكتب",

    name: "لوحات مخصصة بالاسم",

    organizer: "منظمات مكتب"

  },


  decor: {

    all: "الكل",

    wall: "ديكور حوائط",

    clock: "ساعات حوائط"

  },


  gifts: {

    all: "الكل",

    personal: "هدايا شخصية"

  },


  boxes: {

    all: "الكل",

    boxes: "علب هدايا"

  },


  stands: {

    all: "الكل",

    display: "استاندات عرض",

    acrylic: "استاندات أكريليك"

  }

};


/* =========================================================
   PRICE FORMAT
========================================================= */

const money = n =>
  new Intl.NumberFormat("ar-EG").format(n) + " ج.م";


/* =========================================================
   PRODUCT CARD
   لا تعدل هنا
========================================================= */

function card(p) {

  return `

    <article class="product-card">

      <a
        class="product-image"
        href="product.html?id=${p.id}"
      >

        ${
          p.badge
            ? `<b class="badge">${p.badge}</b>`
            : ""
        }

        <img
          src="${p.image}"
          alt="${p.name}"
          loading="lazy"
        >

        <span class="view">
          عرض المنتج ↗
        </span>

      </a>


      <div class="product-info">

        <small>
          ${cats[p.category]}
        </small>


        <h3>

          <a href="product.html?id=${p.id}">
            ${p.name}
          </a>

        </h3>


        <p>
          ${p.material} • ${p.size}
        </p>


        <div class="product-bottom">

          <strong>
            ${money(p.price)}
          </strong>


          <button
            class="add-btn"
            onclick="addProduct(${p.id})"
          >
            أضف للسلة
          </button>

        </div>

      </div>

    </article>

  `;

}


/* =========================================================
   CART
   لا تعدل هنا
========================================================= */

function getCart() {

  try {

    return JSON.parse(
      localStorage.getItem("laserCart")
    ) || [];

  } catch (e) {

    return [];

  }

}


function saveCart(c) {

  localStorage.setItem(
    "laserCart",
    JSON.stringify(c)
  );

  updateCartCount();

}


function updateCartCount() {

  document
    .querySelectorAll("#cartCount")
    .forEach(e => {

      e.textContent =
        getCart().reduce(
          (s, i) => s + i.qty,
          0
        );

    });

}


function addProduct(id, qty = 1) {

  let cart = getCart();

  let item = cart.find(
    i => i.id === id
  );


  if (item) {

    item.qty += qty;

  } else {

    cart.push({
      id: id,
      qty: qty
    });

  }


  saveCart(cart);

  toast("تمت إضافة المنتج للسلة ✓");

}


/* =========================================================
   TOAST
========================================================= */

function toast(text) {

  let element =
    document.querySelector(".toast");


  if (!element) {

    element =
      document.body.appendChild(
        Object.assign(
          document.createElement("div"),
          {
            className: "toast"
          }
        )
      );

  }


  element.textContent = text;

  element.classList.add("show");


  clearTimeout(window.toastTimer);


  window.toastTimer =
    setTimeout(
      () =>
        element.classList.remove("show"),
      1700
    );

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  updateCartCount
);
