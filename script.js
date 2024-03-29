const box1 = document.querySelector(".box1");
const titleProfesi = document.querySelector(".tittle-profesi");
const titleDalam = document.querySelector(".title-dalam");
const detektifImg = document.querySelector(".detektif");
const btnIya = document.querySelector(".btn-iya");
const btnTidak = document.querySelector(".btn-tidak");

btnIya.addEventListener('click', () => {
    titleProfesi.innerHTML = "Anda Berbohong!";
    titleDalam.innerHTML = "Anda adalah seorang Teknisi";
    box1.style.backgroundColor = "#E12E2E";
    detektifImg.src = "teknisi.png";
    btnIya.style.display = 'none';
    btnTidak.style.display = 'none';
});

btnTidak.addEventListener('click', () => {
    titleProfesi.innerHTML = "Anda Benar!";
    titleDalam.innerHTML = "Anda adalah seorang Mahasiswa";
    box1.style.backgroundColor = "#6FD240";
    detektifImg.src = "mahasiswi.png";
    btnIya.style.display = 'none';
    btnTidak.style.display = 'none';
});