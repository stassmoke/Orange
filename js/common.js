var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var a = document.getElementsByClassName('popup');
// var t = document.getElementsByClassName('text');
var m  = document.getElementsByClassName("modal_inner")[0];




function OnStart() {

    var TableList = new Array();
    var tr = document.getElementById("ddReferences").getElementsByTagName("tr");
    for(var i=0;i<tr.length;i++) {

        var td = tr.item(i).getElementsByTagName("td");
        TableList[i] = new Array();
        for(var j=0;j<td.length;j++)
        {
            TableList[i][j] = td.item(j).innerText;
            console.log(td.item(j).innerText);
            m.innerHTML = td.item(j);
        }

    }

}
OnStart();

// function massOut() {
//     var t = document.getElementsByClassName("text2");
//     var str = '';
//     for (var i=0; i<t.length; i++) {
//         str += i +'====' + t[i]+'<br>';
//         // document.getElementsByClassName("modal_inner")[0].innerHTML = t[i]+ '<br>';
//         console.log(t)
//     }
//
// }
// massOut();
// var refTab = document.getElementById("ddReferences");
// var  ttl;
//
// for ( var i = 0; row = refTab.rows[i]; i++ ) {
//     row = refTab.rows[i];
//     for ( var j = 0; col = row.cells[j]; j++ ) {
//         var u = col.firstChild.nodeValue;
//         console.log(u);
//     }
//     m.innerText = u;
// }




for (var i=0; i<a.length; i++) {
    a[i].onclick = f1;

}

function  f1 () {
    event.preventDefault();
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


// var p = document.getElementsByClassName('popup');
// console.log(p);
// for (var i=0; i<p.length; i++) {
//     p[i].onclick = f1
// }