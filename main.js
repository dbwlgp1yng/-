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
        
        target.style.transform = `
            translate(
                ${x - targetRectHalfWidth}px,
                ${y - targetRectHalfHeight}px
            )`;
        vertical.style.transform = `translateX(${x}px )`;
        horizontal.style.transform = `translateY(${y}px)`;

        tag.style.transform = `translate(${x + 20}px,${y + 20}px)`;
        tag.innerHTML = `x축: ${x}px, y축: ${y}px`;
    });
    
})

