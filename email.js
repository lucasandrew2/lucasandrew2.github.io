var shown = false
function showhideEmail() {
    if (shown) {
        document.getElementByIId('email').innerHTML = "Show my email";
        shown = false;
    } else {
        var myemail = "<a href='mailto:andrewl2-waph" + "@" + "mail.uc.edu'>andrewl2-waph" + "@" + "mail.uc.edu</a>"
        document.getElementById('email').innerHTML = myemail;
        shown = true;
    }
}