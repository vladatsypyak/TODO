let todoData = {
    state: [
        {
            id: Math.random(),
            title: "test",
            description: "test",
            status: "open",
            creationDate: "11/25/2020",
            updateDate: "11/25/2020"
        },
        {
            id: Math.random(),
            title: "test1",
            description: "test1",
            status: "open",
            creationDate: "11/25/2021",
            updateDate: "11/25/2021"
        },
        {
            id: Math.random(),
            title: "test2",
            description: "test2",
            status: "open",
            creationDate: "11/25/2023",
            updateDate: "11/25/2023"
        }
    ],
    addData(data) {
        this.state.push(data)
    },
    changeStatus(id, status) {
        this.state.filter(el => el.id === id)[0].status = status
    },
    deleteItem(id) {
        this.state = this.state.filter(el => el.id !== id)
        console.log(this.state)
    },
    editDescription(id, desc){
        this.state.filter(el => el.id === id)[0].description = desc

    }

}
export default todoData