const bulbImage = document.getElementById("image1");

const OnButton = document.getElementById("button-on");

const offButton = document.getElementById("button-off")

const SwitchOn = () => {
    bulbImage.src = "Images/bulbon.jpg";

}

const SwitchOff = () => {
    bulbImage.src = "Images/bulboff.jpg";
}

OnButton.addEventListener('click', SwitchOn);

offButton.addEventListener('click', SwitchOff);





