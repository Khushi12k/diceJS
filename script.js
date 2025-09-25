 const playbtn = document.getElementById("playbtn");
    const mainPage = document.querySelector(".mainPage");
    const parentNextPage = document.querySelector(".parentNextPage");
    const scoreContent = document.querySelector(".score-content h1");
    const flexNumber = document.querySelectorAll(".number");
    const diceScrollImage = document.querySelector(".diceScroll-image img");
    const errorBox = document.querySelector(".error-msg");
    const resetbtn = document.querySelector(".resetbtn");
    let score = 0;

    const images = [
      "dice-images/dice_1.png",
      "dice-images/dice_2.png",
      "dice-images/dice_3.png",
      "dice-images/dice_4.png",
      "dice-images/dice_5.png",
      "dice-images/dice_6.png"
    ];

   //it shows the second game page after one click on play game btn
    playbtn.addEventListener("click", () => {
      mainPage.style.display = "none";
      parentNextPage.style.display = "block";
    });

    // the one integer from 1,2,3,4,5,6 is selected 
    let selectedNumber = undefined;
    flexNumber.forEach((element) => {
      element.addEventListener("click", function () {  
        flexNumber.forEach(el => el.classList.remove("active"));

        element.classList.add("active");
        selectedNumber = Number(element.innerText);
        errorBox.style.display = "none";
       
      })
    });

    //when we don't click on number or not selected the numbers then the errorbox is show
    diceScrollImage.addEventListener("click", () => {
      if (selectedNumber === undefined) {
        errorBox.style.display = "block";
        return;
      }

      let randomNumber = Math.floor(Math.random() * 6) + 1;
      diceScrollImage.src = images[randomNumber - 1];


      if (randomNumber === selectedNumber) {
        score += 10;
      } else {
        score -= 5;
      }
      scoreContent.innerText = `${score} Score`;

      
      selectedNumber = undefined;
      flexNumber.forEach(el => el.classList.remove("active"));
    });

    
    resetbtn.addEventListener("click", () => {
      score = 0;
      scoreContent.innerText = "0 Score";
      errorBox.style.display = "none";
      diceScrollImage.src = images[0]; 
    });