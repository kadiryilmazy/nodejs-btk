const categories = [
    {
        id: "1",
        name: "Telefon",
        description: "Telefon kategorisi, telefon ve iletişim cihazlarını içerir.",
    },
    {
        id: "2",
        name: "Bilgisayar",
        description: "Bilgisayar kategorisi, masaüstü ve dizüstü bilgisayarları içerir.",
    },
    {
        id: "3",
        name: "Beyaz Eşya",
        description: "Beyaz eşya kategorisi, buzdolabı, çamaşır makinesi gibi ev aletlerini içerir.",
    },
];

module.exports = class Category {
    constructor(name, description) {
        this.id = (categories.length + 1).toString();
        this.name = name;
        this.description = description;
    }

    saveCategory() {
        categories.push(this);
        return this;
    }

    static getAll() {
        return categories;
    }

    static getById(id) {
        return categories.find((i) => i.id === id);
    }

    static update(category) {
        const index = categories.findIndex((i) => i.id === category.id);
        categories[index].name = category.name;
        categories[index].description = category.description;
    }

    static deleteById(id) {
        const index = categories.findIndex((i) => i.id === id);
        categories.splice(index, 1);
    }
};
