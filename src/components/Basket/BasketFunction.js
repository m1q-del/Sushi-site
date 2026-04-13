import { create } from "zustand";

const useCartStore = create((set, get) => ({
    items: [],
    show: false,

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

    setShow: (value) => set({ show: value }),
    hideBasket: () => set({ show: false })
}));

export default useCartStore;