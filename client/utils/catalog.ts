// export const clothTypes = ['платья/сарафаны', 'блузы/рубашки', 'лонгсливы/худи', 'жакеты/пиджаки'];
// export const outerwearTypes = ['плащи/пальто', 'пуховики', 'куртки'];

import { idGenerator } from "./common";

const createProductTypeObj = (title: string) =>({
    title,
    checked: false,
    id: idGenerator(),
})

export const clothTypes= [
    "Platya",
    "Yubki",
    "Hoodi",
    "Longsleeve",
    "Platki",
    "Bryuki",
    "Pidjaki",
    "Balaklavy",
    "Futbolki",
].map(createProductTypeObj);

export const outerwearTypes= [
    "Kurtki",
    "Palto",
    "Dublyonki",
].map(createProductTypeObj);;

const productType = [
    "Platya",
    "Yubki",
    "Hoodi",
    "Longsleeve",
    "Platki",
    "Bryuki",
    "Pidjaki",
    "Kurtki",
    "Palto",
    "Dublyonki",
    "Sumki",
    "Balaklavy",
    "Kolca",
    "Stikery",
    "Futbolki"
  ].map(createProductTypeObj);