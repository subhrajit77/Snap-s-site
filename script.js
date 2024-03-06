

document.addEventListener('DOMContentLoaded', function() {
    // Get the buttons and dropdowns
    const featureBtn = document.getElementById('featureBtn');
    const featureDropdown = document.getElementById('featureDropdown');
    const companyBtn = document.getElementById('companyBtn');
    const companyDropdown = document.getElementById('companyDropdown');
  
    // Toggle dropdown visibility when clicking on the buttons
    featureBtn.addEventListener('click', function() {
      featureDropdown.classList.toggle('show');
    });
  
    companyBtn.addEventListener('click', function() {
      companyDropdown.classList.toggle('show');
    });
  
    // Close the dropdowns if the user clicks outside of them
    window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
          const dropdown = dropdowns[i];
          if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
          }
        }
      }
    });
  });
  