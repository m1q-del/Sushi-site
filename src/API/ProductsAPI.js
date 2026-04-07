export async function getAllProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ success: true, products:[
                {
                    id:1,
                    title: "Суши",
                    price: 375,
                    description: "3 шт.",
                    isNew: false,
                    image: "/src/image/i.webp",
                }, 
                {
                    id:2,
                    title: "Суши",
                    price: 375,
                    description: "3 шт.",
                    isNew: true,
                    image: "/src/image/i.webp"
                },
                {
                    id:3,
                    title: "Суши",
                    price: 375,
                    description: "3 шт.",
                    isNew: false,
                    image: "/src/image/i.webp"  
                },
                {
                    id: item.id || Generate(),
                    title: item.title || "Суши",
                    price: item.price || 0,
                    description: item.description || "3 шт.",
                    isNew: item.isNew || false,
                    image: item.image || "/src/image/default.webp"
                }
            ] });
        }, 1000);
    });
}