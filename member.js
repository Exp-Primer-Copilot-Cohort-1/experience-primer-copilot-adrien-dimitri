function skillsMember()  {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;

    var memberDiv = document.getElementById("memberDiv");

    if (memberValue == "yes")  {
        memberDiv.style.display = "block";
    } else  {
        memberDiv.style.display = "none";
    }
}