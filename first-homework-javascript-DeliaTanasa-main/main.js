const caesarCriptare = (input, options) => {
    if (typeof input !== "string") {
        throw new Error("InvalidType");
    }
    const caesarCriptare = (input, options) => {
    if (typeof input !== "string") {
        throw new Error("InvalidType");
    }
    
    if (!options || typeof options.shift !== "number") {
        throw new Error("InvalidInput");
    }
    
    if (input.length === 0) {
        return "";
    }

    if (!/^[A-Za-z ]*$/.test(input)) {
        throw new Error("InvalidInput");
    }

    const shift = options.shift;
    let rezultat = "";
    for (let i = 0; i < input.length; i++) {
        const caracter = input[i];
        if (caracter === ' ') {
            rezultat += ' ';
        } else {
            const majuscula = caracter >= 'A' && caracter <= 'Z';
            const literamica = caracter >= 'a' && caracter <= 'z';
            if (!majuscula && !literamica) {
                rezultat += caracter;
            } else {
                let baza;
                if (majuscula) {
                    baza = 'A'.charCodeAt(0);
                } else {
                    baza = 'a'.charCodeAt(0);
                }
                const normalizat = caracter.charCodeAt(0) - baza;
                const deplasat = (normalizat + shift + 26 * 1000) % 26;
                rezultat += String.fromCharCode(baza + deplasat);
            }
        }
    }
    return rezultat;
};

const caesarDecriptare = (input, options) => {
    if (typeof input !== "string") {
        throw new Error("InvalidType");
    }
    
    if (!options || typeof options.shift !== "number") {
        throw new Error("InvalidInput");
    }
    
    if (input.length === 0) {
        return "";
    }

    if (!/^[A-Za-z ]*$/.test(input)) {
        throw new Error("InvalidInput");
    }

    const shift = -options.shift;
    let rezultat = "";
    for (let i = 0; i < input.length; i++) {
        const caracter = input[i];
        if (caracter === ' ') {
            rezultat += ' ';
        } else {
            const majuscula = caracter >= 'A' && caracter <= 'Z';
            const literamica = caracter >= 'a' && caracter <= 'z';
            if (!majuscula && !literamica) {
                rezultat += caracter;
            } else {
                let baza;
                if (majuscula) {
                    baza = 'A'.charCodeAt(0);
                } else {
                    baza = 'a'.charCodeAt(0);
                }
                const normalizat = caracter.charCodeAt(0) - baza;
                const deplasat = (normalizat + shift + 26 * 1000) % 26;
                rezultat += String.fromCharCode(baza + deplasat);
            }
        }
    }
    return rezultat;
};

const rleCompresie = (input) => {
    if (typeof input !== "string") {
        throw new Error("InvalidType");
    }
    
    if (input.length === 0) {
        return "";
    }
    
    if (!/^[A-Z]+$/.test(input)) {
        throw new Error("InvalidInput");
    }
    
    let rezultat = "";
    let numar = 1;
    for (let i = 1; i <= input.length; i++) {
        if (i < input.length && input[i] === input[i - 1]) {
            numar++;
        } else {
            rezultat += String(numar) + input[i - 1];
            numar = 1;
        }
    }
    return rezultat;
};

const rleDecompresie = (input) => {
    if (typeof input !== "string") {
        throw new Error("InvalidType");
    }
    
    if (input.length === 0) {
        return "";
    }

    const areCifre = /\d/.test(input);

    if (areCifre) {
        if (!/^(?:\d+[A-Z])+$/u.test(input)) {
            throw new Error("InvalidInput");
        }
        
        let i = 0;
        let rezultat = "";
        while (i < input.length) {
            let sirNumar = "";
            while (i < input.length && /\d/.test(input[i])) {
                sirNumar += input[i];
                i++;
            }
            const numar = parseInt(sirNumar, 10);
            if (!Number.isFinite(numar) || numar < 0 || i >= input.length) {
                throw new Error("InvalidInput");
            }
            const caracter = input[i];
            if (!/[A-Z]/.test(caracter)) {
                throw new Error("InvalidInput");
            }
            rezultat += caracter.repeat(numar);
            i++;
        }
        return rezultat;
    }

    throw new Error("InvalidInput");
};

const textProcessor = (algo, operation, input, options) => {
    if (algo === "caesar") {
        if (operation) {
            return caesarCriptare(input, options);
        } else {
            return caesarDecriptare(input, options);
        }
    }

    if (algo === "rle") {
        if (operation) {
            return rleCompresie(input);
        } else {
            return rleDecompresie(input);
        }
    }

    throw new Error("InvalidInput");
};

module.exports = {
    textProcessor
}
    if (!options || typeof options.shift !== "number") {
        throw new Error("InvalidInput");
    }
    
    if (input.length === 0) {
        return "";
    }

    if (!/^[A-Za-z ]*$/.test(input)) {
        throw new Error("InvalidInput");
    }

    const shift = options.shift;
    let rezultat = "";
    for (let i = 0; i < input.length; i++) {
        const caracter = input[i];
        if (caracter === ' ') {
            rezultat += ' ';
        } else {
            const majuscula = caracter >= 'A' && caracter <= 'Z';
            const literamica = caracter >= 'a' && caracter <= 'z';
            if (!majuscula && !literamica) {
                rezultat += caracter;
            } else {
                let baza;
                if (majuscula) {
                    baza = 'A'.charCodeAt(0);
                } else {
                    baza = 'a'.charCodeAt(0);
                }
                const normalizat = caracter.charCodeAt(0) - baza;
                const deplasat = (normalizat + shift + 26 * 1000) % 26;
                rezultat += String.fromCharCode(baza + deplasat);
            }
        }
    }
    return rezultat;
};

const caesarDecriptare = (input, options) => {
    if (typeof input !== "string") {
        throw new Error("InvalidType");
    }
    
    if (!options || typeof options.shift !== "number") {
        throw new Error("InvalidInput");
    }
    
    if (input.length === 0) {
        return "";
    }

    if (!/^[A-Za-z ]*$/.test(input)) {
        throw new Error("InvalidInput");
    }

    const shift = -options.shift;
    let rezultat = "";
    for (let i = 0; i < input.length; i++) {
        const caracter = input[i];
        if (caracter === ' ') {
            rezultat += ' ';
        } else {
            const majuscula = caracter >= 'A' && caracter <= 'Z';
            const literamica = caracter >= 'a' && caracter <= 'z';
            if (!majuscula && !literamica) {
                rezultat += caracter;
            } else {
                let baza;
                if (majuscula) {
                    baza = 'A'.charCodeAt(0);
                } else {
                    baza = 'a'.charCodeAt(0);
                }
                const normalizat = caracter.charCodeAt(0) - baza;
                const deplasat = (normalizat + shift + 26 * 1000) % 26;
                rezultat += String.fromCharCode(baza + deplasat);
            }
        }
    }
    return rezultat;
};

const rleCompresie = (input) => {
    if (typeof input !== "string") {
        throw new Error("InvalidType");
    }
    
    if (input.length === 0) {
        return "";
    }
    
    if (!/^[A-Z]+$/.test(input)) {
        throw new Error("InvalidInput");
    }
    
    let rezultat = "";
    let numar = 1;
    for (let i = 1; i <= input.length; i++) {
        if (i < input.length && input[i] === input[i - 1]) {
            numar++;
        } else {
            rezultat += String(numar) + input[i - 1];
            numar = 1;
        }
    }
    return rezultat;
};

const rleDecompresie = (input) => {
    if (typeof input !== "string") {
        throw new Error("InvalidType");
    }
    
    if (input.length === 0) {
        return "";
    }

    const areCifre = /\d/.test(input);

    if (areCifre) {
        if (!/^(?:\d+[A-Z])+$/u.test(input)) {
            throw new Error("InvalidInput");
        }
        
        let i = 0;
        let rezultat = "";
        while (i < input.length) {
            let sirNumar = "";
            while (i < input.length && /\d/.test(input[i])) {
                sirNumar += input[i];
                i++;
            }
            const numar = parseInt(sirNumar, 10);
            if (!Number.isFinite(numar) || numar < 0 || i >= input.length) {
                throw new Error("InvalidInput");
            }
            const caracter = input[i];
            if (!/[A-Z]/.test(caracter)) {
                throw new Error("InvalidInput");
            }
            rezultat += caracter.repeat(numar);
            i++;
        }
        return rezultat;
    }

    throw new Error("InvalidInput");
};

const textProcessor = (algo, operation, input, options) => {
    if (algo === "caesar") {
        if (operation) {
            return caesarCriptare(input, options);
        } else {
            return caesarDecriptare(input, options);
        }
    }

    if (algo === "rle") {
        if (operation) {
            return rleCompresie(input);
        } else {
            return rleDecompresie(input);
        }
    }

    throw new Error("InvalidInput");
};

module.exports = {
    textProcessor
}
