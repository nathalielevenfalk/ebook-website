function userScroll() {
    const navbar = document.querySelector('.navbar');

    // window is the global object of the browser
    window.addEventListener('scroll', () => {
        // window object has a scrollY which means scroll on y-axes
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky'); // can call whatever, is to have opacity
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-sticky');
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);
