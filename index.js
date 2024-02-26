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