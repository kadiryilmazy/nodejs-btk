const categories = [
    {
        id: "1",
        name: "telefon",
        description: "Telefon kategorisi, telefon ve iletişim cihazlarını içerir.",
    },
    {
        id: "2",
        name: "bilgisayar",
        description: "Bilgisayar kategorisi, masaüstü ve dizüstü bilgisayarları içerir.",
    },
    {
        id: "3",
        name: "beyaz eşya",
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
