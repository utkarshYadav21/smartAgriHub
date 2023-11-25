const predictedCrop = localStorage.getItem("predictedCrop");
const crop = document.querySelector(".head");
const Phosphorus = sessionStorage.getItem("phosphorus");
const Ph = sessionStorage.getItem("PH");
const Potassium = sessionStorage.getItem("potassium");
const nutrient = document.querySelector(".crop-info");
const actions = document.querySelector(".actions");

const suggestedCrop=predictedCrop.charAt(0).toUpperCase() + predictedCrop.slice(1);
const html = `<h1>Suggested Crop for the soil is: ${suggestedCrop}</h1>`;
crop.insertAdjacentHTML("beforeend", html);

if (Phosphorus < 25) {
  const nut1 = `<h2 class="high-low">The phosphorus content is too low</h2>`;
  const content = `<li>Enhance soil fertility by incorporating well-rotted manure or compost for organic phosphorus enrichment.</li>
    <li>Integrate phosphorus-accumulating cover crops like legumes into your crop rotation system.</li>
    <li>Employ precision agriculture techniques to target phosphorus application, optimizing efficiency and reducing environmental impact.</li>`;
  nutrient.insertAdjacentHTML("afterbegin", nut1);
  actions.insertAdjacentHTML("afterbegin", content);
}
if (Phosphorus > 40) {
  const nut2 = `<h2 class="high-low">The phosphorus content is too high</h2>`;
  const content2 = `<li>Use phosphorus-absorbing materials like iron compounds.</li>
      <li>Choose fertilizers with lower phosphorus content to prevent over-application.</li>
      <li>Manage manure application carefully to avoid excessive phosphorus input.</li>
      <li>Consider using phosphorus-fixing plants in strategic areas to immobilize excess phosphorus.</li>`;
  nutrient.insertAdjacentHTML("afterbegin", nut2);
  actions.insertAdjacentHTML("afterbegin", content2);
}

if (Potassium < 35) {
  const nut3 = `<h2 class="high-low">The potassium content is too low</h2>`;
  const content3 = `<li>Apply potassium-rich fertilizers to replenish soil potassium levels.</li>
      <li>Incorporate organic matter, such as compost or manure, to improve potassium availability.</li>
      <li>Consider using cover crops that enhance potassium cycling in the soil.</li>`;
  nutrient.insertAdjacentHTML("afterbegin", nut3);
  actions.insertAdjacentHTML("afterbegin", content3);
}

if (Potassium > 50) {
  const nut4 = `<h2 class="high-low">The potassium content is too high</h2>`;
  const content4 = `<li>Adjust fertilizer application to reduce potassium inputs and avoid excess accumulation.</li>
      <li>Consider crops with lower potassium requirements for the next planting season.</li>
      <li>Use potassium-competitive crops to mitigate excessive nutrient uptake.</li>
      <li>Regularly test soil to monitor potassium levels and adjust fertilization practices accordingly.</li>`;
  nutrient.insertAdjacentHTML("afterbegin", nut4);
  actions.insertAdjacentHTML("afterbegin", content4);
}

if (Ph > 7.5) {
  const nut5 = `<h2 class="high-low">The pH level is too high</h2>`;
  const content5 = `<li>Amend the soil with organic matter to improve soil structure and buffer pH.</li>
      <li>Consider using acidifying fertilizers to lower the soil pH gradually.</li>
      <li>Choose crops that are well-suited to higher pH conditions.</li>`;
  nutrient.insertAdjacentHTML("afterbegin", nut5);
  actions.insertAdjacentHTML("afterbegin", content5);
}

if (Ph < 5.5) {
  const nut6 = `<h2 class="high-low">The pH level is too low</h2>`;
  const content6 = `<li>Apply agricultural lime to raise soil pH gradually.</li>
      <li>Incorporate organic matter to improve soil structure and nutrient availability.</li>
      <li>Select crops adapted to lower pH conditions.</li>`;
  nutrient.insertAdjacentHTML("afterbegin", nut6);
  actions.insertAdjacentHTML("afterbegin", content6);
}
else{
    const nut7=`<h2>The soil is in good health follow the following actions to keep it same way.</h2>`
    const content7=`<li>Ensure proper irrigation for cultivation.</li>
    <li>Monitor soil conditions regularly.</li>
    <li>Consider using organic fertilizers for better yield.</li>
    <li>Practice minimal tillage to reduce soil disturbance, maintain soil structure, and preserve beneficial microorganisms.</li>`
    nutrient.insertAdjacentHTML("afterbegin", nut7);
    actions.insertAdjacentHTML("afterbegin", content7);
}
