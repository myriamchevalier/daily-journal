/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"
const entries = getJournalEntries()

export const Entries = () => {
    let allEntriesAsHTML = ""


    for (const entry of entries) {
        allEntriesAsHTML += `
        <section class="entry">
            <h4>Date</h4>
            ${entry.date}
        
            <h4>Concept</h4>
            ${entry.concept}

            <h4>Journal Entry</h4>
            ${entry.entry}

            <h4>Mood</h4>
            ${entry.mood}
        </section>
        `
    }
    
    return allEntriesAsHTML
}