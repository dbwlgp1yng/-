const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;

    console.log(`${x}, ${y}`);

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    horizontal.style.top = `${y}px`;
    vertical.style.left = `${x}px`;

    tag.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.innerHTML = `x축: ${x}px, y축: ${y}px`;
});



