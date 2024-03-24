

// document.addEventListener('DOMContentLoaded', function() {
//     // Get the buttons and dropdowns
//     const featureBtn = document.getElementById('featureBtn');
//     const featureDropdown = document.getElementById('featureDropdown');
//     const companyBtn = document.getElementById('companyBtn');
//     const companyDropdown = document.getElementById('companyDropdown');
  
//     // Toggle dropdown visibility when clicking on the buttons
//     featureBtn.addEventListener('click', function() {
//       featureDropdown.classList.toggle('show');
//     });
  
//     companyBtn.addEventListener('click', function() {
//       companyDropdown.classList.toggle('show');
//     });
  
//     // Close the dropdowns if the user clicks outside of them
//     window.addEventListener('click', function(event) {
//       if (!event.target.matches('.dropbtn')) {
//         const dropdowns = document.getElementsByClassName('dropdown-content');
//         for (let i = 0; i < dropdowns.length; i++) {
//           const dropdown = dropdowns[i];
//           if (dropdown.classList.contains('show')) {
//             dropdown.classList.remove('show');
//           }
//         }
//       }
//     });
//   });
//above js code has a glitch where the dropdowns are not closing when clicking outside of them. So, I have fixed it below. :)
  
// Close all dropdowns
// Function to handle dropdowns and company button click
function handleDropdownClick(element) {
  var dropdownContent = element.nextElementSibling;
  dropdownContent.classList.toggle('show');
  element.classList.toggle('open'); // Add or remove the 'open' class

  // Check if any other dropdown or company button is open, if yes, close it
  var allDropdowns = document.querySelectorAll('.dropdown-content');
  var allDropbtns = document.querySelectorAll('.dropbtn');
  var companyButton = document.getElementById('company');
  if (element !== companyButton && element.classList.contains('open')) {
      allDropbtns.forEach(function(btn) {
          if (btn !== element && btn.classList.contains('open')) {
              btn.classList.remove('open');
              btn.nextElementSibling.classList.remove('show');
          }
      });
  } else if (element === companyButton && element.classList.contains('open')) {
      allDropdowns.forEach(function(dropdown) {
          if (dropdown.classList.contains('show')) {
              dropdown.classList.remove('show');
              dropdown.previousElementSibling.classList.remove('open');
          }
      });
  }
}

// Add click event listeners for dropdown buttons and company button
document.querySelectorAll('.dropbtn, #company').forEach(function(element) {
  element.addEventListener('click', function() {
      handleDropdownClick(element);
  });
});

// Close the dropdown and company button when clicking outside of them
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('#company')) {
      var dropdowns = document.querySelectorAll('.dropdown-content');
      dropdowns.forEach(function(dropdown) {
          if (dropdown.classList.contains('show')) {
              dropdown.classList.remove('show');
              dropdown.previousElementSibling.classList.remove('open');
          }
      });
      var companyButton = document.getElementById('company');
      if (companyButton.classList.contains('open')) {
          companyButton.classList.remove('open');
      }
  }
};


  