
$.ajax({
  url: "php/CheckFloder.php",
  success: function(data) 
  {
    picturesName = data.split(".jpg");
    picturesName.splice(picturesName.indexOf('...'));
    slider.src = `img/myWorks/${picturesName[1]}.jpg`;
  }   
});

var picturesName = [];
var slideIndex = 1;
var timer;
var slider = document.getElementById("slider");
showSlides(slideIndex); 

function plusSlides(index) 
{
  showSlides(slideIndex += index);
}

function showSlides(count) 
{

  if(count == picturesName.length) 
  {
    slideIndex = 1;
  }

  if(count == 0)
  {
    slideIndex = picturesName.length - 1;
  }

  slider.src = `img/myWorks/${picturesName[slideIndex]}.jpg`;
  
  clearTimeout(timer);
  timer = setTimeout(() => plusSlides(1), 3000);
  
} 

