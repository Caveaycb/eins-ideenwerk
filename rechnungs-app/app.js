const KEY = "rechnung_demo_v1";
const taxRates = [0, 7, 19];
const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

const state = loadState();
let currentInvoiceId = null;
let draftItems = [emptyItem()];

function $(selector) {
    return document.querySelector(selector);
}

function loadState() {
    const saved = localStorage.getItem(KEY);
    if (saved) return JSON.parse(saved);
    return {
        settings: {
            companyName: "",
            ownerName: "",
            street: "",
            postal: "",
            city: "",
            country: "Deutschland",
            email: "",
            phone: "",
            taxNumber: "",
            vatId: "",
            iban: "",
            bic: "",
            bankName: "",
            paymentDays: 14,
            invoicePrefix: "RE-{year}-",
            invoicePadding: 4,
            nextByYear: {},
        },
        customers: [],
        invoices: [],
    };
}

function persist() {
    localStorage.setItem(KEY, JSON.stringify(state));
}

function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 2600);
}

function today() {
    return new Date().toISOString().slice(0, 10);
}

function parseAmount(value) {
    const parsed = Number(String(value || "0").replace(",", "."));
    return Number.isFinite(parsed) ? parsed : 0;
}

function round2(value) {
    return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

function money(value) {
    return euro.format(value || 0);
}

function escapeHtml(value) {
    return String(value || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
    return escapeHtml(value).replaceAll("'", "&#039;");
}

function emptyItem() {
    return {
        description: "",
        quantity: "1",
        unitPrice: "",
        priceMode: "net",
        taxRate: "19",
    };
}

function showView(id) {
    document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === id));
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === id));
}

function calculateLine(item) {
    const quantity = parseAmount(item.quantity || 1);
    const rate = Number(item.taxRate || 0) / 100;
    const entered = parseAmount(item.unitPrice || 0);
    const netUnit = item.priceMode === "gross" ? entered / (1 + rate) : entered;
    const net = round2(netUnit * quantity);
    const tax = round2(net * rate);
    return { netUnit: round2(netUnit), net, tax, gross: round2(net + tax) };
}

function calculateInvoice(items) {
    return items.reduce((sum, item) => {
        const line = calculateLine(item);
        sum.net = round2(sum.net + line.net);
        sum.tax = round2(sum.tax + line.tax);
        sum.gross = round2(sum.gross + line.gross);
        return sum;
    }, { net: 0, tax: 0, gross: 0 });
}

function nextNumber(issueDate = today()) {
    const year = issueDate.slice(0, 4);
    const next = state.settings.nextByYear[year] || 1;
    const prefix = (state.settings.invoicePrefix || "RE-{year}-").replace("{year}", year);
    return `${prefix}${String(next).padStart(Number(state.settings.invoicePadding || 4), "0")}`;
}

function reserveNumber(issueDate) {
    const year = issueDate.slice(0, 4);
    const number = nextNumber(issueDate);
    state.settings.nextByYear[year] = (state.settings.nextByYear[year] || 1) + 1;
    return number;
}

function customerTitle(customer) {
    return customer ? (customer.company || customer.name || "Kunde") : "Kunde";
}

function renderAll() {
    renderSettings();
    renderCustomers();
    renderCustomerSelect();
    renderInvoices();
    renderItems();
}

function renderSettings() {
    const s = state.settings;
    $("#company-name").value = s.companyName || "";
    $("#owner-name").value = s.ownerName || "";
    $("#company-street").value = s.street || "";
    $("#company-postal").value = s.postal || "";
    $("#company-city").value = s.city || "";
    $("#company-country").value = s.country || "Deutschland";
    $("#company-email").value = s.email || "";
    $("#company-phone").value = s.phone || "";
    $("#tax-number").value = s.taxNumber || "";
    $("#vat-id").value = s.vatId || "";
    $("#iban").value = s.iban || "";
    $("#bic").value = s.bic || "";
    $("#bank-name").value = s.bankName || "";
    $("#default-payment-days").value = s.paymentDays || 14;
    $("#invoice-prefix").value = s.invoicePrefix || "RE-{year}-";
    $("#invoice-padding").value = s.invoicePadding || 4;
}

function collectSettings() {
    state.settings = {
        ...state.settings,
        companyName: $("#company-name").value,
        ownerName: $("#owner-name").value,
        street: $("#company-street").value,
        postal: $("#company-postal").value,
        city: $("#company-city").value,
        country: $("#company-country").value,
        email: $("#company-email").value,
        phone: $("#company-phone").value,
        taxNumber: $("#tax-number").value,
        vatId: $("#vat-id").value,
        iban: $("#iban").value,
        bic: $("#bic").value,
        bankName: $("#bank-name").value,
        paymentDays: Number($("#default-payment-days").value || 14),
        invoicePrefix: $("#invoice-prefix").value || "RE-{year}-",
        invoicePadding: Number($("#invoice-padding").value || 4),
    };
}

function renderCustomers() {
    $("#customer-count").textContent = String(state.customers.length);
    const list = $("#customer-list");
    if (!state.customers.length) {
        list.innerHTML = `<article class="card"><strong>Noch keine Kunden</strong><p>Lege zuerst einen Kunden an.</p></article>`;
        return;
    }
    list.innerHTML = state.customers.map((customer) => {
        const lines = [
            customer.name && customer.company ? customer.name : "",
            customer.street,
            `${customer.postal || ""} ${customer.city || ""}`.trim(),
            customer.email,
        ].filter(Boolean).map(escapeHtml).join("<br>");
        return `<article class="card">
            <strong>${escapeHtml(customerTitle(customer))}</strong>
            <p>${lines}</p>
            <button data-edit-customer="${customer.id}">Bearbeiten</button>
        </article>`;
    }).join("");
}

function renderCustomerSelect() {
    const selected = $("#invoice-customer").value;
    $("#invoice-customer").innerHTML = `<option value="">Kunde auswählen</option>` + state.customers.map((customer) => (
        `<option value="${customer.id}">${escapeHtml(customerTitle(customer))}</option>`
    )).join("");
    if (selected) $("#invoice-customer").value = selected;
}

function clearCustomerForm() {
    $("#customer-id").value = "";
    $("#customer-number").value = "";
    $("#customer-company").value = "";
    $("#customer-name").value = "";
    $("#customer-street").value = "";
    $("#customer-postal").value = "";
    $("#customer-city").value = "";
    $("#customer-country").value = "Deutschland";
    $("#customer-email").value = "";
    $("#customer-vat").value = "";
}

function fillCustomer(customer) {
    $("#customer-id").value = customer.id;
    $("#customer-number").value = customer.number || "";
    $("#customer-company").value = customer.company || "";
    $("#customer-name").value = customer.name || "";
    $("#customer-street").value = customer.street || "";
    $("#customer-postal").value = customer.postal || "";
    $("#customer-city").value = customer.city || "";
    $("#customer-country").value = customer.country || "Deutschland";
    $("#customer-email").value = customer.email || "";
    $("#customer-vat").value = customer.vatId || "";
}

function collectCustomer() {
    return {
        id: $("#customer-id").value || String(Date.now()),
        number: $("#customer-number").value,
        company: $("#customer-company").value,
        name: $("#customer-name").value,
        street: $("#customer-street").value,
        postal: $("#customer-postal").value,
        city: $("#customer-city").value,
        country: $("#customer-country").value,
        email: $("#customer-email").value,
        vatId: $("#customer-vat").value,
    };
}

function resetInvoice() {
    currentInvoiceId = null;
    draftItems = [emptyItem()];
    $("#invoice-hint").textContent = "Entwurf ohne Rechnungsnummer";
    $("#invoice-customer").value = "";
    $("#issue-date").value = today();
    $("#service-date").value = today();
    $("#payment-days").value = state.settings.paymentDays || 14;
    $("#notes").value = "Vielen Dank für den Auftrag.";
    renderItems();
}

function renderItems() {
    $("#items").innerHTML = draftItems.map((item, index) => {
        const rates = taxRates.map((rate) => `<option value="${rate}" ${String(item.taxRate) === String(rate) ? "selected" : ""}>${rate} %</option>`).join("");
        return `<div class="item-row" data-index="${index}">
            <label>Leistung <input data-field="description" value="${escapeAttr(item.description)}" placeholder="z. B. Beratung"></label>
            <label>Menge <input data-field="quantity" inputmode="decimal" value="${escapeAttr(item.quantity)}"></label>
            <label>Betrag <input data-field="unitPrice" inputmode="decimal" value="${escapeAttr(item.unitPrice)}" placeholder="0,00"></label>
            <label>Eingabe <select data-field="priceMode">
                <option value="net" ${item.priceMode === "net" ? "selected" : ""}>Netto</option>
                <option value="gross" ${item.priceMode === "gross" ? "selected" : ""}>Brutto</option>
            </select></label>
            <label>MwSt. <select data-field="taxRate">${rates}</select></label>
            <button class="remove" data-remove-item="${index}" aria-label="Position entfernen">×</button>
        </div>`;
    }).join("");
    renderTotals();
}

function renderTotals() {
    const totals = calculateInvoice(draftItems);
    $("#sum-net").textContent = money(totals.net);
    $("#sum-tax").textContent = money(totals.tax);
    $("#sum-gross").textContent = money(totals.gross);
}

function collectInvoice(finalize = false) {
    if (!$("#invoice-customer").value) throw new Error("Bitte einen Kunden auswählen.");
    if (!draftItems.length || draftItems.some((item) => !item.description.trim())) {
        throw new Error("Jede Position braucht eine Beschreibung.");
    }
    const issueDate = $("#issue-date").value || today();
    const totals = calculateInvoice(draftItems);
    const existing = currentInvoiceId ? state.invoices.find((invoice) => invoice.id === currentInvoiceId) : null;
    if (existing?.status === "final") throw new Error("Finale Rechnungen sind gesperrt.");
    return {
        id: currentInvoiceId || String(Date.now()),
        number: finalize ? reserveNumber(issueDate) : existing?.number || "",
        status: finalize ? "final" : "draft",
        customerId: $("#invoice-customer").value,
        issueDate,
        serviceDate: $("#service-date").value || issueDate,
        dueDate: dueDate(issueDate, Number($("#payment-days").value || state.settings.paymentDays || 14)),
        notes: $("#notes").value,
        items: JSON.parse(JSON.stringify(draftItems)),
        totals,
    };
}

function dueDate(issueDate, days) {
    const date = new Date(`${issueDate}T00:00:00`);
    date.setDate(date.getDate() + days);
    return date.toISOString().slice(0, 10);
}

function saveInvoice(finalize = false) {
    const invoice = collectInvoice(finalize);
    const index = state.invoices.findIndex((item) => item.id === invoice.id);
    if (index >= 0) state.invoices[index] = invoice;
    else state.invoices.unshift(invoice);
    currentInvoiceId = invoice.id;
    persist();
    renderInvoices();
    $("#next-number").textContent = nextNumber();
    $("#invoice-hint").textContent = finalize ? `Finalisiert: ${invoice.number}` : "Entwurf gespeichert";
    toast(finalize ? `Rechnung ${invoice.number} finalisiert.` : "Entwurf gespeichert.");
    if (finalize) openPrint(invoice.id);
}

function renderInvoices() {
    $("#next-number").textContent = nextNumber();
    const finalTotal = state.invoices
        .filter((invoice) => invoice.status === "final")
        .reduce((sum, invoice) => round2(sum + invoice.totals.gross), 0);
    $("#final-total").textContent = money(finalTotal);
    if (!state.invoices.length) {
        $("#invoice-list").innerHTML = `<tr><td colspan="6">Noch keine Rechnungen vorhanden.</td></tr>`;
        return;
    }
    $("#invoice-list").innerHTML = state.invoices.map((invoice) => {
        const customer = state.customers.find((item) => item.id === invoice.customerId);
        const action = invoice.status === "final"
            ? `<button data-print="${invoice.id}">PDF</button>`
            : `<button data-load="${invoice.id}">Bearbeiten</button>`;
        return `<tr>
            <td>${escapeHtml(invoice.number || "Entwurf")}</td>
            <td>${escapeHtml(customerTitle(customer))}</td>
            <td>${escapeHtml(invoice.issueDate)}</td>
            <td><span class="status ${invoice.status}">${invoice.status === "final" ? "final" : "Entwurf"}</span></td>
            <td class="num">${money(invoice.totals.gross)}</td>
            <td class="num">${action}</td>
        </tr>`;
    }).join("");
}

function loadInvoice(id) {
    const invoice = state.invoices.find((item) => item.id === id);
    if (!invoice) return;
    currentInvoiceId = invoice.id;
    draftItems = JSON.parse(JSON.stringify(invoice.items));
    $("#invoice-hint").textContent = "Entwurf bearbeiten";
    $("#invoice-customer").value = invoice.customerId;
    $("#issue-date").value = invoice.issueDate;
    $("#service-date").value = invoice.serviceDate;
    $("#payment-days").value = state.settings.paymentDays || 14;
    $("#notes").value = invoice.notes || "";
    renderItems();
    showView("invoice");
}

function openPrint(id) {
    const invoice = state.invoices.find((item) => item.id === id);
    const customer = state.customers.find((item) => item.id === invoice.customerId);
    const s = state.settings;
    const rows = invoice.items.map((item) => {
        const line = calculateLine(item);
        return `<tr>
            <td>${escapeHtml(item.description)}</td>
            <td class="num">${escapeHtml(item.quantity)}</td>
            <td class="num">${money(line.netUnit)}</td>
            <td class="num">${escapeHtml(item.taxRate)} %</td>
            <td class="num">${money(line.net)}</td>
            <td class="num">${money(line.tax)}</td>
            <td class="num">${money(line.gross)}</td>
        </tr>`;
    }).join("");
    const taxId = s.vatId || s.taxNumber;
    const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Rechnung ${escapeHtml(invoice.number)}</title><link rel="stylesheet" href="./styles.css"></head>
    <body><main class="print-page">
        <section class="print-head">
            <div>
                <p>${escapeHtml(s.companyName)} · ${escapeHtml(s.street)} · ${escapeHtml(s.postal)} ${escapeHtml(s.city)}</p>
                <h1>Rechnung</h1>
                <address><strong>${escapeHtml(customerTitle(customer))}</strong><br>${escapeHtml(customer?.name && customer?.company ? customer.name : "")}<br>${escapeHtml(customer?.street)}<br>${escapeHtml(customer?.postal)} ${escapeHtml(customer?.city)}<br>${escapeHtml(customer?.country)}</address>
            </div>
            <div class="sender"><strong>${escapeHtml(s.companyName)}</strong><br>${escapeHtml(s.ownerName)}<br>${escapeHtml(s.street)}<br>${escapeHtml(s.postal)} ${escapeHtml(s.city)}<br>${escapeHtml(s.country)}<br>${escapeHtml(s.email)}<br>${escapeHtml(s.phone)}</div>
        </section>
        <section class="print-meta">
            <div><span>Rechnungsnummer</span><strong>${escapeHtml(invoice.number)}</strong></div>
            <div><span>Rechnungsdatum</span><strong>${escapeHtml(invoice.issueDate)}</strong></div>
            <div><span>Leistungsdatum</span><strong>${escapeHtml(invoice.serviceDate)}</strong></div>
            <div><span>Fällig bis</span><strong>${escapeHtml(invoice.dueDate)}</strong></div>
        </section>
        <table><thead><tr><th>Leistung</th><th class="num">Menge</th><th class="num">Einzel netto</th><th class="num">MwSt.</th><th class="num">Netto</th><th class="num">Steuer</th><th class="num">Brutto</th></tr></thead><tbody>${rows}</tbody></table>
        <aside class="totals print-totals">
            <div><span>Netto</span><strong>${money(invoice.totals.net)}</strong></div>
            <div><span>MwSt.</span><strong>${money(invoice.totals.tax)}</strong></div>
            <div class="grand"><span>Brutto</span><strong>${money(invoice.totals.gross)}</strong></div>
        </aside>
        <section class="print-note"><p>${escapeHtml(invoice.notes)}</p><p>Bitte überweisen Sie den Rechnungsbetrag bis zum ${escapeHtml(invoice.dueDate)}.</p><p><strong>${escapeHtml(s.bankName)}</strong><br>IBAN: ${escapeHtml(s.iban)}<br>BIC: ${escapeHtml(s.bic)}</p><p>Steuerangabe: ${escapeHtml(taxId)}</p></section>
    </main><button class="print-action" onclick="window.print()">Als PDF speichern</button></body></html>`;
    const win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
}

document.addEventListener("click", (event) => {
    const tab = event.target.closest(".tab");
    if (tab) showView(tab.dataset.view);
    if (event.target.id === "start-invoice") {
        resetInvoice();
        showView("invoice");
    }
    if (event.target.id === "add-item") {
        draftItems.push(emptyItem());
        renderItems();
    }
    if (event.target.dataset.removeItem) {
        draftItems.splice(Number(event.target.dataset.removeItem), 1);
        if (!draftItems.length) draftItems.push(emptyItem());
        renderItems();
    }
    if (event.target.dataset.editCustomer) {
        const customer = state.customers.find((item) => item.id === event.target.dataset.editCustomer);
        fillCustomer(customer);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (event.target.id === "clear-customer") clearCustomerForm();
    if (event.target.dataset.load) loadInvoice(event.target.dataset.load);
    if (event.target.dataset.print) openPrint(event.target.dataset.print);
    if (event.target.id === "reset-demo") {
        localStorage.removeItem(KEY);
        location.reload();
    }
});

document.addEventListener("input", (event) => {
    const row = event.target.closest(".item-row");
    if (!row || !event.target.dataset.field) return;
    draftItems[Number(row.dataset.index)][event.target.dataset.field] = event.target.value;
    renderTotals();
});

document.addEventListener("change", (event) => {
    const row = event.target.closest(".item-row");
    if (!row || !event.target.dataset.field) return;
    draftItems[Number(row.dataset.index)][event.target.dataset.field] = event.target.value;
    renderTotals();
});

$("#settings-form").addEventListener("submit", (event) => {
    event.preventDefault();
    collectSettings();
    persist();
    renderAll();
    toast("Stammdaten gespeichert.");
});

$("#customer-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const customer = collectCustomer();
    if (!customer.company && !customer.name) {
        toast("Kunde braucht Firma oder Name.");
        return;
    }
    const index = state.customers.findIndex((item) => item.id === customer.id);
    if (index >= 0) state.customers[index] = customer;
    else state.customers.push(customer);
    persist();
    clearCustomerForm();
    renderCustomers();
    renderCustomerSelect();
    toast("Kunde gespeichert.");
});

$("#save-draft").addEventListener("click", () => {
    try { saveInvoice(false); } catch (error) { toast(error.message); }
});

$("#finalize").addEventListener("click", () => {
    try { saveInvoice(true); } catch (error) { toast(error.message); }
});

resetInvoice();
renderAll();
