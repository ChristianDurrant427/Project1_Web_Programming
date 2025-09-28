var modal = document.getElementById("ImageModal");


var img = document.getElementById("img1")

var modalIMG = document.getElementById("img01")
img.onclick = function() {
    modal.style.display = "block";
    modalIMG.src = this.src;
}

var span = document.getElementById("close")[0];

span.onclick = function() {
    modal.style.display = "none"
}

div.onclick = function() {
    modal.style.display = "none"
}
