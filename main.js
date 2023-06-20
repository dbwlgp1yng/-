const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

window.addEventListener('load', () => {

    const targetRect = target.getBoundingClientRect();
    const targetRectHalfWidth = targetRect.width / 2;
    const targetRectHalfHeight = targetRect.height / 2;

    document.addEventListener('mousemove', event => {
        const x = event.clientX;
        const y = event.clientY;
    
        console.log(`${x}, ${y}`);
    
        target.style.transform = `
            translate(${x - targetRectHalfWidth}px,
            ${y - targetRectHalfHeight}px)
        `;
    
        horizontal.style.transform = `translate(0,${y}px)`;
        vertical.style.transform = `translate(${x}px,0)`;
    
        tag.style.transform = `translate(${x}px,${y}px)`;
        tag.innerHTML = `x축: ${x}px, y축: ${y}px`;
    });
    
})


