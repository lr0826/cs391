const BIN_URL = "https://api.jsonbin.io/v3/b/68cd8a78ae596e708ff41e99"
const API_KEY = "$2a$10$ICH1AQ9gYVr53LlTv.LbuO/jm98iYcW2FZcEktgG6DRy0sLsu66m6"
const output = document.getElementById("output");
async function getData() {
    const res = await fetch(BIN_URL,
        {headers: {"X-MASTER-KEY": API_KEY}});
    const data = await res.json();
    const singleAffiliate=data.record.affiliates.map(
        a =>
            `
            <li>
                ${a.fname} ${a.lname}(${a.isStudent ? "Student" : "Not Student"})
            </li>
            `
    );
    output.innerHTML+=singleAffiliate;
}

