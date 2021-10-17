const pagesContainer = document.querySelector('.pages');
const pageLink = document.getElementsByClassName('link');
const move = 20;

pagesContainer.addEventListener('mousemove', shadowText);
function shadowText(e) {
    const {offsetWidth: width, offsetHeight: height} = pagesContainer;
    let {offsetX: x, offsetY: y} = e;

    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;

    const xMove = Math.round(x/width*move) - (move/2);
    const yMove = Math.round(y/height*move) - (move/2);

    for (let i=0; i < pageLink.length; i++) {
        pageLink[i].style.textShadow = `${xMove}px ${yMove}px 10px black`;
    }
}
