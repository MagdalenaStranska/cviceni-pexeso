// Oživte pexesové kartičky. Kliknutí na libovolnou kartičku by ji mělo obrátit. Další kliknutí by ji mělo vrátit do původního stavu.
// 1. Vycházejte ze šablony na GitHubu cviceni-pexeso.
// 2. Upravte soubor app.js tak, aby pomocí metody querySelectorAll prošel všechny prvky se třídou karticka a přidal jim posluchač události na kliknutí.
// 3. Pokud událost nastane odeberte nebo přidejte kartičce třídu otocena. Styly už máte nachystané. Kartička s třídou otocena uživateli obrázek skrývá. Po odebrání této třídy se obrázek ukáže.


console.log('Funguju!')


const karticky = document.querySelectorAll('.karticka')

karticky.forEach(karticka => {   
     karticka.addEventListener('click', e => {           e.target.classList.toggle('otocena')    })})
