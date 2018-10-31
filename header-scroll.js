const headerTag = document.querySelector("img.logo")
const header = document.querySelector("header")


// adds a class on scroll after a certain pixel height on the page
const toggleHeader = function() {
  const pixels = window.pageYOffset

  if (pixels > 100) {
    headerTag.classList.add("scrolled")
  } else {
    headerTag.classList.remove("scrolled")
  }
}

const sticky = function() {

  const pixels = window.pageYOffset

  if (pixels > 100) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky")
  }


}

toggleHeader()
sticky()


document.addEventListener("scroll", function() {
  toggleHeader()
  sticky()
})

console.log('hello');
