import { create } from "zustand";
import { Generate } from "../../generateId/GenerateId";

const useCartStore = create((set, get) => ({
    items: [],
    show: false,
    orderPlaced:false,

    addBasketItem: (product) => set((state) => {
        const existingItem = state.items.find(item => item.id === product.id);
        
        if (existingItem) {
            return {
                items: state.items.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        } else {
            return {
                items: [...state.items, { ...product, quantity: 1 }]
            };
        }
    }),


    removeItem: (productId) => set((state) => {
        const updatedItems = state.items.map(item => {
            if (item.id === productId) {
                const newQuantity = item.quantity - 1;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
            }
            return item;
        });
        
        return {
            items: updatedItems.filter(item => item !== null)
        };
    }),

    priceItems: () => {
        return get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },


    createOrder: (userData) =>{
        return new Promise((resolve, reject) => {
            const state = get()
            const totalPriceOrder = state.priceItems()

            if(state.items.length ===0){
                reject({ status: 400, message: "Корзина пуста" });
                return;
            } 

            if(userData.name.length === 0 || userData.phone.length === 0){
                reject({ status: 400, message: "Заполните все поля" });
                return;
            }

            setTimeout(()=>{
                const order = {
                idOrder: Generate(),
                items:state.items,
                totalPrice: totalPriceOrder,
                user: userData,
                number: `ORD-${Date.now()}`
            }

            set({
                items:[],
                orderPlaced: true
            })

            resolve({
                success:true,
                order:`ORD-${Date.now()}`,
                message: "Заказ успешно оформлен"
            })
            },1000)
        })
    },

    cleanOrder: ()=>set({orderPlaced:false}),

    setShow: (value) => set({ show: value }),
    hideBasket: () => set({ show: false })
}));

export default useCartStore;