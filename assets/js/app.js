const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const meme = document.getElementById('meme');

const imageCollection = [
    '1022.png',
    '1021.png',
    '1020.png',
    '1019.png',
    '1018.png',
    '1017.png',
    '1016.png',
    '1015.png',
    '1014.png',
    '1013.png',
    '1012.png',
    '1011.png',
    '1010.png',
    '1009.png',
    '1008.png',
    'unnamed (2).jpg',
    'unnamed.jpg',
    '1007.png',
    '1006.png',
    '1005.png',
    '1004.png',
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