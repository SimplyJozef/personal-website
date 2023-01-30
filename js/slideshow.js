const screens = document.getElementsByClassName("screen");

let activeIndex = 0;


const rightClick = () => {
    
    const nextIndex = activeIndex + 1 <= screens.length - 1 ? activeIndex + 1 : 0;
    const currentScreen = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextScreen = document.querySelector(`[data-index="${nextIndex}"]`);

    currentScreen.dataset.status = "after";

    nextScreen.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextScreen.dataset.status = "active";
        activeIndex = nextIndex;
    })
    
}

const leftClick = () => {
    
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : screens.length - 1;
    const currentScreen = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextScreen = document.querySelector(`[data-index="${nextIndex}"]`);

    currentScreen.dataset.status = "before";

    nextScreen.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextScreen.dataset.status = "active";
        activeIndex = nextIndex;
    })
    
}

