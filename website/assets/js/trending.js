var showMore  = document.querySelector('.trending-content-show-more')
var hiddenElements = document.querySelectorAll('.trending-content-content-holder--hidden')


showMore.addEventListener('click', function(){
  console.log('buttonClicked');
  console.log(hiddenElements);

  hiddenElements.forEach(function (hiddenElement) {
    hiddenElement.classList.remove('trending-content-content-holder--hidden')
  })
})
