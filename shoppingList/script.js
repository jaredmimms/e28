const ShoppingList = {
    data() {
        return {
            item: {

            },
            itemList: [],
            qty: 0
        }
    },
    methods: {
        addItem() {
            this.itemList.push(this.item);
            this.qty += this.item.qty;
            this.item = {};
        },
        deleteItem(index) {
            this.qty -= this.itemList[index].qty;
            this.itemList.splice(index, 1);
        }
    }
}
const app = Vue.createApp(ShoppingList).mount('#app');