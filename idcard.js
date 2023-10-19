// elements
const container = document.createElement('div');
container.classList.add('container');

const formContainer = document.createElement('div');
formContainer.classList.add('form-container');

const h1 = document.createElement('h1');
h1.textContent = 'ID Card Generator';

const nameLabel = document.createElement('label');
nameLabel.for = 'name';
nameLabel.textContent = 'Full Name';

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.placeholder = 'Enter your full name';
nameInput.required = true;

const lineBreak1 = document.createElement('br');

const collegeLabel = document.createElement('label');
collegeLabel.for = 'college';
collegeLabel.textContent = 'College Name';

const collegeInput = document.createElement('input');
collegeInput.type = 'text';
collegeInput.id = 'college';
collegeInput.placeholder = 'Enter your college name';
collegeInput.required = true;

const lineBreak2 = document.createElement('br');

const registrationLabel = document.createElement('label');
registrationLabel.for = 'registration';
registrationLabel.textContent = 'Registration Number';

const registrationInput = document.createElement('input');
registrationInput.type = 'text';
registrationInput.id = 'registration';
registrationInput.placeholder = 'Enter your registration number';
registrationInput.required = true;

const lineBreak3 = document.createElement('br');

const mobileLabel = document.createElement('label');
mobileLabel.for = 'mobile';
mobileLabel.textContent = 'Mobile Number';

const mobileInput = document.createElement('input');
mobileInput.type = 'text';
mobileInput.id = 'mobile';
mobileInput.placeholder = 'Enter your mobile number';
mobileInput.required = true;

const lineBreak4 = document.createElement('br');

const pictureLabel = document.createElement('label');
pictureLabel.for = 'picture';
pictureLabel.textContent = 'Profile Picture';

const pictureInput = document.createElement('input');
pictureInput.type = 'file';
pictureInput.id = 'picture';
pictureInput.accept = 'image/*';
pictureInput.required = true;
const lineBreak5 = document.createElement('br');

const generateBtn = document.createElement('button');
generateBtn.id = 'generate-btn';
generateBtn.textContent = 'Generate ID Card';
generateBtn.onclick = generateIDCard;

const idCard = document.createElement('div');
idCard.id = 'id-card';

const photoDiv = document.createElement('div');
photoDiv.classList.add('photo');

const pictureCard = document.createElement('img');
pictureCard.id = 'picture-card';
pictureCard.src = 'placeholder-image.png';
pictureCard.alt = 'Profile Picture';

const dataDiv = document.createElement('div');
dataDiv.classList.add('data');

const nameCard = document.createElement('p');
nameCard.id = 'name-card';

const collegeCard = document.createElement('p');
collegeCard.id = 'college-card';

const registrationCard = document.createElement('p');
registrationCard.id = 'registration-card';

const mobileCard = document.createElement('p');
mobileCard.id = 'mobile-card';

// Append the elements to their parent elements
photoDiv.appendChild(pictureCard);

dataDiv.appendChild(nameCard);
dataDiv.appendChild(collegeCard);
dataDiv.appendChild(registrationCard);
dataDiv.appendChild(mobileCard);

idCard.appendChild(photoDiv);
idCard.appendChild(dataDiv);

formContainer.appendChild(h1);
formContainer.appendChild(nameLabel);
formContainer.appendChild(nameInput);
formContainer.appendChild(lineBreak1);
formContainer.appendChild(collegeLabel);
formContainer.appendChild(collegeInput);
formContainer.appendChild(lineBreak2);
formContainer.appendChild(registrationLabel);
formContainer.appendChild(registrationInput);
formContainer.appendChild(lineBreak3);
formContainer.appendChild(mobileLabel);
formContainer.appendChild(mobileInput);
formContainer.appendChild(lineBreak4);
formContainer.appendChild(pictureLabel);
formContainer.appendChild(pictureInput);
formContainer.appendChild(generateBtn);
formContainer.appendChild(lineBreak5);

container.appendChild(formContainer);
container.appendChild(idCard);

// Append the container element to the body of the document
document.body.appendChild(container);

// Define the generateIDCard function
function generateIDCard() {
  const name = document.getElementById('name').value;
  const college = document.getElementById('college').value;
  const registration = document.getElementById('registration').value;
  const mobile = document.getElementById('mobile').value;
  const picture = document.getElementById('picture').files[0];

  const pictureCard = document.getElementById('picture-card');
  const reader = new FileReader();

  reader.onload = function(event) {
    pictureCard.src = event.target.result;
  };

  reader.readAsDataURL(picture);

  document.getElementById('name-card').textContent = `Name: ${name}`;
  document.getElementById('college-card').textContent = `College: ${college}`;
  document.getElementById('registration-card').textContent = `Registration Number: ${registration}`;
  document.getElementById('mobile-card').textContent = `Mobile Number: ${mobile}`;

  document.getElementById('id-card').style.display = 'block';
}
