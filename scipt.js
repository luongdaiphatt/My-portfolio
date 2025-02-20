//turn page when click next or prev button

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnID = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnID);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(()=> {
                pageTurn.style.zIndex = 20 - index
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(()=> {
                pageTurn.style.zIndex = 20 + index
            }, 500)
        }
    }
})

//contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn')

            setTimeout(() => {
                page.style.zIndex = 20+index
            },500)
        }, (index +1) *200 +100)
    })
}

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber <0)
    {pageNumber = totalPages-1;}
}

//back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].classList.remove('turn')
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10+index
            },500)
        }, (index +1) *200 +100)
    })
}

//openning animation
const coverRight = document.querySelector('.cover.cover-right');
const coverLeft = document.querySelector('.book-page.page-left');


//openning animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

//openning animation (page left or profile animation)

setTimeout(() => {
    coverLeft.style.zIndex = 20;
}, 3200)

//openning animation (all page right animation)
pages.forEach((_, index) => {
    setTimeout(()=>{
        reverseIndex();
        pages[pageNumber].classList.remove('turn')
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10+index
        },500)
    }, (index +1) *200 +2100)
})

//Contact me
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("-yo_FkJpX13HWbQv0"); // Khởi tạo EmailJS

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // ❌ Ngăn chặn reload trang
        alert("Email đang được gửi...")
        var params = {
            sendername: document.querySelector("#sendername").value,
            to: document.querySelector("#to").value,
            message: document.querySelector("#message").value,
        };

        var serviceID = "service_1d13dtc";
        var templateID = "template_0grq13m";

        emailjs.send(serviceID, templateID, params)
            .then(function (response) {
                alert("✅ Email đã được gửi thành công!");
                document.getElementById("contact-form").reset(); // Xóa dữ liệu form sau khi gửi
            })
            .catch(function (error) {
                alert("❌ Gửi email thất bại. Vui lòng thử lại!");
                console.error("Lỗi:", error);
            });
    });
});



