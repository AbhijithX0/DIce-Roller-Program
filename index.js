function rolldice(){
    const userInput = document.getElementById("userinput").value;
    const diceResult = document.getElementById("diceresult");
    const diceImages = document.getElementById("diceimages");

    let values = [];
    let images = [];



    for (let i = 0; i < userInput; i++) {

        const randomVal = Math.floor(Math.random() * 6)+1;
        values.push(randomVal);
        console.log(values);

        images.push(`<img src="images/dice${randomVal}.png">`)

        diceResult.textContent = `dice : ${values}`;

        diceImages.innerHTML = images.join(``)


    }
}

