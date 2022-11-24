// FOR PALINDROME FUNC
document.getElementById("check-btn-1").onclick = () => {
    let text = String(document.getElementById("text-check-1").value);
    let last = text.length - 1;
    for (let i = 0; i < text.length / 2; i++) {
        if (text[i].toLocaleLowerCase() != text[last].toLocaleLowerCase()) {
            console.log("Given text : " + text + " is not palindrome");
            alert("Given text : " + text + " is not palindrome");
            return;
        }
        last--;
    }
    setTimeout(() => {
        document.getElementById("text-check-1").value = null;
        console.clear();
    }, 4000);
    console.log("Given text : " + text + " is Palindrome");
    alert("Given text : " + text + " is Palindrome");
}
////////////////////////////////////////////////////////////////////////////////////

//FOR ALPHABETICAL ORDER

document.getElementById("check-btn-2").onclick = () => {
    let text = String(document.getElementById("text-check-2").value);
    text = text.split("").sort().join("");
    document.getElementById("ouput-alpha-order").value = text;
    console.log(text);
    setTimeout(() => {
        document.getElementById("text-check-2").value = null;
        document.getElementById("ouput-alpha-order").value = null;
        console.clear();
    }, 4000);
}

////////////////////////////////////////////////////////////////////////////

//FOR AVERAGE MARKS USING ARRAY

document.getElementById("check-btn-3").onclick = () => {
    let arr = new Array();
    arr.push(Number(document.getElementById("marks-1").value));
    arr.push(Number(document.getElementById("marks-2").value));
    arr.push(Number(document.getElementById("marks-3").value));
    let avg = 0;
    for (let i in arr) {
        avg = avg + arr[i];
        console.log(avg);
    }
    avg = (avg / 3).toPrecision(4);
    document.getElementById("ouput-average").value = avg + " ";
    console.log("Avreage is :" + avg);
    setTimeout(() => {
        document.getElementById("marks-1").value = null;
        document.getElementById("marks-2").value = null;
        document.getElementById("marks-3").value = null;
        document.getElementById("ouput-average").value = null;
        console.clear();
    }, 4000);

}

/////////////////////////////////////////////////////////////////////////////