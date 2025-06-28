const input = document.getElementById('poundsInput');
const result = document.getElementById('result');
const copyIcon = document.getElementById('copyIcon');

input.addEventListener('input', () => {
  result.textContent = "Converting...";

  if (window.convertTimeout) {
    clearTimeout(window.convertTimeout);
  }

  window.convertTimeout = setTimeout(() => {
    const pounds = parseFloat(input.value);
    if (!isNaN(pounds)) {
      const kg = (pounds * 0.453592).toFixed(2);
      result.textContent = `${pounds} lbs = ${kg} kg`; // ✅ FIXED
    } else {
      result.textContent = "Please enter a valid number.";
    }

    // Auto clear after 5 seconds
    setTimeout(() => {
      result.textContent = "Result will appear after 10 seconds...";
      input.value = "";
    }, 5000);
  }, 10000);
});

copyIcon.addEventListener('click', () => {
  const text = result.textContent;
  if (text.includes("lbs =")) {
    navigator.clipboard.writeText(text);
    copyIcon.classList.replace('fa-copy', 'fa-check');
    setTimeout(() => {
      copyIcon.classList.replace('fa-check', 'fa-copy');
    }, 2000);
  }
});
