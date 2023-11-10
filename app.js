const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
    pil.addEventListener('click', function () {
        let namebtn = pil.getAttribute('name');
        geserCek(namebtn);
    });
});

function geserCek(nbtn) {
    const table = document.querySelectorAll('.' + nbtn);
    if (table[0].disabled == true) {
        autoNext(0, nbtn);
    } else {
        table[0].select();
    }

    for (let i = 0; i < table.length; i++) {
        table[i].addEventListener('input', function () {
            if (i == table.length - 1) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
            } else if (i == table.length - 2 && table[table.length - 1].disabled == true) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
            } else {
                autoNext(i, nbtn);
            }
        });
    }
}

function autoNext(i, cn) {
    let d = document.querySelectorAll('.' + cn);
    if (d[i + 1].disabled == true) {
        d[i + 2].select();

    } else {
        d[i + 1].select();
    }

}

function catString(cn) {
    var concat = "";
    let d = document.querySelectorAll('.' + cn);
    for (let i = 0; i < d.length; i++) {
        concat += d[i].value;
    }
    return concat;
}

function submitString(concat, tipe, tabel) {
    let isCorrect = false;
    if (tipe == "d1") {
        isCorrect = concat.toUpperCase() == "ALQURAN";
    } else if (tipe == "m1") {
        isCorrect = concat.toUpperCase() == "SYAHADAT";
    } else if (tipe == "d2") {
        isCorrect = concat.toUpperCase() == "HAJI";
    } else if (tipe == "d3") {
        isCorrect = concat.toUpperCase() == "RAMADHAN";
    } else if (tipe == "m2") {
        isCorrect = concat.toUpperCase() == "ZAKAT";
    } else if (tipe == "m3") {
        isCorrect = concat.toUpperCase() == "ADZAN";
    } else if (tipe == "d4") {
        isCorrect = concat.toUpperCase() == "MASJID";
    } else if (tipe == "m4") {
        isCorrect = concat.toUpperCase() == "MUHAMMAD";
    } else if (tipe == "m5") {
        isCorrect = concat.toUpperCase() == "FIKIH";
    } else if (tipe == "d5") {
        isCorrect = concat.toUpperCase() == "MEKKAH";
    }

    if (isCorrect) {
        pengulanganTabel(tabel);
    } else {
        alert("Jawaban Anda salah, Silahkan coba lagi!");
        resetTable(tabel);
    }
}

function resetTable(tabel, index) {
    tabel[index].value = "";
}


function pengulanganTabel(table) {
    for (let j = 0; j < table.length; j++) {
        table[j].disabled = true;
    }
}
