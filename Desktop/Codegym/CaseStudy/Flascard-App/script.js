    // FRONT

    class FlashcardName {
        constructor(id, nameFront, nameBack) {
            this.id = id;
            // this.count = count;
            this.nameFront = nameFront;
            this.nameBack = nameBack;
        }
    }

    function Card(id, nameFront, nameBack) {
        this.id = id;
        this.nameFront = nameFront;
        this.nameBack = nameBack;
    }

    const flashcard_key = "FlashCardName";
    const favoritecard_key = "FavoriteCardName";

    let flashcardNames = [];
    let favoriteCards = [];

    // LOCAL STORAGE

    function init() {
        if (getLocalStorage(flashcard_key) == undefined) {
            flashcardNames = [
                new FlashcardName(1, "한국", "Hàn Quốc"),
                new FlashcardName(2, "베트남", "Việt Nam"),
                new FlashcardName(3, "사랑하다", "Khi mình lỡ thích cậu rồi. Phải làm sao? phải làm sao?"),
                new FlashcardName(4, "싫다", "Đồ đáng ghét"),
                new FlashcardName(5, "바보", "Đồ ngốc"),
                new FlashcardName(6, "거져", "Biến đi"),
                new FlashcardName(7, "입닥쳐", "Câm mồm"),
                new FlashcardName(8, "변태야", "Đồ biến thái"),
                new FlashcardName(9, "개세끼야", "Con chó này"),
            ];
            setLocalStorage(flashcard_key, flashcardNames);
        } else {
            flashcardNames = getLocalStorage(flashcard_key);
        }
    }

    function initFavoriteCard() {
        if (getLocalStorage(favoritecard_key) == undefined) {
            favoriteCards = [
                new FlashcardName(1, "한국", "Hàn Quốc"),
                new FlashcardName(2, "베트남", "Việt Nam"),
            ];
            setLocalStorage(favoritecard_key, favoriteCards);
        } else {
            favoriteCards = getLocalStorage(favoritecard_key);
        }
    }

    function getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    function setLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    // CARD

    function renderFlashcard() {
        let containerFlashcard = document.querySelector(".container");

        let htmls = flashcardNames.map(function (flashcardName) {
            return `
                    <div class="flip-card" id="flip_card_${flashcardName.id}" >
                        <div class="flip-card-inner">
                            <div class="flip-card-front index-front_${flashcardName.id}" style="background-color:${getRandomColor()} ;">
                                <p>${flashcardName.nameFront}</p>
                                <span class="delete-card">X</span> 
                                <p class="heart-card" id="heart-card-front_${flashcardName.id}" onclick="addFavoriteCard(${flashcardName.id})"><i class="fa-solid fa-heart" ></i></p>
                                <p class="red-heart-card d-none" id="red-heart-card-front_${flashcardName.id}" onclick="removeFavoriteCard(${flashcardName.id})"><i class="fa-solid fa-heart" ></i></p>
                            </div>
                            <div class="flip-card-back index-back_${flashcardName.id}" style="background-color:${getRandomColor()} ;">
                                <p class="text-card-back">${flashcardName.nameBack}</p>    
                                <span class="delete-card"  onclick="removeCard(${flashcardName.id})">X</span>
                                <p class="heart-card" id="heart-card-back_${flashcardName.id}" onclick="addFavoriteCard(${flashcardName.id})"><i class="fa-solid fa-heart" ></i></p>
                                <p class="red-heart-card d-none" id="red-heart-card-back_${flashcardName.id}" onclick="removeFavoriteCard(${flashcardName.id})"><i class="fa-solid fa-heart" ></i></p> 
                                                        
                            </div>
                        </div>
                    </div>        

                `;
        });

        containerFlashcard.innerHTML = htmls.join("");
    }

    function createCard() {
        let nameFront = document.querySelector("#front").value;
        let nameBack = document.querySelector("#back").value;
        let color = getRandomColor();
        // let color = getRandomColor()
        let id = findLastestId() + 1;

        if (nameFront === "" || nameBack === "") {
            alert("Front name is required");
            return;
        }

        flashcardNames.push(new FlashcardName(id, nameFront, nameBack));
        setLocalStorage(flashcard_key, flashcardNames);
        clearForm();
        renderFlashcard();
        renderAllList();
    }

    function clearForm() {
        document.querySelector("#front").value = "";
        document.querySelector("#back").value = "";
    }

    // SET ID

    function findLastestId() {
        let carList = [...flashcardNames];
        carList.sort(function (card1, card2) {
            return card2.id - card1.id;
        });
        return carList[0].id;
    }

    function removeCard(id) {
        flashcardNames = flashcardNames.filter(function (card) {
            return card.id != id;
        });
        setLocalStorage(flashcard_key, flashcardNames);
        document.querySelector(`#flip_card_${id}`).remove();
        renderAllList();

        favoriteCards = favoriteCards.filter(function (card) {
            return card.id != id;
        });
        setLocalStorage(favoritecard_key, favoriteCards);
        document.querySelector(`#tr_favorite_card_${id}`).remove();
        showFavoriteListCard();
    }

    // RANDOM COLOR

    function getRandomColor() {
        var red = Math.floor(Math.random() * 255) + 0;
        var green = Math.floor(Math.random() * 70) + 90;
        var blue = Math.floor(Math.random() * 30) + 90;
        return `rgb(${red},${green},${blue})`;
    };

    // ALL LIST

    // // LIST MENU

    function showListCard() {
        document.querySelector("#tablebAllList").classList.remove("d-none");
        document.querySelector("#tableFavoriteList").classList.add("d-none");
    }

    function showFavoriteListCards() {
        document.querySelector("#tablebAllList").classList.add("d-none");
        document.querySelector("#tableFavoriteList").classList.remove("d-none");
    }

    // // ALL LIST

    function renderAllList() {
        let tbody = document.getElementById("tbAllList");
        let htmls = flashcardNames.map(function (flashcardName) {
            return `
                    <tr>
                        <td><input class="check-box" type="checkbox"></td>
                        <td style="display: flex;text-align: center;justify-content: center; width=50px;width: 50px;">${flashcardName.id}</td>
                        <td>${flashcardName.nameFront}</td>
                        <td>${flashcardName.nameBack}</td>
                    </tr>       

                `;
        });

        tbody.innerHTML = htmls.join("");
        renderFlashcard();
    }

    // // FAVORITE LIST

    function addFavoriteCard(id) {
        let card = flashcardNames.find(function (card) {
            return card.id == id;
        });
        document.querySelector(`#heart-card-front_${id}`).classList.add("d-none");
        document.querySelector(`#heart-card-back_${id}`).classList.add("d-none");
        document
            .querySelector(`#red-heart-card-front_${id}`)
            .classList.remove("d-none");
        document
            .querySelector(`#red-heart-card-back_${id}`)
            .classList.remove("d-none");

        let foundFavoriteCard = favoriteCards.find(function (cardItem) {
            return cardItem.id == id;
        });
        if (foundFavoriteCard === undefined) {
            let cardItem = new Card(card.id, card.nameFront, card.nameBack);
            favoriteCards.push(cardItem);
            setLocalStorage(favoritecard_key, favoriteCards);
        }

        showFavoriteListCard();
    }

    function showFavoriteListCard() {
        let tbody = document.getElementById("tbFavoriteList");
        let htmls = favoriteCards.map(function (item) {
            return `
                    <tr id="tr_favorite_card_${item.id}">
                        <td><input class="check-box" type="checkbox"></td>
                        <td style="display: flex;text-align: center;justify-content: center; width=50px;width: 50px;">${item.id}</td>
                        <td>${item.nameFront}</td>
                        <td>${item.nameBack}</td>
                    </tr>       

                `;
        });

        tbody.innerHTML = htmls.join("");
    }

    function removeFavoriteCard(id) {
        let card = flashcardNames.find(function (card) {
            return card.id == id;
        });

        document.querySelector(`#heart-card-front_${id}`).classList.remove("d-none");
        document.querySelector(`#heart-card-back_${id}`).classList.remove("d-none");
        document.querySelector(`#red-heart-card-front_${id}`).classList.add("d-none");
        document.querySelector(`#red-heart-card-back_${id}`).classList.add("d-none");

        favoriteCards = favoriteCards.filter(function (card) {
            return card.id != id;
        });
        setLocalStorage(favoritecard_key, favoriteCards);
        document.querySelector(`#tr_favorite_card_${id}`).remove();
        showFavoriteListCard();
    }

    const searchInput = document.querySelector("[data-search]");

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        console.log(value);
        flashcardNames.forEach((flashcardName) => {
            const isVisible =
                flashcardName.nameFront.toLowerCase().includes(value) ||
                flashcardName.nameBack.toLowerCase().includes(value);
            flashcardName.element.classList.toggle("d-none", !isVisible);
        });
    });

    // PRACTICE

    function makePractice() {
        document.querySelector(`#btn-practice`).classList.add("d-none");
        document.querySelector(`#btn-reset`).classList.remove("d-none");
        // document.querySelector(`#btn-check-front`).classList.remove('d-none')
        for (i = 0; i < flashcardNames.length; i++) {
            // document.getElementsByClassName(`text-card-back`)[i].classList.add('d-none')
            document.getElementsByClassName(`flip-card-back`)[
                i
            ].innerHTML = `<input id="valueCheck_${flashcardNames[i].id}" class='value-answer' type='text' value=''> <button onclick="checkAnswer(${flashcardNames[i].id})" class="btn-check_${flashcardNames[i].id}" style="margin-top: 20px;">Check</button>`;
            // document.getElementsByClassName(`flip-card-back`)[i].innerHTML = `<button class="make-check" id="btn-check-back_${flashcardName.id}">Check</button> `;
            // document.getElementsByClassName(`make-check`)[i].classList.remove('d-none')
        }
    }

    function checkAnswer(id) {
        let valInput = document.getElementById(`valueCheck_${id}`).value;
        let valCardBack = flashcardNames.find(function (value) {
            return (value.id = id);
        });
        console.log(valCardBack);
        console.log(valCardBack.id);
        console.log(valCardBack.nameFront);

        if (valCardBack.nameBack === valInput) {
            document.querySelector(`.index-front_${id}`).classList.add("correct");
            document.querySelector(`.index-back_${id}`).classList.add("correct");
        } else {
            document.querySelector(`.index-front_${id}`).classList.add("wrong");
            document.querySelector(`.index-back_${id}`).classList.add("wrong");
        }
    }

    function removePractice() {
        document.querySelector(`#btn-practice`).classList.remove("d-none");
        document.querySelector(`#btn-reset`).classList.add("d-none");
        // // document.qsuerySelector(`#btn-check-front`).classList.add('d-none')
        // for (i=0; i<flashcardNames.length; i++) {
        //     document.getElementsByClassName(`make-check`)[i].classList.add('d-none')
        // }
        renderAllList();
    }
    // ONLOAD

    function documentReady() {
        init();
        //renderFlashcard()
        renderAllList();
        initFavoriteCard();
        showFavoriteListCard();
        showListCard();
    }
    documentReady();