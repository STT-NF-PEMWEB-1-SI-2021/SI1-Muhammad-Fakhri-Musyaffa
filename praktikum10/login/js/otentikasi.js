function logins() {
    if (form.id.value == "fakhrii") {
        if (form.pass.value == "ya") {
            location.href= "berhasil.html"
        } else {
            alert("Invalid Password")
        }
    } else {
        alert("Invalid UserID")
    }
}
