document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');
    const flipCard = document.querySelector('.flip-card');

    // Kịch bản 1: Chuyển đổi giữa các trang (Home, About, Contact)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Xóa class active ở tất cả các tab & section
            navLinks.forEach(item => item.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            // Thêm class active vào tab vừa click
            link.classList.add('active');

            // Lấy id target và hiển thị section tương ứng
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Kịch bản 2: Click lật thẻ sinh viên (Hỗ trợ tốt cho thiết bị di động)
    if (flipCard) {
        flipCard.addEventListener('click', () => {
            flipCard.classList.toggle('flipped');
        });
    }
});