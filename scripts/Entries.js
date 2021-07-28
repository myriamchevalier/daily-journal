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

        `
    }
    
    return allEntriesAsHTML
}