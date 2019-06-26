//zadatak 13 
let dan;
if (dan == 1){
	console.log("ponedeljak");
}
else if (dan == 2) {
	console.log("utorak");
}
else if (dan == 3) {
	console.log("sreda");
}
else if (dan == 4) {
	console.log("cetvrtak");
}
else if (dan == 5) {
	console.log("petak");
}
else if (dan == 6) {
	console.log("subota");
}
else if (dan == 7) {
	console.log("nedelja");
}
else {
	console.log("Upisite validan broj");
}

//zadatak 14
let ugao_1, ugao_2, ugao_3;
if (ugao_1>0 && ugao_2>0 && ugao_3>0 && ugao_1 + ugao_2 + ugao_3 == 180){
	console.log("Trougao je validan");
}
else {
	console.log("Trougao nije validan");
}

//zadatak 15
let procenat;
if(procenat <= 100 && procenat >= 90) {
	console.log("Ocena A");
}
else if (procenat<90 && procenat >= 80) {
	console.log("Ocena B");
}
else if (procenat<80 && procenat >= 70) {
	console.log("Ocena C");
}
else if (procenat<70 && procenat >= 60) {
	console.log("Ocena D");
}
else if (procenat<60 && procenat >= 40) {
	console.log("Ocena E");
}
else if (procenat<40 && procenat>=0){
	console.log("Ocena F");
}
else {
	console.log("Niste dobro uneli procenat");
}

//zadatak 16
let n,i;
for (i=1; i<=n; i++){
	console.log(i);
}

//zadatak 17
let n, i;
for (i=n; i>0; i--){
	console.log(i);
}

//zadatak 18
let i;
for (i="A"; i<="Z"; i++){
	console.log(i);
}

//zadatak 19
let i;
for (i=2; i<=100; i+=2){
	console.log(i);
}

//zadatak 20
let i;
for (i=1; i<100; i+=2){
	console.log(i);
}

//zadatak 21
let n, i, suma;
suma=0;
for (i=1; i<=n; i++){
	suma += i;
}
console.log(suma);

//zadatak 22
let n, i, suma;
suma=0;
for (i=2; i<=n; i+=2){
	suma += i;
}
console.log(suma);

//zadatak 23
let n, i, suma;
suma=0;
for (i=1; i<=n; i+=2){
	suma += i;
}
console.log(suma);
