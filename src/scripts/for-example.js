document.documentElement.pageScrollIndicator({
    zIndex: 100,
    height: 8,
    opacity: 1,
    bottom: true,
    scrollLine: 'top',
    backgroundColor: 'pink',
    boxShadow: 'white',
    transition: '200ms',
});

document.querySelector('.example-one').pageScrollIndicator({
    zIndex: 100,
    height: 5,
    opacity: 0.7,
    put: true,
    scrollLine: 'top',
    backgroundColor: 'aqua',
    boxShadow: 'blue',
    transition: '400ms',
});

document.querySelector('.example-two').pageScrollIndicator({
    zIndex: 100,
    height: 10,
    opacity: 0.5,
    put: true,
    scrollLine: 'bottom',
    backgroundColor: '#6242d2',
    boxShadow: 'white',
    transition: '200ms',
});
