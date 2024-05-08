const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const meme = document.getElementById('meme');

const imageCollection = [
    '1003.png',
    'OVERFLOW.jpg',
    'lolp.jpg',
    'linux.jpg',
    'life nai.jpg',
    'html.jpg',
    'eyecontact.jpg',
    'culprit.jpg',
    'Ageo.jpg',
    '0-yessir.jpg',
    '0-tools.jpg',
    '0-lol4.jpg',
    '0-indie game developer.jpg',
    '0-imposter.jpg',
    'api.jpg',
    'troole.jpg',
    '0-git.jpg',
    '0-htmk.jpg',
    

];
let counter = 0;

function showImage(index){
    if(index >= 0 && index < imageCollection.length)
        meme.src = imageCollection[index];
        counter = index;
}

prevBtn.addEventListener('click', () => {
    counter--;
    if(counter < 0){
        counter = imageCollection.length - 1;
        
    }
    
    showImage(counter);
});

nextBtn.addEventListener('click', () => {
    counter++;
    if(counter >= imageCollection.length){
        counter = 0;
        
    }
    showImage(counter);
});

showImage(counter);