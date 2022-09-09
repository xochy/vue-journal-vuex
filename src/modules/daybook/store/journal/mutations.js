// export const myMutation = (state) => {

// }

export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = (state, entry) => {
    const index = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries[index] = entry
    console.log(state.entries[index]);
}

export const addEntry = (/*state*/) => {

}

