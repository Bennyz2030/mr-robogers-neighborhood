function roboTranslate(input) {
  const outputArray = [];
  for (i=0; i<=input; i++) {
  outputArray.push([i].toString()); {
  if ([i].toString().includes("1")) {
    outputArray.splice(i, 1, "Beep!");
      }
    }
  }
  return outputArray;
}