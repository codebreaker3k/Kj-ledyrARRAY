document.addEventListener('DOMContentLoaded', function () {
    // Oppgave 1: Fyll Kjæledyr-Arrayet
    const animals = ["Hund", "Katt", "Kanin", "Hamster", "Fugl", "Fisk"];
    const colors = ["Rød", "Blå", "Grønn", "Gul", "Lilla", "Hvit"];
    const traits = [
        "Vennlig", "Energisk", "Rolig", "Nysgjerrig", "Sky",
        "Leken", "Intelligent", "Trofast", "Uavhengig", "Sosial",
        "Snill", "Beskyttende", "Kjærlig", "Forsiktig", "Eventyrlysten",
        "Stille", "Lydig", "Utholdende", "Modig", "Tålmodig",
        "Morsom", "Aktiv", "Rolig", "Selvsikker", "Nervøs"
    ];

    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const randomizedColors = Array.from({ length: animals.length }, () => getRandomElement(colors));
    const randomizedTraits = Array.from({ length: animals.length }, () => getRandomElement(traits));
    const randomizedAges = Array.from({ length: animals.length }, () => Math.floor(Math.random() * 15) + 1);

    const randomizedPets = randomizedColors.map((color, index) => ({
        name: animals[index],
        color,
        age: randomizedAges[index],
        trait: randomizedTraits[index]
    }));

    // Console.log detaljene til hvert kjæledyr
    console.log("Farger:", randomizedColors.join(', '));
    console.log("Trekk:", randomizedTraits.join(', '));
    console.log("Alder:", randomizedAges.join(', '));

    const randomPetIndex = Math.floor(Math.random() * animals.length);
    const randomPet = randomizedPets[randomPetIndex];

    console.log(`Tilfeldig Kjæledyr: ${randomPet.name}, Farge: ${randomPet.color}, Alder: ${randomPet.age}, Trekk: ${randomPet.trait}`);
});
