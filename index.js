function validateForm() {
    let pass = document.forms["password"]["fname"].value;
    if (pass === "") {
        alert("Password must be filled out");
        return false;
    } else if (pass === "Dora_I$_a_bettername") {
        console.log("What's good Nora");
        return false;
    } else if (pass === "thisONEasianP3rson") {
        console.log("Leilah");
        return false;
    } else if (pass === "kindergartenbros") {
        window.location.href = "/ggwp/0349673763578xxx68964.html";
        return false;
    } else if (pass === "B3tter_than_swarit!") {
        window.location.href = "/ggwp/7757877838794578334500xx.html"
        return false;
    } else if (pass == " "){
        //f
    } else {
        alert("Incorrect password");
        return false;
    }
}

