
const h4 = document.querySelector("#description h4");
const info = document.querySelector("#info");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.innerHTML == "Vision") {
      h4.innerHTML = "Vision";
      info.innerHTML =
        " The pillars of the Vision are the following: – People first: developing social and human capital and empowering women – Growth: sustained, indigenous, and inclusive growth – Governance: democratic governance – institutional reform and modernisation of the public sector – Security: energy, water and food security";
      buttons[0].classList.add("style");
      buttons[1].classList.remove("style");
      buttons[2].classList.remove("style");

    } else if (button.innerHTML == "History") {
      h4.innerHTML = "History";
      info.innerHTML = "In the first half of the 19th century, the region was appropriated by the East India Company, followed, after 1857, by 90 years of direct British rule, and ending with the creation of Pakistan in 1947, through the efforts, among others, of its future national poet Allama Iqbal and its founder, Muhammad Ali Jinnah";
      buttons[1].classList.add("style");
      buttons[0].classList.remove("style");
      buttons[2].classList.remove("style");

    } else if (button.innerHTML == "Goals") {
      h4.innerHTML = "Goals";
      info.innerHTML = "Pakistan has prioritized the Sustainable Development Goals which will enable us to join the league of upper middle class countries by 2030. Pakistan was the first country to adopt SDGs 2030 agenda through a unanimous resolution of parliament.";
      buttons[0].classList.remove("style");
      buttons[1].classList.remove("style");
      buttons[2].classList.add("style");
    }
  });
});
