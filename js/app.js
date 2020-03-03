var items = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'
];

var itemsCreated = [];
var leftImage;
var centerImage;
var rightImage;
var leftImageObj;
var centerImageObj;
var rightImageObj;
var leftImageAttribute;
var centerImageAttribute;
var rightImageAttribute;
var views = 0;
var event;
var viewedImagesArr = [];
var imagesClicks = [];
var imagesViews = [];

function Item(name) {
  this.name = name.split(',')[0];
  this.imageUrl = `img/${this.name}`;
  this.clicks = 0;
  this.views = 0;
  itemsCreated.push(this);

}

for (var i = 0; i < items.length; i++) {
  new Item(items[i]);
}



while ((leftImageAttribute === centerImageAttribute || leftImageAttribute === rightImageAttribute) || centerImageAttribute === rightImageAttribute) {
  // console.log(event);
  createThreeRandImages();
}



var images = document.getElementsByTagName('img');
for (var j = 0; j < images.length; j++) {
  images[j].addEventListener('click', randomImage);
}




function randomImage(e) {

  console.log(e);
  views++;
  event = e;

  for (var k = 0; k < itemsCreated.length; k++) {
    if (event.target.alt === itemsCreated[k].name.split(',')[0]) {
      itemsCreated[k].clicks = itemsCreated[k].clicks + 1;
    }
  }

  for (var l = 0; l < itemsCreated.length; l++) {
    if (leftImage.alt === itemsCreated[l].name.split(',')[0]) {
      itemsCreated[l].views = itemsCreated[l].views + 1;
    }
    if (centerImage.alt === itemsCreated[l].name.split(',')[0]) {
      itemsCreated[l].views = itemsCreated[l].views + 1;
    }
    if (rightImage.alt === itemsCreated[l].name.split(',')[0]) {
      itemsCreated[l].views = itemsCreated[l].views + 1;
    }
  }

  for (var m = 0; m < images.length; m++) {
    if (views > 24) {
      images[m].removeEventListener('click', randomImage);
    }
  }


  if (views > 24) {
    createReport();
    for (var n = 0; n < itemsCreated.length; n++) {
      imagesClicks.push(itemsCreated[n].clicks);
      imagesViews.push(itemsCreated[n].views);
    }
    creatChart();
  }

  createThreeRandImages();

}












//Functions Appendix


function randNumb(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



function createThreeRandImages() {

  leftImageObj = itemsCreated[randNumb(0, itemsCreated.length - 1)];
  centerImageObj = itemsCreated[randNumb(0, itemsCreated.length - 1)];
  rightImageObj = itemsCreated[randNumb(0, itemsCreated.length - 1)];

  while (viewedImagesArr.includes(leftImageObj.name) || viewedImagesArr.includes(centerImageObj.name) || viewedImagesArr.includes(rightImageObj.name) || (leftImageObj.imageUrl === centerImageObj.imageUrl || leftImageObj.imageUrl === rightImageObj.imageUrl) || centerImageObj.imageUrl === rightImageObj.imageUrl) {
    console.log('repeated');
    leftImageObj = itemsCreated[randNumb(0, itemsCreated.length - 1)];
    centerImageObj = itemsCreated[randNumb(0, itemsCreated.length - 1)];
    rightImageObj = itemsCreated[randNumb(0, itemsCreated.length - 1)];
  }



  viewedImagesArr = [];


  viewedImagesArr.push(leftImageObj.name);
  viewedImagesArr.push(centerImageObj.name);
  viewedImagesArr.push(rightImageObj.name);

  leftImage = document.getElementById('left');
  leftImage.setAttribute('src', leftImageObj.imageUrl);
  leftImage.setAttribute('alt', leftImageObj.name);
  leftImageAttribute = leftImage.getAttribute('alt');

  centerImage = document.getElementById('center');
  centerImage.setAttribute('src', centerImageObj.imageUrl);
  centerImage.setAttribute('alt', centerImageObj.name);
  centerImageAttribute = centerImage.getAttribute('alt');

  rightImage = document.getElementById('right');
  rightImage.setAttribute('src', rightImageObj.imageUrl);
  rightImage.setAttribute('alt', rightImageObj.name);
  rightImageAttribute = rightImage.getAttribute('alt');

}

function createReport() {

  var information = document.getElementById('info');
  var list = document.createElement('ul');
  console.log(list);
  information.appendChild(list);
  for (var i = 0; i < items.length; i++) {
    var listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.textContent = `${itemsCreated[i].name.split(',')[0]} had ${itemsCreated[i].clicks} votes and was shown ${itemsCreated[i].views} times  `;
    console.log(listItem);
  }

}



function creatChart(){

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: items,

      datasets: [

        {

          label: '# of Votes',

          data: imagesClicks,

          backgroundColor: 'rgba(54, 162, 235, 0.2)',

          borderColor: 'rgba(75, 192, 192, 1)',

          borderWidth: 3
        },
        {
          label: '# of Views',

          data: imagesViews,

          backgroundColor: 'rgba(235, 54, 54, 0.2)',

          borderColor: 'rgb(192, 161, 75)',

          borderWidth: 3
        }
      ],

    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

