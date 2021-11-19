    async function getPhotographers() {
        // TODO : Replace with data from the JSON file
        const photographers = [
            {
                "name": "My test data",
                "id": 1,
                "city": "London",
                "country": "UK",
                "tagline": "This is my test data",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Other test data",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "This is my other test data",
                "price": 500,
                "portrait": "account.png"
            },
        ]
        // Return photographer array only once
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Retreive photographer data
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    