import { DailyJournal } from "./DailyJournal.js"

const dailyJournal = DailyJournal()
const container = document.querySelector("#entries")

const render = () => {
    container.innerHTML = DailyJournal()
}
