// if td starts with - then make it in red coloe and if it starts with + then make it in green color

var td = document.getElementsByTagName("td");
for (var i = 0; i < td.length; i++) {
  if (td[i].innerHTML.startsWith("-")) {
    td[i].style.color = "red";
  } else if (td[i].innerHTML.startsWith("+")) {
    td[i].style.color = "green";
  }
}


// Onclick om title class shoudl pop an alert
showDetails = () => {
    alert("This website is ideal for anyone who wants to learn more about the impacts of different government policies on their household. This includes people who are planning to vote in an upcoming election, as well as those who are simply interested in learning more about how government policies can affect their finances.");
}