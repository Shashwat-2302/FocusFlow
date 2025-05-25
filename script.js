const cmingUp = document.querySelectorAll(".cmingup");

cmingUp.forEach(clk => {
    clk.addEventListener("click", function(event){
        event.preventDefault();
        alert("Coming Soon..");
    });
});

const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check if user has a saved preference
if(localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  toggleBtn.textContent = '☀️'; // sun icon for light theme active
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  
  if(body.classList.contains('light-theme')) {
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});
