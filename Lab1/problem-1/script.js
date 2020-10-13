function addItem() {
    var input = document.getElementById("newItemInput").value;
    if (input === '') {
        alert("Text field cannot be empty");
    } else {
        var li = document.createElement("li");
        var text = document.createTextNode(input);
        li.appendChild(text);
        document.getElementById("newItemInput").value = "";
        document.getElementById("myList").appendChild(li);
    }
}
