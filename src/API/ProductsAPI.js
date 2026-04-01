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
                    id: Generate(),
                    title: item.name,
                    price: item.price,
                    description: item.description,
                    isNew: item.isNew,
                    image: item.image
                }
            ] });
        }, 1000);
    });
}