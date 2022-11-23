function marcaCarro (marca, modelo, ano,){

return { marca, modelo, ano,
};
}

const marca1=marcaCarro("Jaguar", "F Type", 2020);
const marca2=marcaCarro("Porshe", "Panamera", 2019);
const marca3=marcaCarro("McLaren", "P1", 2014);

console.log(marca1.modelo ,marca2.marca ,marca3.ano);
console.log(marca1.ano , marca2.modelo , marca3.marca);