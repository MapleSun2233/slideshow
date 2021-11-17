(function(){

    let container = document.querySelector(".container");
    let index = 0;
    let controls = document.querySelector(".controls");
    let view = document.querySelector(".view");
    let timer = null;
    view.addEventListener("mouseenter",function(){
        clearInterval(timer);
    },false);
    view.addEventListener("mouseleave",function(){
        setTimeInterval();
    },false);
    controls.addEventListener("click",function(event){
        let i = event.target.dataset.index;
        container.style.transition = "left 1s";
        container.style.left = i*-100 + '%';
        clearTransition();
        setActive(i);
    },false);
    setTimeInterval();
    function setActive(targetIndex){
        for(let i = 0 ; i < controls.children.length; i++)
                if(controls.children[i].dataset.index == targetIndex)
                    controls.children[i].classList.add('active');
                else
                    controls.children[i].classList.remove('active');
    }
    function setTimeInterval(){
        timer = setInterval(function(){
            index-= 100;
            container.style.transition = "left 1s";
            container.style.left = index + '%';
            setActive(index == -300 ? 0 : -index/100);
            if(index == -300){
                clearTransition();
                setTimeout(function(){
                    container.style.left = '0%';
                    index = 0;
                },1100);
            }
        },2000);
    }
    function clearTransition(){
        setTimeout(function(){
            container.style.transition = "";
        },1000);
    }
})();