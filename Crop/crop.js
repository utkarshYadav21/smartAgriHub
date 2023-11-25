// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".navbar");
//   if (window.scrollY > 5) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });
const crop_form = document.getElementById("crop-form");

function getCrop() {
  const Nitrogen = crop_form.nitrogen.value;
  const Phosphorus = document.getElementById("phosphorus").value;
  sessionStorage.setItem("phosphorus",Phosphorus);
  const Rainfall = document.getElementById("rainfall").value;
  const Temperature = document.getElementById("temperature").value;
  const Humidity = document.getElementById("humidity").value;
  const Ph = document.getElementById("ph").value;
  sessionStorage.setItem("PH",Ph)
  const Potassium = document.getElementById("potassium").value;
  sessionStorage.setItem("potassium",Potassium);

  const url = "http://127.0.0.1:8000/crop_prediction";
  const inputForModel = {
    nitrogen: parseFloat(Nitrogen),
    phosphorus: parseFloat(Phosphorus),
    potassium: parseFloat(Potassium),
    temperature: parseFloat(Temperature),
    humidity: parseFloat(Humidity),
    ph: parseFloat(Ph),
    rainfall: parseFloat(Rainfall),
  };

  const inputJson = JSON.stringify(inputForModel);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: inputJson,
  })
    .then((response) => response.text())
    .then((data) => {
      const ndata = JSON.parse(data);
      console.log(ndata);
      console.log(ndata.predicted_crop)
      localStorage.setItem("predictedCrop", ndata.predicted_crop);
      crop_form.reset();
      window.location.href = "./result.html";
    })
    .catch((error) => alert("Error:", error.message));
}