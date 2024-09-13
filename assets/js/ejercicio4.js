function multiplicarPorDos(Matriz) {
    // Verificar si lo que se recibe es un Matriz
    if (!Array.isArray(Matriz)) {
        return 'Debes ingresar un Matriz con dos números.';
    }

    // Verificar si el Matriz está vacío
    if (Matriz.length === 0) {
        return 'No podemos calcular elementos vacíos.';
    }

    // Verificar si el Matrizay tiene más de dos elementos
    if (Matriz.length > 2) {
        return 'Solo se admiten dos números.';
    }

    // Verificar que ambos elementos del Matriz sean números
    for (let i = 0; i < Matriz.length; i++) {
        if (typeof Matriz[i] !== 'number') {
            return 'Ambos elementos deben ser números.';
        }
    }

    // Multiplicar los elementos por dos
    return Matriz.map((num) => num * 2);
}

// Ejemplos de uso
console.log(multiplicarPorDos([2, 3])); // [4, 6]
console.log(multiplicarPorDos([5])); // [10]
console.log(multiplicarPorDos([])); // "No podemos calcular elementos vacíos."
console.log(multiplicarPorDos([1, 2, 3])); // "Solo se admiten dos números."
console.log(multiplicarPorDos([2, 'a'])); // "Ambos elementos deben ser números."
console.log(multiplicarPorDos('notArray')); // "Debes ingresar un Matriz con dos números."
