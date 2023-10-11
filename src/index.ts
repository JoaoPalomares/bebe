import { BebeNormal } from "./model/BebeNormal";
import { BebePrematuro } from "./model/BebePrematuro";
import { BebeNatimorto } from "./model/BebeNatimorto";

const b1 = new BebeNormal (`João`, 62622696736, 2, 2, true);
const b2 = new BebePrematuro (`Dorival`, 51297656000159, 3, 3, 40);
const b3 = new BebeNatimorto (`Henrique`, 35469559602, 4, 4, `mau desenvolvimento`);

b1.setNome(`Rogerio Ceni`);
b1.setId(38113713204);
console.log(`Nome: ${b1.getNome()}`);
console.log(`Cpf: ${b1.getId()}`);
console.log(`Documento Identificador: ${b1.documentoIdentificador()}`);

console.log("\n");

b2.setNome(`Neymar`);
b2.setId(04761796000156);
console.log(`Nome: ${p2.getNome()}`);
console.log(`Taxa de Comissão: ${p2.getCnpj()}`);
console.log(`Documento Identificador: ${p2.documentoIdentificador()}`);