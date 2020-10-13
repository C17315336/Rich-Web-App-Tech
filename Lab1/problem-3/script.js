function addItem() {

    var input = document.getElementById("newItemInput").value;
    var colour = document.getElementById("colour").value;

    if (input === "") {
        alert("You can not add an empty note");
        return;
    }

    let div = document.createElement("div");
    div.className = colour + " sticky";
    let text1 = document.createTextNode(input);
    div.appendChild(text1);

    document.getElementById("myStick").appendChild(div)
    document.getElementById("myStick").style = "white-space: pre;"
    document.getElementById("newItemInput").value = "";
    document.getElementById("colour").value = "yellow";

    for (i = 0; i < del.length; i++) {
        del[i].ondblclick = function () {
            var div = this;
            div.style.display = "none";
        }
    }

    for (i = 0; i < upd.length; i++) {
        upd[i].onclick = function (e) {
            if (e.shiftKey && e.button == 0) {
                var theText = this;
                this.setAttribute("id", "pending");
                var theEditor = document.getElementById("ta1");
                var editorArea = document.getElementById("editor");
                var subject = theText.innerHTML;
                theEditor.value = subject;
                editorArea.style.display = "inline";
                var container = document.getElementById("myStick");
                container.style["pointer-events"] = "none";
            }
        }
    }
}

var del = document.getElementsByClassName("sticky");
var i;
for (i = 0; i < del.length; i++) {
    del[i].ondblclick = function () {
        var div = this;
        div.style.display = "none";
    }
}

var upd = document.getElementsByClassName("sticky");
var i;
for (i = 0; i < upd.length; i++) {
    upd[i].onclick = function (e) {
        if (e.shiftKey && e.button == 0) {
            var theText = this;
            this.setAttribute("id", "pending");
            var theEditor = document.getElementById("ta1");
            var editorArea = document.getElementById("editor");
            var subject = theText.innerHTML;
            theEditor.value = subject;
            editorArea.style.display = "inline";
            var container = document.getElementById("myStick");
            container.style["pointer-events"] = "none";
        }
    }
}

function doEdit() {
    var theText = document.getElementById("pending");
    var theEditor = document.getElementById("ta1");
    var editorArea = document.getElementById("editor");
    var subject = theEditor.value;
    theText.innerText = subject;
    editorArea.style.display = "none";
    theText.removeAttribute("id", "");
    var container = document.getElementById("myStick");
    container.style["pointer-events"] = "all";
};
