let offset = 0 // смещение от левого края
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click', function () {
  offset = offset + 130 // offset += 130
  if (offset > 390) {
    offset = 0
  }
  sliderLine.style.left = -offset + 'px'
})

document.querySelector('.slider-prev').addEventListener('click', function () {
  offset = offset - 130 // offset -= 130
  if (offset < 0) {
    offset = 390
  }
  sliderLine.style.left = -offset + 'px'
})
