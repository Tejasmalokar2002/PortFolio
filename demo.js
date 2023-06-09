// Get the "Read More" button and the additional details element
var readMoreBtn = document.querySelector('.btn');
var additionalDetails = document.querySelector('.additional-details');

// Add a click event listener to the button
readMoreBtn.addEventListener('click', function() {
  // Toggle the visibility of the additional details
  if (additionalDetails.style.display === 'none') {
    additionalDetails.style.display = 'block';
    readMoreBtn.textContent = 'Read Less';
  } else {
    additionalDetails.style.display = 'none';
    readMoreBtn.textContent = 'Read More';
  }
});
