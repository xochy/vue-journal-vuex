export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Officia excepteur eiusmod commodo non in duis tempor proident id labore.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Cupidatat aute deserunt sint nisi anim id excepteur.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Et duis anim ea ex minim laborum magna et consectetur eiusmod eiusmod amet cupidatat sint.',
            picture: null,
        }
    ],
})