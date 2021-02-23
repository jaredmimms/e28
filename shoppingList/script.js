const ShoppingList = {
    data() {
        return {
            item: {

            },
            itemList: []
        }
    },
    methods: {
        addItem() {
            this.itemList.push(this.item);
            this.item = {};
        },
        deleteItem(index) {
            this.itemList.splice(index, 1);
        }
    }
}
const app = Vue.createApp(ShoppingList).mount('#app');