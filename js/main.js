"use strict";
//=============== Modal ================

//Get modal element
var modal = document.getElementById('simpleModal');
//Get open button
var  modalBtn = document.getElementById('modalBtn');
//Get close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];


//Listen for open click
modalBtn.addEventListener('click', openModal);

//Listen for close click
closeBtn.addEventListener('click', closeModal);

//Listen Outside click
window.addEventListener('click', clickOutside);

//Function to open modal
function openModal() {
 modal.style.display = 'block';
}

//Function to close modal
function closeModal() {
  modal.style.display = 'none';
}


//Function Outside close modal click
function clickOutside(event) {
  if (event.target == modal){
    modal.style.display = 'none';
  }
}
//=============== /Modal ================

/* Tabs for modal user and doctor */

window.onload = function () {

  document.querySelector('.simpleModal__tabs').addEventListener('click', fTabs);


  function fTabs(event) {
    if (event.target.className == 'tab-h') {

      //the number of the tab you want to display
      var dataTab = event.target.getAttribute('data-tab');

      //disable class active
      var tabH = document.getElementsByClassName('tab-h');

      for (var x = 0; x < tabH.length; x++) {
        tabH[x].classList.remove('active');
      }
      //add class active
      event.target.classList.add('active');

      //all tabs with content
      var tabBody = document.getElementsByClassName('tab-b');
      
      for (var x = 0; x < tabBody.length; x++) {
        if (dataTab == x) {
          tabBody[x].style.display = 'block';
        }
        else {
          tabBody[x].style.display = 'none';
        }
      }
    }
  }
};

/* / Tabs for modal user and doctor */






























