function bmi() {

    var boy = parseInt(document.getElementById("boy").value);
    var ceki = parseInt(document.getElementById("ceki").value);
    var BMI = ceki / (boy * boy);

    document.getElementById("cavab").innerHTML = Math.round(BMI * 100) / 100;
    BMI = Math.round(BMI * 100) / 100;
    console.log(BMI);
    if (BMI < 18.5)
        document.getElementById("netice").innerHTML = "Ceki azligi var";
    else if (BMI >= 18.5 && BMI <= 25)
        document.getElementById("netice").innerHTML = "Normal";
    else if (BMI >= 25 && BMI <= 30)
        document.getElementById("netice").innerHTML = "Obez";
    else if (BMI > 30)
        document.getElementById("netice").innerHTML = "Cekiniz coxdur";

}
console.log(BMI);