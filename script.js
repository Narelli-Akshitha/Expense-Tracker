let sum = 0;

const n = document.getElementById("n");
const a = document.getElementById("a");
const c = document.getElementById("c");
const d = document.getElementById("d");
const te = document.getElementById("te");
const tb = document.getElementById("tb");
const ae = document.getElementById("ae");

ae.addEventListener("click", () => {

    // Validation
    if (n.value === "" || a.value === "" || d.value === "") {
        alert("Please fill all fields!");
        return;
    }

    const amount = parseFloat(a.value);

    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    td1.textContent = n.value;
    td2.textContent = amount;
    td3.textContent = c.value;
    td4.textContent = d.value;

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", () => {

        // Remove old amount from total
        sum -= amount;
        te.textContent = sum;

        // Load values into form
        n.value = td1.textContent;
        a.value = td2.textContent;
        c.value = td3.textContent;
        d.value = td4.textContent;

        // Remove current row
        tr.remove();
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        sum -= parseFloat(td2.textContent);
        te.textContent = sum;
        tr.remove();
    });

    td5.appendChild(editBtn);
    td5.appendChild(deleteBtn);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tb.appendChild(tr);

    // Update total
    sum += amount;
    te.textContent = sum;

    // Clear form
    n.value = "";
    a.value = "";
    c.selectedIndex = 0;
    d.value = "";
});