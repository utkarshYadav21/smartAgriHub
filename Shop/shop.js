const sell_tool = document.getElementById("sell-tools");
const sell_crop = document.getElementById("sell-crops");
const pop_up1 = document.querySelector("#popup-1");
const pop_up2 = document.querySelector("#popup-2");
const closeModal1 = document.querySelector(".close-modal-1");
const closeModal2 = document.querySelector(".close-modal-2");

sell_crop.addEventListener("click", () => {
  pop_up2.classList.remove("hidden");
});
sell_tool.addEventListener("click", () => {
  pop_up1.classList.remove("hidden");
});
closeModal1.addEventListener("click", function () {
  pop_up1.classList.add("hidden");
});
closeModal2.addEventListener("click", function () {
  pop_up2.classList.add("hidden");
});

// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".navbar");
//   if (window.scrollY > 5) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });

let toolObj = {
  name: "",
  mobile: "",
  price: "",
  brand: "",
  material: "",
  image: "",
};
function addTool() {
  if (validateTool()) {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("email").value;
    let price = document.getElementById("priceTool").value;
    let brand = document.getElementById("brand").value;
    let material = document.getElementById("datepicker").value;
    let image = document.getElementById("imgTool");
    toolObj.name = name;
    toolObj.mobile = mobile;
    price = price.replaceAll(",", "");
    price = new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
    }).format(price);
    toolObj.price = price;
    toolObj.brand = brand;
    toolObj.material = material;

    const reader = new FileReader();
    reader.addEventListener("load", function () {
      console.log(reader.result)
      set(reader.result);
      toolObj.image = reader.result;
    });

    function set(url) {
      toolObj.image = url;
      document.getElementById("addToolForm").reset();
      togglePopup();
      alert("Tool added successfully....");
      let ToolObj=JSON.stringify(toolObj)
      localStorage.setItem("toolArray",ToolObj);
    }
    reader.readAsDataURL(image.files[0]);
  }
}
function validateTool() {
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("email").value;
  let price = document.getElementById("priceTool").value;
  let brand = document.getElementById("brand").value;
  let material = document.getElementById("datepicker").value;

  if (name.length === 0) {
    document.getElementById("nameErr").innerHTML = "Please specify tool name";
    return false;
  } else document.getElementById("nameErr").innerHTML = "";
  var phoneno = /^\d{10}$/;
  let mob = mobile.replaceAll("-", "");
  console.log(mob);
  if (!mob.match(phoneno)) {
    document.getElementById("mailErr").innerHTML = "Enter correct no.";
    return false;
  } else document.getElementById("mailErr").innerHTML = "";
  if (price.length === 0) {
    document.getElementById("priceErr").innerHTML = "Please enter price";
    return false;
  } else document.getElementById("priceErr").innerHTML = "";

  if (brand.length === 0) {
    document.getElementById("brandErr").innerHTML = "Please specify Brand";
    return false;
  } else document.getElementById("brandErr").innerHTML = "";

  if (material.length === 0) {
    document.getElementById("materialErr").innerHTML =
      "Please specify Material";
    return false;
  } else document.getElementById("materialErr").innerHTML = "";
  return true;
}

let obj = {
  name: "",
  mobile: "",
  quantity: "",
  price: "",
  image: "",
};

function addCrop() {
  if (validateCrop()) {
    let name = document.getElementById("nameCrop").value;
    let mobile = document.getElementById("emailCrop").value;
    let quantity = document.getElementById("toolCrop").value;
    let price = document.getElementById("brandCrop").value;
    let image = document.getElementById("imgCrop");
    price = price.replaceAll(",", "");
    price = new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
    }).format(price);
    obj.name = name;
    obj.mobile = mobile;
    obj.quantity = quantity;
    obj.price = price;
    obj.image = image;
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      set(reader.result);
      toolObj.image = reader.result;
    });
    function set(url) {
      obj.image = url;
      document.getElementById("addCropForm").reset();
      togglePopup2();
      alert("Crop added successfully....");
      let cropObj = JSON.stringify(obj);
      localStorage.setItem("cropArray",cropObj);
    }
    reader.readAsDataURL(image.files[0]);
  }
}

function validateCrop() {
  let name = document.getElementById("nameCrop").value;
  let mobile = document.getElementById("emailCrop").value;
  let quantity = document.getElementById("toolCrop").value;
  let price = document.getElementById("brandCrop").value;
  let image = document.getElementById("imgCrop").value;
  if (name.length === 0) {
    document.getElementById("nameErrCrop").innerHTML =
      "Please specify crop name";
    return false;
  } else document.getElementById("nameErrCrop").innerHTML = "";
  var phoneno = /^\d{10}$/;
  let mob = mobile.replaceAll("-", "");
  console.log(mob);
  if (!mob.match(phoneno)) {
    document.getElementById("mailErrCrop").innerHTML = "Enter correct no.";
    return false;
  } else document.getElementById("mailErrCrop").innerHTML = "";
  if (quantity.length === 0) {
    document.getElementById("toolErrCrop").innerHTML =
      "Please specify quantity";
    return false;
  } else document.getElementById("toolErrCrop").innerHTML = "";
  if (price.length === 0) {
    document.getElementById("brandErrCrop").innerHTML = "Please enter price";
    return false;
  } else document.getElementById("toolErrCrop").innerHTML = "";
  return true;
}

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2() {
  document.getElementById("popup-2").classList.toggle("active");
}
