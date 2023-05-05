const fInput = document.getElementById("first-input"),
  sInput = document.getElementById("second-input"),
  calButtons = document.querySelectorAll(".cal-button"),
  resetButton = document.getElementById("reset-button"),
  layarHasil = document.getElementById("result");

const warning = "harus number ya..!";

calButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const fNum = parseInt(fInput.value);
    const lNum = parseInt(sInput.value);

    if (button.name === "add") {
      const result = fNum + lNum;
      cetakLayar(result);
    } else if (button.name === "subtract") {
      const result = fNum - lNum;
      cetakLayar(result);
    } else if (button.name === "multiply") {
      const result = fNum * lNum;
      cetakLayar(result);
    } else if (button.name === "divide") {
      const result = fNum / lNum;
      cetakLayar(result.toFixed(3));
    }
  });
});

resetButton.addEventListener("click", reset);

// cetak hasil ke layar
function cetakLayar(result) {
  if (isNaN(result)) {
    layarHasil.innerHTML = warning;
  } else {
    layarHasil.innerHTML = result;
  }
}

// tombol reset
function reset() {
  layarHasil.innerHTML = 0;
  fInput.value = 0;
  sInput.value = 0;
}
