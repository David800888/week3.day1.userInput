const button = document.getElementById("submit_button");



button.addEventListener("click", clickListener);

function clickListener(event) {
    event.preventDefault()
    let noun = document.getElementById("noun").value
    let verb = document.getElementById("verb").value
    let adjective = document.getElementById("adjective").value
    let formContainer = document.getElementsByClassName("form_container")[0];
    if (noun == false || verb == false || adjective == false) {
      alert("Fill it in man!!");
    }
    else {
      let sentence = `Last night I ate a ${noun}, and today I just had to ${verb}. What a ${adjective} day!`
      document.getElementById("story_result").innerText = sentence;
      formContainer.style.display = "None";
    }
    /*const inputElement = document.getElementById("title_input");
    const userInput = inputElement.value;
    console.log(userInput);
    inputElement.value = "";*/
}

const titleInput = document.querySelector("#title_input");
titleInput.addEventListener("input", changeTitle);

function changeTitle(event) {
  event.preventDefault()
  const inputElement = document.getElementById("title_input");
  const userInput = inputElement.value;
  document.getElementById("main_title").innerText = userInput;
}

