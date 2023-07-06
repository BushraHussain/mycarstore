export const autopart = {
    name: "autopart",
    type: 'document', // Model / Blue print / document
    title: "Autopart",
    fields: [
        {
            name: "title", // name act as unique ID
            title: "Title here",
            type: "string"
        },

        {
            name: "category", // name act as ID
            title: "Category here",
            type: "string"
        },

        {
            name: "price", // name act as ID
            title: "Product price",
            type: "number"
        },

        {
            name: "image", // name act as ID
            title: "Image here",
            type: "image"
        }
    ]
}