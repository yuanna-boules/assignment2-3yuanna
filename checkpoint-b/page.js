// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.
import { items } from "./items.js";

export function renderItems(list) {
    const listElement = document.querySelector("#list");

    listElement.innerHTML = "";

    list.forEach((item) => {
        const li = document.createElement("li");

        li.className = "entry";
        li.textContent = `${item.name} - ${item.price} EGP`;

        listElement.append(li);
    });
}

export function matching() {
    return items.filter((item) => item.price < 100);
}

export function start() {
    renderItems(items);

    document.querySelector("#pick").addEventListener("click", () => {
        renderItems(matching());
    });
}
