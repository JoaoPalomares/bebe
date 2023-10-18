"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BebeNormal_1 = require("./model/BebeNormal");
const BebePrematuro_1 = require("./model/BebePrematuro");
const BebeNatimorto_1 = require("./model/BebeNatimorto");
const b1 = new BebeNormal_1.BebeNormal(`João`, 62622696736, 2, 2, true);
const b2 = new BebePrematuro_1.BebePrematuro(`Dorival`, 51297656000159, 3, 3, 40);
const b3 = new BebeNatimorto_1.BebeNatimorto(`Henrique`, 35469559602, 4, 4, `mau desenvolvimento`);
b1.setNome(`Rogerio Ceni`);
b1.setId(38113713204);
b1.setAltura(30);
b1.setPeso(2);
b1.setVacinado(true);
console.log(`Nome: ${b1.getNome()}`);
console.log(`Id: ${b1.getId()}`);
console.log(`Altura: ${b1.getAltura()}`);
console.log(`Peso: ${b1.getPeso()}`);
console.log(`Vacinado: ${b1.getVacinado()}`);
console.log("\n");
b2.setNome(`Neymar`);
b2.setId(213131312231213);
b2.setAltura(27);
b2.setPeso(1.5);
b2.setSemanasGestacao(24);
console.log(`Nome: ${b2.getNome()}`);
console.log(`Id: ${b2.getId()}`);
console.log(`Altura: ${b2.getAltura()}`);
console.log(`Peso: ${b2.getPeso()}`);
console.log(`Semanas de Gestação: ${b2.getSemanasGestacao()}`);
console.log("\n");
b3.setNome(`Dorival`);
b3.setId(463245364823);
b3.setAltura(25);
b3.setPeso(1.7);
b3.setCausa(`Mau desenvolvimento`);
console.log(`Nome: ${b3.getNome()}`);
console.log(`Id: ${b3.getId()}`);
console.log(`Altura: ${b3.getAltura()}`);
console.log(`Peso: ${b3.getPeso()}`);
console.log(`Causa Morte: ${b3.getCausa()}`);
//# sourceMappingURL=index.js.map