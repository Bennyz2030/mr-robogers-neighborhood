function roboTranslate(input) {
  const outputArray = [];
  for (i=0; i<=input; i++) {
  outputArray.push([i].toString()); 
  if ([i].toString().includes("3")) {
    outputArray.splice(i, 3, "Won't you be my neighbor?");
  } else if ([i].toString().includes("2")) {
    outputArray.splice(i, 2, "Boop!");
  } else if ([i].toString().includes("1")) {
    outputArray.splice(i, 1, "Beep!")
    }
  }
  return outputArray;
}

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const outputArray = roboTranslate($("#user-input").val());
    $("#output").text(outputArray);
  });

  
});