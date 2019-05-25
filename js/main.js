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