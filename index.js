const tabList = document.querySelector(".tablist")
const tabs = Array.from(tabList.children)
const panelList = document.querySelector(".tabpanelList")
const panels = Array.from(panelList.children)
let currentIndex = 0

tabList.addEventListener("click", (e)=> {
    targetIndex = tabs.indexOf(e.target)
    tabs[currentIndex].setAttribute("aria-selected", false)
    tabs[targetIndex].setAttribute("aria-selected", true)

    panels[currentIndex].setAttribute("hidden", true)
    panels[targetIndex].removeAttribute("hidden")

    currentIndex = targetIndex
})

window.addEventListener("DOMContentLoaded", () => {
    let tabFocus = 0;
    tabList.addEventListener("keydown", e => {
        if (e.keyCode === 37 || e.keyCode === 39) {
            tabs[tabFocus].setAttribute("tabindex", -1)
            // when pressing <-
            if (e.keyCode === 37) {
                tabFocus--;
                if (tabFocus < 0) {
                    tabFocus = tabs.length - 1
                }
            }
            // when pressing ->
            if (e.keyCode === 39) {
                tabFocus++;
                if (tabFocus >= tabs.length) {
                    tabFocus = 0
                }
            }
        }
        tabs[tabFocus].setAttribute("tabindex", 0)
        tabs[tabFocus].focus()
    })
})