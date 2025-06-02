const Category = require("./category");
const products = [
    {
        id: "1",
        name: "iPhone 14 Pro",
        price: 1299.99,
        imageUrl: "3.jpg",
        description: "Apple'ın en yeni akıllı telefonu, A16 Bionic işlemci ve ProMotion ekran ile.",
        categoryId: "1",
    },
    {
        id: "2",
        name: "Samsung Galaxy S23",
        price: 1099.99,
        imageUrl: "1.jpg",
        description: "Samsung'un amiral gemisi telefonu, yüksek çözünürlüklü kamera ve hızlı şarj özelliğiyle.",
        categoryId: "1",
    },
    {
        id: "3",
        name: "MacBook Air M2",
        price: 1399.99,
        imageUrl: "4.jpg",
        description: "Apple M2 çip ile güçlendirilmiş, hafif ve taşınabilir dizüstü bilgisayar.",
        categoryId: "2",
    },
    {
        id: "4",
        name: "Lenovo IdeaPad 5",
        price: 749.99,
        imageUrl: "2.jpg",
        description: "Uygun fiyatlı, güçlü performansa sahip günlük kullanım dizüstü bilgisayarı.",
        categoryId: "2",
    },
    {
        id: "5",
        name: "HP Pavilion Gaming Laptop",
        price: 999.99,
        imageUrl: "1.jpg",
        description: "Oyun için ideal, yüksek performanslı grafik kartı ve işlemciye sahip laptop.",
        categoryId: "2",
    },
    {
        id: "6",
        name: "Bosch NoFrost Buzdolabı",
        price: 1199.99,
        imageUrl: "4.jpg",
        description: "Enerji tasarruflu, geniş hacimli ve NoFrost teknolojili buzdolabı.",
        categoryId: "3",
    },
    {
        id: "7",
        name: "Samsung Dijital Çamaşır Makinesi",
        price: 799.99,
        imageUrl: "2.jpg",
        description: "AI destekli yıkama programları ve enerji verimliliği ile çamaşır makinesi.",
        categoryId: "3",
    },
    {
        id: "8",
        name: "Arçelik Mikrodalga Fırın",
        price: 299.99,
        imageUrl: "3.jpg",
        description: "Kolay kullanımlı, kompakt tasarımlı mikrodalga fırın.",
        categoryId: "3",
    },
    {
        id: "9",
        name: "Xiaomi Redmi Note 13",
        price: 399.99,
        imageUrl: "1.jpg",
        description: "Fiyat-performans oranı yüksek, uzun pil ömrü sunan akıllı telefon.",
        categoryId: "1",
    },
    {
        id: "10",
        name: "iMac 24'' M3",
        price: 1599.99,
        imageUrl: "2.jpg",
        description: "M3 işlemci ile gelen iMac, yüksek çözünürlüklü ekranı ve renk seçenekleriyle.",
        categoryId: "2",
    },
];

module.exports = class Product {
    constructor(name, price, imageUrl, description, categoryId) {
        this.id = (Math.floor(Math.random() * 99999) + 1).toString();
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.categoryId = categoryId || "1";
    }
    saveProduct() {
        products.push(this);
    }

    static getAll() {
        return products;
    }

    static getById(id) {
        const product = products.find((i) => i.id === id);
        if (!product) {
            return null;
        } else {
            return product;
        }
    }

    static getProductsByCategoryId(categoryId) {
        return products.filter((i) => i.categoryId === categoryId);
    }

    static Update(product) {
        const index = products.findIndex((i) => i.id === product.id);
        products[index].name = product.name;
        products[index].price = product.price;
        products[index].imageUrl = product.imageUrl;
        products[index].description = product.description;
        products[index].categoryId = product.categoryId;
    }
    static deleteById(id) {
        const index = products.findIndex((i) => i.id === id);
        products.splice(index, 1);
    }
};
