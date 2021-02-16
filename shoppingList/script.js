const ShoppingList = {
    data() {
        return {
            item: '',
            itemList: [],
            count: 0
        }
    },
    methods: {
        addItem() {
            this.itemList.push(this.item);
        }
    }
}
const app = Vue.createApp(ShoppingList).mount('#app');