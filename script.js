// Opções do Menu oculto da web
function menu(){
    var list_oculta = document.querySelector(".campe_list");

    if (list_oculta.style.display === 'block'){
        list_oculta.style.display= "none";
    } else{
        list_oculta.style.display= "block";
    }
}


// Mudar a foto da capa sozinho
const imagens = [
    'https://w0.peakpx.com/wallpaper/105/594/HD-wallpaper-video-game-minecraft.jpg',
    'https://4kwallpapers.com/images/wallpapers/mercedes-amg-gt3-2560x1440-11315.jpg',
    'https://wallpapers.com/images/hd/counter-strike-global-offensive-desktop-gvy020lt6pjvnze8.jpg',
    'https://images5.alphacoders.com/596/thumb-1920-596248.jpg',
    'https://wallpapercat.com/w/full/f/e/c/2475-1920x1080-desktop-1080p-grand-theft-auto-5-background-image.jpg',
    'https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-6608fb6c4c56c07b9a7caa34c6e6ee37'
];

let indice = 0;

function mudarImagem() {
    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }
    
    document.querySelector('.banner_png').src = imagens[indice];
}

setInterval(mudarImagem, 3000);