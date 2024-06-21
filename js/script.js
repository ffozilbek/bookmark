const elAccordionTabs = document.querySelectorAll(".faq-accordion__item");

elAccordionTabs.forEach(e => {
    const elAccordionView = e.querySelector(".accordion-item__view"),
        elAccordionInfo = e.querySelector(".accordion-item__info");

        elAccordionView.addEventListener('click', ()=> {
            elAccordionInfo.classList.toggle("accordion-item__info--open");
        })

});