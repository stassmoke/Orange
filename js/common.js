var modal = document.getElementById('myModal');

function openPopup() {
    var btns = document.querySelectorAll('.popup');

    for (var i = 0; i < btns.length; i++) {
        var element = btns[i];

        element.onclick = function() {
            event.preventDefault();
            var container = this.parentNode.parentNode;
            console.log(container)
            modal.style.display = "block";

            constructionPopup(container)
        }
    }
}

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

// function closePopup() {
//   var close = document.querySelector('close');
//   close.onclick = function () {
//   modal.style.display = "none";
// };
// }

// closePopup();
openPopup();

// openPopup();





window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// span.onclick = function () {
//     modal.style.display = "none";
// };




