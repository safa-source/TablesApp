function run() {
    let tableName = document.getElementById("input1").value;
    let range = document.getElementById("input2").value;
    let resultDiv = document.getElementById("main");

    if (tableName && range) {
        let result = `<h4>Table of ${tableName}</h4>`;
        for (let i = 1; i <= range; i++) {
            result += `${tableName} x ${i} = ${tableName * i}<br>`;
        }
        resultDiv.innerHTML = result;
    }

    else {
        alert("Please enter valid inputs!");
    }
}

function reload() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("main").innerHTML = "";
}

