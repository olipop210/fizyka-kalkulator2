/**
 * Oblicza kąt lotu rakiety względem powierzchni Ziemi (gravity turn) na podstawie wysokości.
 * 
 * @param {number} height - Wysokość rakiety nad powierzchnią Ziemi w metrach.
 * @param {number} maxAngle - Maksymalny kąt (na przykład 90 stopni) w stopniach.
 * @param {number} turnStartHeight - Wysokość, na której zaczyna się gravity turn w metrach.
 * @param {number} turnEndHeight - Wysokość, na której gravity turn jest zakończony w metrach.
 * @returns {number} - Kąt lotu rakiety w stopniach.
 */
function gravityTurnAngle(height : number, maxAngle = 85, turnStartHeight = 100, turnEndHeight = 110000) {
    // Upewnij się, że wysokość jest w granicach od startu do końca gravity turn
    if (height < turnStartHeight) {
        //console.log("Rakieta jeszcze się nie obróciła")
        return 0; // Rakieta jeszcze się nie obróciła
        
    }
    if (height > turnEndHeight) {
        //console.log(height)
        return maxAngle; // Rakieta zakończyła obrót
    }

    // Normalizuj wysokość do zakresu od 0 do 1
    let normalizedHeight = (height - turnStartHeight) / (turnEndHeight - turnStartHeight);

    // Oblicz kąt za pomocą funkcji logarytmicznej
    let angle = maxAngle * Math.log10(1 + 7.5 * normalizedHeight); // 9 to współczynnik dopasowujący krzywą


    // Upewnij się, że kąt nie przekracza maksymalnego kąta
    return Math.min(angle, maxAngle);
}

// Przykład użycia:
//let height = 50000; // Wysokość rakiety w metrach
//let angle = gravityTurnAngle(height);
// console.log(`Kąt lotu rakiety na wysokości ${height} metrów to ${angle.toFixed(2)} stopni.`);

export default gravityTurnAngle