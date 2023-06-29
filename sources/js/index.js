$(function(){
    $("a").click(function()
    {
         return false; // prevent default browser refresh on "#" link
    });
});

// video size
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()