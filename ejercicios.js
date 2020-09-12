function reverseString(s) {
    try {
        var strReverse = s.split('').reverse().join('');
        console.log(strReverse);
    } catch (e) {
        console.log('s.split is not a function');
        console.log(s);
    }
}

// reverseString("1234");
// reverseString(1234);

function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        let multi3 = false;
        let multi5 = false;
        if (i % 3 === 0) {
            multi3 = true;
        }
        if (i % 5 === 0) {
            multi5 = true;
        }

        if (multi3 && multi5) {
            console.log('FizzBuzz');
        } else if (multi3 && !multi5) {
            console.log('Fizz');
        } else if (!multi3 && multi5) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz(15);

name = ["ball", "bat", "glove", "glove", "glove"]
price = [2, 3, 1, 2, 1];
weight = [2, 5, 1, 1, 1];

function numDuplicates(name, price, weight) {
    // Write your code here
    let duplicados = 0;
    let temporal = [];
    let producto = [];

    for (let i = 0; i < name.length; i++) {
        producto = [name[i], price[i], weight[i]];
        for (let j = 1; j < name.length; j++) {
            temporal = [name[j], price[j], weight[j]];
        }
    }
    if (temporal[0] == producto[0] && temporal[1] == producto[1] && temporal[2] == producto[2]) {
        duplicados += 1;
    }
    return duplicados;
}


console.log(numDuplicates(name, price, weight));


names = ['Louis IX', 'Louis VIII', 'Maria III', 'Oscar IV', 'Adams XXX', 'Anuar III', 'Maria III', 'Oscar V']

// function sortRoman(names) {
//     for (i in names) {
//         let name = names[i];
//         let num = name.split(' ')[1];
//         console.log(num);
//         // Pasar a decimal
//         if (){ 

//         }
//     }

// }

// sortRoman(names);

class SuperStack {
    constructor() {
        this.superStack = new Array()
    }

    push(element) {
        this.superStack.push(element)
    }

    pop() {
        return this.superStack.pop()
    }

    // add k to each of the bottom e elements in the stack
    inc(e, k) {
        for (let i = 0; i < e; i++) {
            this.superStack[i] += k
        }
    }

    getTopOfStack() {
        return this.superStack[this.superStack.length - 1]
    }

    printTopOfStack() {
        const topOfStack = this.getTopOfStack()
        if (topOfStack === undefined) {
            console.log('EMPTY')
        } else {
            console.log(topOfStack)
        }
    }
}

// const superStack = operations => {
//     const ss = new SuperStack()

//     operations.forEach(operation => {
//         if (operation.startsWith('push')) {
//             ss.push(Number(operation.split(' ')[1]))
//         } else if (operation.startsWith('pop')) {
//             ss.pop()
//         } else if (operation.startsWith('inc')) {
//             ss.inc(Number(operation.split(' ')[1]), Number(operation.split(' ')[2]))
//         } else {
//             // invalid
//         }
//         ss.printTopOfStack()
//     })
// }

// const operations = [
//     'push 4',
//     'push 5',
//     'inc 2 1',
//     'pop',
//     'pop'
// ]
// console.log(superStack(operations));



function romanize(n) {
    var
        values = [1, 5, 10, 50],
        letras = ['I', 'V', 'X', 'L'],
        res = [],
        num, letra, val, pos, insert

    for (var i = 4; num = values[i], letra = letras[i]; i--) {
        // Suficientemente grande
        if (n >= num) {
            // Número de letras repetidas
            var r = Math.floor(n / num);

            // Restamos el actual
            n -= r * num;

            if (r < 4) {
                // Metemos las letras
                while (r--) {
                    res.push(letra);
                }
            } else {
                // No se pueden repetir 4+ veces
                val = res.pop(); // Última letra

                // Si es el string vacío o letra == "M" (no hay anterior)
                // usamos la letra anterior a esta
                pos = (val ? letras.indexOf(val) : i) + 1;

                // Y si letra == "M" -> letras[pos] no existirá y usamos M
                insert = letra + (letras[pos] || 'M');

                // Insertamos el string
                res.push(insert);
            }
        } else {
            // Si no vamos a poner letra usamos un ""
            // para que no afecte pop
            res.push('');
        }
    }

    return res.join('');
}

romanize(18); // "XVIII"