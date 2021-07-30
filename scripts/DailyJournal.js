import { Entries } from "./Entries.js"

const entries = Entries()

export const DailyJournal = () => {
    return `
        <h3>Previous entries</h3>

        <div class="entryList">
            ${ Entries() }
        </div>
    `
}
