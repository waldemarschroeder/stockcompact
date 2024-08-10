// Code wird beim Laden der Seite ausgeführt
const form = document.getElementById("headerInfos");

const fields = [
    { label: 'S&P 500', value: '5,344.16' },
    { label: 'DOW', value: '39,497.54' },
    { label: 'EUR/USD', value: '1.09' },
    { label: 'Gold', value: '2,430.80 USD' },
    { label: 'USD/JPY', value: '146.67' }
];

fields.forEach(field => {
    const div = document.createElement("div");
    div.classList.add("form-group");

    const container = document.createElement("div");
    container.classList.add("container");

    const label = document.createElement("label");
    label.innerText = field.label;
    container.appendChild(label);

    const value = document.createElement("span");
    value.classList.add("value");
    value.innerText = field.value;
    container.appendChild(value);

    div.appendChild(container);
    form.appendChild(div);
});