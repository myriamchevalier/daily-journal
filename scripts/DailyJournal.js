import { Entries } from "./Entries.js"
import { journalForm } from "./JournalForm.js"

export const DailyJournal = () => {
    return `
        <h3>Previous entries</h3>

        <div class="entryList">
            ${ Entries() }
        </div>

        <article class="entryForm'>
            ${ journalForm() }
        </article>
    `
}
