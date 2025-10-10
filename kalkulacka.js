let display = document.getElementById('display');
document.querySelectorAll('button').forEach(btn => btn.onclick = () => {
  if (btn.textContent == 'C') display.value = '';
  else if (btn.textContent == '=') display.value = eval(display.value || '0');
  else display.value += btn.textContent;
});
