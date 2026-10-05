const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const extensions = ["jpg", "jpeg", "png", "webp"];

document.querySelectorAll("[data-photo]").forEach((frame) => {
  const base = frame.getAttribute("data-photo");
  const alt = frame.getAttribute("data-alt") || "";

  const attempt = (index) => {
    if (index >= extensions.length) return;
    const img = new Image();
    img.alt = alt;
    img.onload = () => {
      frame.classList.add("has-photo");
      frame.appendChild(img);
    };
    img.onerror = () => attempt(index + 1);
    img.src = `${base}.${extensions[index]}`;
  };

  attempt(0);
});

const copyBtn = document.querySelector("#copy-address-btn");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const text = "Büyükesat Mahallesi, Mahatma Gandhi Caddesi No:68/8, Çankaya / Ankara";
    const span = copyBtn.querySelector("span");
    const originalText = span ? span.textContent : copyBtn.textContent;

    const showSuccess = () => {
      if (span) span.textContent = "Adres Kopyalandı ✓";
      else copyBtn.textContent = "Adres Kopyalandı ✓";
      copyBtn.classList.add("copied");

      setTimeout(() => {
        if (span) span.textContent = originalText;
        else copyBtn.textContent = originalText;
        copyBtn.classList.remove("copied");
      }, 2500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(showSuccess).catch(() => {
        fallbackCopy(text, showSuccess);
      });
    } else {
      fallbackCopy(text, showSuccess);
    }
  });
}

function fallbackCopy(text, callback) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    callback();
  } catch (err) {
    console.error("Kopyalama başarısız:", err);
  }
  document.body.removeChild(textarea);
}
