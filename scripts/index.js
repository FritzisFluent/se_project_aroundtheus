/* ------------------------------------ */
/* ------Initial Cards Array----------- */
/* ------------------------------------ */
const initialCards = [
  //!Object1
  {
    name: "Dumbo",
    link: "https://images.unsplash.com/photo-1559782035-4d0ba89c0540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  //!Object2
  {
    name: "Subway",
    link: "https://images.unsplash.com/photo-1517871096864-bf03ad78489d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  //!Object3
  {
    name: "Street Art",
    link: "https://images.unsplash.com/photo-1577641756973-934ad53fe8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
  },
  //!Object4
  {
    name: "Washington Heights",
    link: "https://images.unsplash.com/photo-1677698584665-afd7d20c6ca2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  //!Object5
  {
    name: "The Bronx",
    link: "https://images.unsplash.com/photo-1571191008066-0c00b02c4857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  //!Object6
  {
    name: "Brownstone",
    link: "https://images.unsplash.com/photo-1515112569565-1e4aef316db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];
/* ------------------------------------ */
/* --------Selecting DOM Elements------ */
/* ------------------------------------ */

const profileEditButton = document.querySelector("#profile-edit-button"); //Selecting the profile edit button
const profileEditModal = document.querySelector("#profile-edit-modal"); //Selecting the profile edit modal
const closeEditModalButton = document.querySelector("#modal-close-button"); //Selecting the close button for the profile edit modal
const profileTitle = document.querySelector(".profile__title"); //Selecting the profile title
const profileDescription = document.querySelector(".profile__description"); //Selecting the profile description
const modalFormInputTitle = document.querySelector("#form-input-title"); //Selecting the input field for the title
const modalFormInputDescription = document.querySelector(
  "#form-input-description"
); //Selecting the input field for the description
const profileEditForm = profileEditModal.querySelector(".modal__form"); //Selecting the form for the profile edit modal
const addCardButton = document.querySelector(".profile__add-button"); //Selecting the add card button
const addCardModal = document.querySelector("#add-card-modal"); //Selecting the add card modal
const closeAddCardModalButton = addCardModal.querySelector(
  "#add-modal-close-button"
); //Selecting the close button for the add card modal
const cardList = document.querySelector(".cards__list"); //Selecting the card list
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const addCardForm = addCardModal.querySelector("#add-card-form"); //Selecting the form for the add card modal

/* --------------------------------------------------- */
/* -----------Functions for Modal Operations---------- */
/* -------------------------------------------------- */

// Function to open the modal
function openPopup(modal) {
  modal.classList.add("modal_opened");
}

// Function to close the modal
function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

/* --------------------------------------------------- */
/* -----------Function to Create a Card Element---------- */
/* -------------------------------------------------- */

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardElement.querySelector(".card__image").src = cardData.link;
  cardElement.querySelector(".card__image").alt = cardData.name;
  return cardElement;
}

/* -------------------------------------------------------- */
/* -----------Event Handlers for Form Submissions---------- */
/* ------------------------------------------------------- */

// Function to handle the form submission for editing the profile
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = modalFormInputTitle.value;
  profileDescription.textContent = modalFormInputDescription.value;
  closePopup(profileEditModal);
}

// Function to handle the form submission for adding a new card
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const cardName = addCardForm.querySelector("#card-name-input").value;
  const cardLink = addCardForm.querySelector("#card-link-input").value;
  const newCard = getCardElement({ name: cardName, link: cardLink });
  cardList.prepend(newCard);
  closePopup(addCardModal);
  addCardForm.reset();
}

/* -------------------------------------------------------- */
/* -----------Event Listeners---------- */
/* ------------------------------------------------------- */

// Event listeners for the profile edit modal
profileEditButton.addEventListener("click", () => openPopup(profileEditModal));
closeEditModalButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);
profileEditForm.addEventListener("submit", handleProfileFormSubmit); //Event listener for the edit form submission

// Event listeners for the add card modal
addCardButton.addEventListener("click", () => openPopup(addCardModal));
closeAddCardModalButton.addEventListener("click", () =>
  closePopup(addCardModal)
);
addCardForm.addEventListener("submit", handleAddCardFormSubmit); //Event listener for the card form submission

/* -------------------------------------------------------- */
/* -----------Rendering Initial Cards--------------------- */
/* ------------------------------------------------------- */
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardList.prepend(cardElement);
});
