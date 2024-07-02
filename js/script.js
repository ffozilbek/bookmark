const modifier = {
    sliderItemActive: "slider__item--active",
    sliderTabActive: "slider-tab-active",
    accordionOpener: "accordion-item__info--open"
}

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
            elTabItem.classList.remove(modifier.sliderItemActive);
        })
        elsSliderTabs.forEach(e=> {
            e.classList.remove(modifier.sliderTabActive);
        })
        e.parentElement.classList.add(modifier.sliderItemActive);
        activeTabLink.classList.add(modifier.sliderTabActive);
    })
})
