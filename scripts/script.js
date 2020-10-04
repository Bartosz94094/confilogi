window.addEventListener('load', () => {
    
    const featuresButtons = [...document.querySelectorAll(".features>.buttons-wrapper>button")];
    const tabHeader = document.querySelector(".tab h1");
    const tabDescription = document.querySelector(".tab p");
    const tabImage = document.querySelector(".tab>.image-wrapper>img");

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
                    break;
                case 1:
                    tabHeader.innerHTML= secondHeader;
                    tabDescription.innerHTML= secondDescription;
                    tabImage.src = secondImage;
                    break;
                case 2:
                    tabHeader.innerHTML= thirdHeader;
                    tabDescription.innerHTML = thirdDescription;
                    tabImage.src = thirdImage;
                    break;
                default:
                    break;
            }
        })
    })

    const showButtons = [...document.querySelectorAll(".question>button")];
    const faqAnswers = [...document.querySelectorAll(".question>p")];

    showButtons.forEach((button, index)=> {
        button.addEventListener("click", (event)=>{
            faqAnswers[index].classList.toggle("show");
            button.classList.toggle("show");
        })
    })

});