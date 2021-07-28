import { Entries } from "./Entries.js"

const entries = Entries()

export const DailyJournal = () => {
    return `
        <div class="entryList">
            ${ Entries() }
        </div>
    `
}
