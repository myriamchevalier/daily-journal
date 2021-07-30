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
        
        <h3>Date</h3>
        ${entry.date}
        
        <h3>Concept</h3>
        ${entry.concept}

        <h3>Journal Entry</h3>
        ${entry.entry}

        <h3>Mood</h3>
        ${entry.mood}

        `
    }
    
    return allEntriesAsHTML
}