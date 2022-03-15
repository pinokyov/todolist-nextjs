import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: "Todo A", description: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. ", completed: true },
    { id: 2, name: "Todo B", description: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. ", completed: false },
    { id: 3, name: "Todo C", description: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. ", completed: true },
    { id: 4, name: "Todo D", description: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. ", completed: false },
    { id: 5, name: "Todo E", description: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. ", completed: false },
];

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        todoAdded(state, action) {
            state.push(action.payload);
        },
        todoToggle(state, action) {
            const { id } = action.payload;
            const exists = state.find((todo) => todo.id === id);
            if (exists) {
                exists.completed = !exists.completed;
            }
        },
        todoDeleted(state, action) {
            const { id } = action.payload;
            const exists = state.find((todo) => todo.id === parseInt(id));
            if (exists) {
                return state.filter((todo) => todo.id !== parseInt(id));
            }
        },
    },
});

export const { todoAdded,todoToggle,todoDeleted } = todosSlice.actions;

export default todosSlice.reducer;