function Calculate() {
  var hours1 = document.getElementById("hours1").value;
  var hours2 = document.getElementById("hours2").value;
  var hours3 = document.getElementById("hours3").value;
  var hours4 = document.getElementById("hours4").value;
  var hours5 = document.getElementById("hours5").value;
  console.log(hours1);
  console.log(hours2);
  console.log(hours3);
  console.log(hours4);
  console.log(hours5);

  var total= parseFloat(hours1)+parseFloat(hours2)+parseFloat(hours3)+parseFloat(hours4)+parseFloat(hours5);
  if (!isNaN(total))
  {
  	document.getElementById("total").innerHTML="The answer is"+total;
  }
}