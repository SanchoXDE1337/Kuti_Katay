/*const

window.addEventListener('scroll', function() {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
});

window.scrollTo(pageX,pageY)
/!*

elem.scrollIntoView(top)*!/*/
const clientHeight = document.documentElement.clientHeight;
let scrollPos = 0;
let scrollDirection = '';

const scroller = (scrollDirection) =>   {
    if (scrollDirection === 'Down') {
        window.scrollTo(0,pageYOffset+clientHeight)
    } else {
        window.scrollTo(0,pageYOffset-clientHeight)
    }
};

window.addEventListener('scroll', function(){
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        scrollDirection = 'Up';
    } else {
        scrollDirection = 'Down';
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
    setTimeout(scroller, 500, scrollDirection)
});