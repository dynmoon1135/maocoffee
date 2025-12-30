// Navigasi Mobile
const menuBtn = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Fungsi Pindah Tab Menu
function openMenu(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    setTimeout(() => {
        document.getElementById(tabName).classList.add("active");
    }, 10);
    evt.currentTarget.className += " active";
}

// Tutup menu saat link diklik (Mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});