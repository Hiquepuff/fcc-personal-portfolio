$(document).ready(() => {
    $('a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();

            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, () => {
                window.location.hash = hash
            })
        }
    })
})