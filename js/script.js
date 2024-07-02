const elsAccordionTabs = document.querySelectorAll(".faq-accordion__item"),
    elsTabLink = document.querySelectorAll(".js-tab-link"),
    elsTabItem = document.querySelectorAll(".slider__item"),
    elsSliderTabs = document.querySelectorAll(".slider-tab-wrapper");

elsAccordionTabs.forEach(e => {
    const elAccordionView = e.querySelector(".accordion-item__view"),
        elAccordionInfo = e.querySelector(".accordion-item__info");

        elAccordionView.addEventListener('click', ()=> {
            elAccordionInfo.classList.toggle("accordion-item__info--open");
        })

});

elsTabLink.forEach(e => {
    const activeTabLink = document.querySelector(e.dataset.tabTarget);
    e.addEventListener("click", (evt)=> {
        evt.preventDefault();
        elsTabItem.forEach(elTabItem => {
            elTabItem.classList.remove("slider__item--active");
        })
        elsSliderTabs.forEach(e=> {
            e.classList.remove("slider-tab--active");
        })
        e.parentElement.classList.add("slider__item--active");
        activeTabLink.classList.add("slider-tab--active");
    })
})
