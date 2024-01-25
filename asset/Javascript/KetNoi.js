var input = document.querySelector('.main-left-search-input');
var bner = document.querySelector('.main-left-panner');

input.addEventListener('focus', function() {
    bner.style.display = 'none';
})

input.addEventListener('blur', function() {
    bner.style.display = 'block';
})


// responsive

var ctleft = document.querySelector('.main-left');

var chat = document.querySelector('.main-center');

var apply = document.querySelector('.main-right');

var btnchat = document.querySelector('.main-nav-box-chat');

var btnapply = document.querySelector('.main-nav-box-job ');

btnchat.addEventListener('click', function() {
    ctleft.classList.toggle('hide');
    btnchat.classList.toggle('active');
    chat.classList.toggle('active');
})

btnapply.addEventListener('click', function() {
    ctleft.classList.toggle('hide');
    btnapply.classList.toggle('active');
    apply.classList.toggle('active');
})

// ứng tuyển cv

var cvListStr = JSON.parse(localStorage.getItem("CvUngTuyen"));

function ShowConnect() {
    var str = "";
    for (let x of cvListStr) {
        str += `<div class="main-right-content">
                    <div class="main-right-content-img">
                        <img src="` + x[0] + `" alt="">
                    </div>
                    <div class="main-right-content-text">
                         <div class="main-right-content-text-company">
                            <a href="#" class="main-right-content-text-company-link">` + x[1] + `</a>
                            <p>` + x[2] + `</p>
                        </div>
                        <button class="main-right-content-text-mes">
                            Nhắn tin
                        </button>
                    </div>
                </div>`;
    }
    document.getElementById("main-right-list").innerHTML = str;
}
ShowConnect();