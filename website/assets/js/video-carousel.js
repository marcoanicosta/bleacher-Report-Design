
var carouselLeft = 0;

var leftArrow = document.querySelector('.video-carousel-content-holders-arrow.left');
var video = document.querySelector('.video-carousel-content-holders-block-video')
var videos = document.querySelector('.video-carousel-content-holders-block');
var videosAll = document.querySelectorAll('.video-carousel-content-holders-block-video');
var firstElement = document.querySelectorAll('.video-carousel-content-holders-block-video--first')
var videoOffset = video.offsetWidth + 10;
console.log(carouselLeft)

var maxOffset = videos.offsetWidth - window.innerWidth + videoOffset/2;
var videoWidth = video.offsetWidth

next = 0
num = 0



function getContainer(className) {
  var container = document.querySelector(className);

  return function(index) {
    var current = container.children[index]
    var { x, width } = current.getBoundingClientRect()
    var elementCenter = x + width / 2
    return elementCenter
  }
}

function getTransition(_to) {
  return function(_from) {
    var transition = _to - _from
    return transition
  }
}
debugger
var screenWidthCenter =  window.innerWidth / 2
var getVideoCenter = getContainer('.video-carousel-content-holders-block')
var firstCenter = getVideoCenter(1)

var transitionToTheCenter = getTransition(screenWidthCenter)
var transition = transitionToTheCenter(firstCenter)

function (index)
this.index = 0

leftArrow.addEventListener('click', function(){


})

// /
// leftArrow.addEventListener('click', function(){
//
//
//     if (next === 1) {
//         if (carouselLeft < 0) {
//         carouselLeft += videoOffset/2
//         videos.style.left = carouselLeft + 'px';
//         next -=1;
//         }
//     } else if (carouselLeft < 0) {
//       carouselLeft += videoOffset
//       videos.style.left = carouselLeft + 'px';
//       next -=1;
//       }
//
//
//     if (carouselLeft === 0) {
//       leftArrow.classList.add('disabled');
//     } else {
//       leftArrow.classList.remove('disabled');
//     }
//     if (carouselLeft < -maxOffset) {
//       rightArrow.classList.add('disabled');
//     } else {
//       rightArrow.classList.remove('disabled');
//     }
//     console.log(carouselLeft)
//     console.log(next);
// });
//
// */


var rightArrow = document.querySelector('.video-carousel-content-holders-arrow.right');

  rightArrow.addEventListener('click', function(){


    if (next === 0 && carouselLeft > -maxOffset) {
        carouselLeft -= videoOffset/2 ;
        videos.style.left = carouselLeft + 'px';
        next +=1;


    } else if (carouselLeft > -maxOffset) {
        carouselLeft -= videoOffset;
        videos.style.left = carouselLeft + 'px';
        next +=1;
      }


    if (carouselLeft < -maxOffset) {
      rightArrow.classList.add('disabled');
    } else {
      rightArrow.classList.remove('disabled');
    }

    if (carouselLeft === 0) {
      leftArrow.classList.add('disabled');
    } else {
      leftArrow.classList.remove('disabled');
    }
    console.log(carouselLeft)
    console.log(next);

    centerFunction ()
});

var videoArrayAltered = Array.prototype.slice.call(videosAll)

function centerFunction (){
  for(index = 0; index < 3; index++){
      videosAll[0].classList.add('left')
      videosAll[1].classList.add('center')
      videosAll[2].classList.add('right')
    }
}

function arraySlice(){
  videoArrayAltered.shift();
}
function arrayPop(){
  videoArrayAltered.pop();
}


/*
  for (i = num; i < videosAll.length; i++)

console.log(videosAll[next]);
console.log(videosAll);
console.log(videoOffset)
console.log(videosAll[next]);
console.log(videosAll);
console.log(next)
console.log(videoOffset)
console.log(videosAll[next]);
console.log(videosAll);
console.log(next)


  videosAll.forEach(function (videosAll) {
    videosAll.classList.add('active')
    alert("Alert!")


  })
for (i = next; i < videosAll.length i++) {
  text += cars[i] + "<br>";
}
*/
