const toggleBox = document.querySelector('.interrupter');
const toggleButton = toggleBox.querySelector('button')
const modeText = document.querySelector('.toggle span');
const body = document.querySelector('body')

toggleBox.addEventListener('click', toggleMode)

function toggleMode() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');

    toggleButton.classList.remove('dark');
    toggleButton.classList.add('light');
    modeText.innerHTML='Light Mode';
  } else {
    body.classList.remove('light');
    body.classList.add('dark');

    toggleButton.classList.remove('light');
    toggleButton.classList.add('dark');
    modeText.innerHTML='Dark Mode';
  }
} 