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
]

var itemsCreated = [];
var leftImage;
var centerImage;
var rightImage;
var leftImageAttribute;
var centerImageAttribute;
var rightImageAttribute;
var views = 0;
var event;


function Item(name){
    this.name = name.split(',')[0];
    this.imageUrl = `img/${this.name}`;
    this.clicks = 0;
    this.views = 0;
    itemsCreated.push(this);

}

for(var i = 0; i< items.length ; i++){
    new Item(items[i]);
  }



  createThreeRandImages();




var images = document.getElementsByTagName('img');
for (var j = 0; j < images.length; j++){
    images[j].addEventListener('click', randomImage);
}




function randomImage(e){

    console.log(e);
    views++;
    event = e;

    for (var k = 0; k < itemsCreated.length; k++){
        if (event.target.alt === itemsCreated[k].name.split(',')[0]){
            itemsCreated[k].clicks = itemsCreated[k].clicks + 1;
        }
    }

    for (var l = 0; l < itemsCreated.length; l++){
        if (leftImage.alt === itemsCreated[l].name.split(',')[0]){
            itemsCreated[l].views = itemsCreated[l].views + 1;
        }
        if (centerImage.alt === itemsCreated[l].name.split(',')[0]){
            itemsCreated[l].views = itemsCreated[l].views + 1;
        }
        if (rightImage.alt === itemsCreated[l].name.split(',')[0]){
            itemsCreated[l].views = itemsCreated[l].views + 1;
        }
    }

    for (var m = 0; m < images.length; m++){
        if (views > 24){
            images[m].removeEventListener('click', randomImage);
        }
    }


    if (views > 24){
    createReport();
    }
   


createThreeRandImages();



    while ((leftImageAttribute === centerImageAttribute || leftImageAttribute === rightImageAttribute) || centerImageAttribute  === rightImageAttribute){
        console.log(event);
        createThreeRandImages();
    }
}












//Functions Appendix


function randNumb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



function createThreeRandImages(){
    var randomNumber = randNumb(0, itemsCreated.length -1);
    leftImage = document.getElementById('left');
    leftImage.setAttribute('src', itemsCreated[randomNumber].imageUrl);
    leftImage.setAttribute('alt', itemsCreated[randomNumber].name.split(',')[0]);
    leftImageAttribute = leftImage.getAttribute('alt');

    var randomNumber = randNumb(0, itemsCreated.length -1);
    centerImage = document.getElementById('center');
    centerImage.setAttribute('src', itemsCreated[randomNumber].imageUrl);
    centerImage.setAttribute('alt', itemsCreated[randomNumber].name.split(',')[0]);
    centerImageAttribute = centerImage.getAttribute('alt');

    var randomNumber = randNumb(0, itemsCreated.length -1);
    rightImage = document.getElementById('right');
    rightImage.setAttribute('src', itemsCreated[randomNumber].imageUrl);
    rightImage.setAttribute('alt', itemsCreated[randomNumber].name.split(',')[0]);
    rightImageAttribute = rightImage.getAttribute('alt');

}

function createReport(){

    var information = document.getElementById('info');
    var list = document.createElement('ul');
    console.log(list);
    information.appendChild(list);
    for (var i = 0; i < items.length; i++){
        var listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.textContent=`${itemsCreated[i].name.split(',')[0]} had ${itemsCreated[i].clicks} votes and was shown ${itemsCreated[i].views} times  `;
        console.log(listItem);
    }
    
}
