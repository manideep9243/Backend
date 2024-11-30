document.getElementById('upload').addEventListener('change', handleFile);
document.getElementById('searchButton').addEventListener('click', searchRoll No);

let excelData = []; // Array to hold the parsed Excel data

// Function to handle file upload
function handleFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming the first sheet contains the relevant data
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        // Convert sheet to JSON format
        excelData = XLSX.utils.sheet_to_json(worksheet);
        alert('File loaded successfully!');
    };

    reader.readAsArrayBuffer(file);
}

// Function to search roll number
function searchRoll No() {
    const Roll No = document.getElementById('searchBar').value.trim();
    const resultDiv = document.getElementById('result');

    if (!Roll No) {
        resultDiv.textContent = 'Please enter a roll number.';
        return;
    }

    // Find the roll number in the data
    const record = excelData.find(row => row['Roll Number'] == Roll No);

    if (record) {
        // Display the details
        resultDiv.innerHTML = `
            <p><strong>Details for Roll Number ${Roll No}:</strong></p>
            <pre>${JSON.stringify(record, null, 2)}</pre>
        `;
    } else {
        resultDiv.textContent = `No details found for Roll Number ${Roll No}.`;
    }
}
