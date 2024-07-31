function sortArrayScript() {
    let arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
    arr1.sort((a, b) => a - b);
    
    // Display the sorted array in the document
    document.getElementById('sortArrayOutput').textContent = 'Sorted Array: ' + arr1.join(', ');
}

document.getElementById('sortArrayOutput').addEventListener('click', sortArrayScript);
