/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "07/08/2021",
            concept: "HTML wireframe, classes, CSS",
            entry: "We talked about HTML components and how to use classes to later style it with CSS, also did a bunch of flexbox practice. Loved the froggies!",
            mood: "Excited"
        },{
            id: 2,
            date: "07/09/2021",
            concept: "GitHub",
            entry: "We learned how to create repos on GitHub, and how to use git in our terminal.Also, branches. That shit is confusing >_<",
            mood: "Melty Brain"
        },{
            id: 3,
            date: "07/12/2021",
            concept: "Planning a page and starting on a project",
            entry: "We finally met Steve, he reminds me of my Captain at TJ XD. We learned about making a plan for a new page, and started on Martin's Aquarium.",
            mood: "Happy"
        }, 
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({...entry}))
    return copyOfData
}
