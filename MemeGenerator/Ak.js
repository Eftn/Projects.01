
const createMeme = document.getElementById('create');
const allMemes = document.getElementById('allMemes');
const memeForm = document.getElementById('form');
let imageURL = document.getElementById('imageURL');
let textOnTop = document.getElementById('textOnTop');
let textOnBottom = document.getElementById('textOnBottom');

createMeme.addEventListener('submit', function(e){
    e.preventDefault();

    let newMeme = document.createElement('div');
    let top = document.createElement('div');
    let bottom = document.createElement('div');
    let newURL = `url(${imageURL.value})`; 
    let newTopText = textOnTop.value;
    let newBottomText = textOnBottom.value;

    newMeme.classList = "memeCard"
    newMeme.style.backgroundImage = newURL;
    top.classList = "top"; 
    top.innerText = newTopText;
    bottom.classList = "bottom"; 
    bottom.innerText = newBottomText;
    newMeme.append(top);

    newMeme.append(bottom);

    allMemes.append(newMeme);
    
    memeForm.reset();
});



allMemes.addEventListener('click', function(e){
    let clickedItem = e.target;
    clickedItem.remove();
});

allMemes.addEventListener('mouseover', function (e){
    let mouseOver = e.target;
    mouseOver.classList.add('hover');
});


allMemes.addEventListener('mouseout', function(e){
    let mouseOut = e.target;
    mouseOut.classList.remove('hover');
});
