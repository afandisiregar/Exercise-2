function tambah() {
  var nilai_1 = document.getElementById('nilai1').value;
  var nilai_2 = document.getElementById('nilai2').value;

  var jumlah = Number(nilai_1) + Number(nilai_2);
  document.getElementById('hasil').value = jumlah;
}

function kurang() {
  var nilai_1 = document.getElementById('nilai1').value;
  var nilai_2 = document.getElementById('nilai2').value;

  var jumlah = paresInt(nilai_1) - paresInt(nilai_2);
  document.getElementById('hasil').value = jumlah;
}

function kali() {
  var nilai_1 = document.getElementById('nilai1').value;
  var nilai_2 = document.getElementById('nilai2').value;

  var jumlah = paresInt(nilai_1) * paresInt(nilai_2);
  document.getElementById('hasil').value = jumlah;
}

function bagi() {
  var nilai_1 = document.getElementById('nilai1').value;
  var nilai_2 = document.getElementById('nilai2').value;

  var jumlah = paresInt(nilai_1) / paresInt(nilai_2);
  document.getElementById('hasil').value = jumlah;
}

function modulus() {
  var nilai_1 = document.getElementById('nilai1').value;
  var nilai_2 = document.getElementById('nilai2').value;

  var jumlah = paresInt(nilai_1) % paresInt(nilai_2);
  document.getElementById('hasil').value = jumlah;
}
