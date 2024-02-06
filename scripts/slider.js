let slides = document.getElementsByClassName('slide')
let slide_count = slides.length
let slide_index = 0

function next_slide() {
    show_slide((slide_index + 1) % slide_count)
}

function prev_slide() {
    show_slide((slide_index + slide_count - 1) % slide_count)
}

function show_slide(index) {
    slides[slide_index].classList.toggle('active')
    slides[index].classList.toggle('active')
    slide_index = index
}
