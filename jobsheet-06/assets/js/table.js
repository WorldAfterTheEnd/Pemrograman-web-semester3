
async function muatTabelGenerik(urlData, keys) {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    if (!tbody) return;

    loading.style.display = "block";
    tbody.innerHTML = "";

    try {
        // Delay 3000ms (3 detik) tugas 3
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const res = await fetch(urlData);
        if (!res.ok) {
            throw new Error("Gagal mengambil data (status " + res.status + ")");
        }
        const daftarData = await res.json();

        daftarData.forEach(function (item) {
            const tr = document.createElement("tr");

            let kolomContent = "";
            keys.forEach(function (key) {
                kolomContent += "<td>" + (item[key] ?? "") + "</td>";
            });

            kolomContent += 
                "<td>" +
                "<button type=\"button\">Edit</button> " +
                "<button type=\"button\" class=\"btn-hapus\">Hapus</button>" +
                "</td>";

            tr.innerHTML = kolomContent;
            tbody.appendChild(tr);
        });
    } catch (err) {
        tbody.innerHTML = 
            "<tr><td colspan=\"" + (keys.length + 1) + "\">Gagal memuat data: " + err.message + "</td></tr>";
    } finally {
        loading.style.display = "none";
    }
}