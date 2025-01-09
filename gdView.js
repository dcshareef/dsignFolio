// Select the modal and its elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Add click event to all project items
document.querySelectorAll('.projectItem').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const imgSrc = item.querySelector('img').src; // Get the image source inside the clicked project item
        modalImg.src = imgSrc; // Set modal image source
        modal.style.display = 'flex'; // Show modal
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal only when clicking on the background (not the image or close button)
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});