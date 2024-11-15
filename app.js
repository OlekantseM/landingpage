document.addEventListener('DOMContentLoaded', function () {
  const getStartedButton = document.querySelector('.main__btn');
  const fullScreenPopup = document.querySelector('.full-screen-popup');
  const closePopupButton = document.querySelector('.close-popup');

  //Ensure full-screen popup is hidden initially
  fullScreenPopup.style.display = 'none';

  //Show full-screen popup when Get Started button is clicked
    getStartedButton.addEventListener('click', function () {
    fullScreenPopup.style.display = 'flex';
  });

  //Close full-screen popup when close button (X) is clicked
    closePopupButton.addEventListener('click', function () {
    fullScreenPopup.style.display = 'none';
  });

  
});
