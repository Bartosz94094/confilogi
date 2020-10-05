window.addEventListener('load', () => {

    //switch tabs (features section)
    
    const featuresButtons = [...document.querySelectorAll(".features>.buttons-wrapper>button")];
    const tabHeader = document.querySelector(".tab h3");
    const tabDescription = document.querySelector(".tab p");
    const tabImage = document.querySelector(".tab>.image-wrapper>img");
    const tabImageWrapper = document.querySelector(".tab>.image-wrapper");

    const firstHeader = "Bookmark in one click";
    const secondHeader = "Intelligent search";
    const thirdHeader = "Share your bookmarks";

    const firstDescription = "Organise your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    const secondDescription = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
    const thirdDescription = "Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of a button.";

    const firstImage = "/images/illustration-features-tab-1.svg";
    const secondImage = "/images/illustration-features-tab-2.svg";
    const thirdImage = "/images/illustration-features-tab-3.svg";

    function removeHighlightFromButtons() {
        featuresButtons.forEach((button)=> {
            button.classList.remove("highlight");
        })
    }

    featuresButtons.forEach((button, index)=>{
        button.addEventListener("click", ()=>{
            removeHighlightFromButtons();
            button.classList.add("highlight");

            switch (index) {
                case 0:
                    tabHeader.innerHTML= firstHeader;
                    tabDescription.innerHTML= firstDescription;
                    tabImage.src = firstImage;
                    tabImageWrapper.classList.remove("resize");
                    break;
                case 1:
                    tabHeader.innerHTML= secondHeader;
                    tabDescription.innerHTML= secondDescription;
                    tabImage.src = secondImage;
                    tabImageWrapper.classList.add("resize");
                    break;
                case 2:
                    tabHeader.innerHTML= thirdHeader;
                    tabDescription.innerHTML = thirdDescription;
                    tabImage.src = thirdImage;
                    tabImageWrapper.classList.add("resize");
                    break;
                default:
                    break;
            }
        })
    })

    //switch questions (FAQ section)

    const showButtons = [...document.querySelectorAll(".question>button")];
    const faqAnswers = [...document.querySelectorAll(".question>p")];

    showButtons.forEach((button, index)=> {
        button.addEventListener("click", (event)=>{
            faqAnswers[index].classList.toggle("show");
            button.classList.toggle("show");
        })
    })

    //set counter (footer)

    const counter = document.querySelector(".counter");
    let initialNumber = 35000;
    const givenTime = 20;
    const intervalTime = givenTime/(initialNumber/1000);
    const formattedNumber = new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 5 }).format(initialNumber);

    counter.innerHTML=formattedNumber;

    const countDown = setInterval(()=>{
        if(initialNumber>0) {
            initialNumber-=1000;
            counter.innerHTML=new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 5 }).format(initialNumber);
        } else {
            clearInterval(countDown);
        }
    }, intervalTime*1000);

    //form validation
    const input = document.querySelector("footer form input");
    const inputWrapper = document.querySelector("footer .input-wrapper");
    const formButton = document.querySelector(".submit");

    formButton.addEventListener("click", (e)=>{
        e.preventDefault();

        text = input.value;

        if(text == "" || text.includes(" ") || !text.includes("@") || !text.includes(".") || text[text.length-1] == ".") {
            console.log("Wrong e-mail");
            inputWrapper.classList.add("error");
        } else {
            inputWrapper.classList.remove("error");
            console.log("You signed up to our newsletter");
        }
        
    })

    //modal
    const modal = document.querySelector(".modal");
    const closeModalBtn = document.querySelector(".close-modal");

    closeModalBtn.addEventListener("click", ()=>{
        modal.classList.remove("show");
    })

    let modalWasVisible = false;
    let modalStartTime = 0;
    const modalEndTime = 30;

    const modalStartCounting = setInterval(()=>{
        modalStartTime++;
        if(modalStartTime == modalEndTime) {
            clearInterval(modalStartCounting);

            if(!modalWasVisible) {
                modal.classList.add("show");
                modalWasVisible = true;
            }

        }
    }, 1000);

    const upperNav = document.querySelector(".upper-nav");
    upperNav.addEventListener("mouseover", ()=>{
        if(!modalWasVisible) {
            modal.classList.add("show");
            modalWasVisible = true;
        }
    })

    //hamburger
    const burger = document.querySelector(".upper-nav>.first-line>button");

    const closeIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>`;
    const burgerIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"/></svg>`;

    let isMobileNavVisible = false;

    burger.addEventListener("click", ()=> {
        upperNav.classList.toggle("show");
        isMobileNavVisible = !isMobileNavVisible;
        
        if(isMobileNavVisible) {
            burger.innerHTML=closeIconSVG;
        } else {
            burger.innerHTML=burgerIconSVG;
        }
    })

});