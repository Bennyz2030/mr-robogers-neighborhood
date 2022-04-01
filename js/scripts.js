function roboTranslate(number) {
  let outputArray = [];
  for (i=0; i<=number; i++) {
    outputArray.push([i]);
    if ([i].includes("1")) {
      outputArray.slice(i, 1, "Beep!");
    }
  }
  return outputArray;
}