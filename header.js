function addFields() {
    const form = document.getElementById("rateForm");

    const fields = [
        { label: 'EUR/DOL', name: 'eur_dol' },
        { label: 'Gold', name: 'gold' },
        { label: 'DOL/YEN', name: 'dol_yen' }
    ];

    fields.forEach(field => {
        const div = document.createElement("div");
        div.classList.add("form-group");

        const label = document.createElement("label");
        label.innerText = field.label;
        div.appendChild(label);

        const input = document.createElement("input");
        input.type = "text";
        input.name = field.name;
        div.appendChild(input);

        form.appendChild(div);
    });
}