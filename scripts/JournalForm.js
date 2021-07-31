export const journalForm = () => {
    return `
    <form class="entryForm">
        <fieldset>
            <label for="entryDate">Date</label>
            <input type="date" name="entryDate" class="entryForm__date">
        </fieldset>

        <fieldset>
            <label for="entryConcepts">Concepts covered</label>
            <input type="text" name="entryConcepts" class="entryForm__concepts">
        </fieldset>
        
        <fieldset>
            <label for="entryJournalEntry">Journal Entry</label>
            <textarea id="entryJournalEntry" name="entryJournalEntry" class="entryForm_entry">Write your journal entry here</textarea>
        </fieldset>

        <fieldset>
            <label for="entryMood">Mood for the day</label>
            <select>
                <option>Happy</option>
                <option>Sad</option>
                <option>In pain</option>
                <option>Excited</option>
                <option>Tired</option>
                <option>Melty Brain</option>
            </select>
        </fieldset>

        <button type="button">Record Journal Entry</button>
    </form>
    `
}