export async function getAllProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 
                success: true, 
                products: [
                    {
                        id: 1,
                        title: "Суши",
                        price: 375,
                        description: "3 шт.",
                        isNew: false,
                        image: "/src/image/i.webp"
                    }, 
                    {
                        id: 2,
                        title: "Суши",
                        price: 375,
                        description: "3 шт.",
                        isNew: true,
                        image: "/src/image/i.webp"
                    },
                    {
                        id: 3,
                        title: "Суши",
                        price: 375,
                        description: "3 шт.",
                        isNew: false,
                        image: "/src/image/i.webp"  
                    }
                ] 
            });
        }, 1000);
    });
}