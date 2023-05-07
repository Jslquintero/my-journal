
export default class NoteServices {
  
    async getList() {
        const response = await fetch(`${process.env.API_BASE_URL}/notes`);
        const data = await response.json();
        return data.notes;
    }

    async getOne(id) {
        const response = await fetch(`${process.env.API_BASE_URL}/notes/${id}`);
        const data = await response.json();
        return data;
    }
}
