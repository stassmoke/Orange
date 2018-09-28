var modal = document.getElementById('modal');
var closeBtn = document.getElementsByClassName("modal__close")[0];




//Close on window//
window.onclick = function () {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//Close on btn//
closeBtn.addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = "none";
}

//Open Popup//
function openPopup() {
    var btns = document.querySelectorAll('.popup');

    for (var i = 0; i < btns.length; i++) {
        var element = btns[i];

        element.onclick = function() {
            event.preventDefault();
            var container = this.parentNode.parentNode;
            modal.style.display = "block";

            constructionPopup(container)
        }
    }
}
openPopup();

//Add to Popup content//
function constructionPopup(container) {
    var city = container.children[0].innerText;
    var date = container.children[1].innerText;
    var aircraft = container.children[2].innerText;
    var cityText = document.querySelector('.modal__text_city');
    var dateText = document.querySelector('.modal__text_date');
    var aircraftText = document.querySelector('.modal__text_aircraft');

    console.log(cityText);
    console.log(dateText);
    console.log(aircraftText);
    cityText.innerHTML = city;
    dateText.innerHTML = date;
    aircraftText.innerHTML = aircraft;
}










