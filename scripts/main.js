import { DailyJournal } from "./DailyJournal.js"

const container = document.querySelector("#entries")

const render = () => {
    container.innerHTML = DailyJournal()
}

render()
