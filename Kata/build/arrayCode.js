const mysteriousString = `iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f`;

const step1 = mysteriousString.split("");

const step2 = step1.slice(14,31);

step2.splice(5,2,'t')

const step4 = step2.reverse();

const step5 = step4.join('');

console.log(step5);