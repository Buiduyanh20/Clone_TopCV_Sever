//tìm kiếm

var data = [{
    name: 'Thực tập sinh',
    address: '#',
}, {
    name: 'Trợ giảng',
    address: '#',
}, {
    name: 'Giáo viên',
    address: '#',
}, {
    name: 'Thư ký',
    address: '#',
}, {
    name: 'Nhân viên kỹ thuật',
    address: '#',
}, {
    name: 'IT helpdesk',
    address: '#',
}, {
    name: 'Lập trình viên PHP',
    address: '#',
}, {
    name: 'Lâp trình viên javascript',
    address: '#',
}, {
    name: 'Lập trình viên front-end',
    address: '#',
}, {
    name: 'Lập trình viên IOS',
    address: '#',
}, {
    name: 'Lập trình viên android',
    address: '#',
}, {
    name: 'Lập trình viên mobile',
    address: '#',
}, {
    name: 'Tester',
    address: '#',
}, {
    name: 'Thiết kế website',
    address: '#',
}, {
    name: 'Kế toán bán hàng',
    address: '#',
}, {
    name: 'Ngân hàng',
    address: '#',
}, {
    name: 'Nhân viên kinh doanh bất động sản',
    address: '#',
}, {
    name: 'Nhân viên chăm sóc khách hàng',
    address: '#',
}, {
    name: 'Nhân viên Marketing',
    address: '#',
}];


function search() {
    var search = document.getElementById('key-search').value;
    search = search.toLowerCase();
    var list = this.data;
    var kq = [];
    var flagkq = false;

    if (search) {
        for (let i = 0; i < list.length; i++) {
            var str = list[i].name.toLowerCase();
            if (str.includes(search)) {
                flagkq = true;
                document.getElementById("header__search-sub").style.display = 'block';
                var itemSearch = list[i];
                kq.push(itemSearch);
                console.log(kq)

                var textIdea = '';
                for (let i = 0; i < kq.length; i++) {
                    textIdea += `<div class="header__search-sub-title">
                                    <a class='header__search-sub-title-link' href='${kq[i].address}'> 
                                        <h3> ${kq[i].name} </h3>
                                    </a>
                                </div>`
                }
                document.getElementById('header__search-sub').innerHTML = textIdea;
            }
        }
        if (!flagkq) {
            textIdea = '';
            document.getElementById('header__search-sub').innerHTML = textIdea;
        }
    } else {
        document.getElementById("header__search-sub").style.display = 'none';
    }
}

function hideShow() {
    document.getElementById("header__search-sub").style.display = 'none';
}

//option
// search box select 1

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

//Đặt sẵn con trỏ focus vào input
selected.addEventListener("click", () => {
    //toggle : đóng mở hộp
    optionsContainer.classList.toggle("active");
    searchForm.classList.toggle('open1');
    searchParent.classList.toggle('open1');

    searchBox.value = "";
    filterList("");

    if (optionsContainer.classList.contains("active")) {
        searchBox.focus();
    }
});


//nếu đã chọn được nghành thì hiển thị lên lable đầu tiên và đóng thanh chọn
optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
        searchForm.classList.remove('open1');
        searchParent.classList.remove('open1');
    });
});


//kiểm tra và lưu từng ký tự đã nhập
searchBox.addEventListener("keyup", function(e) {
    filterList(e.target.value);
});


//so sáng với dữ liệu có sẵn nếu k trùng thì block
const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
};



// search box select 2
const selected2 = document.querySelector(".selected-2");
const optionsContainer2 = document.querySelector(".options-container-2");
const searchBox2 = document.querySelector(".search-box-2 input");

const optionsList2 = document.querySelectorAll(".option-2");


//Đặt sẵn con trỏ focus vào input
selected2.addEventListener("click", () => {
    //toggle : đóng mở hộp
    optionsContainer2.classList.toggle("active2");
    searchForm.classList.toggle('open2');
    searchParent.classList.toggle('open2');

    searchBox2.value = "";
    filterList2("");

    if (optionsContainer2.classList.contains("active2")) {
        searchBox2.focus();
    }
});


//nếu đã chọn được nghành thì hiển thị lên lable đầu tiên và đóng thanh chọn
optionsList2.forEach(o => {
    o.addEventListener("click", () => {
        selected2.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer2.classList.remove("active2");
        searchForm.classList.remove('open2');
        searchParent.classList.remove('open2');
    });
});


//kiểm tra và lưu từng ký tự đã nhập
searchBox2.addEventListener("keyup", function(e) {
    filterList2(e.target.value);
});


//so sáng với dữ liệu có sẵn nếu k trùng thì block
const filterList2 = searchTerm2 => {
    searchTerm2 = searchTerm2.toLowerCase();
    optionsList2.forEach(option => {
        let label2 = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label2.indexOf(searchTerm2) != -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
};

// search box select 3
const selected3 = document.querySelector(".selected-3");
const optionsContainer3 = document.querySelector(".options-container-3");
const searchBox3 = document.querySelector(".search-box-3 input");

const optionsList3 = document.querySelectorAll(".option-3");


//Đặt sẵn con trỏ focus vào input
selected3.addEventListener("click", () => {
    //toggle : đóng mở hộp
    optionsContainer3.classList.toggle("active3");
    searchForm.classList.toggle('open3');
    searchParent.classList.toggle('open3');

    searchBox3.value = "";
    filterList3("");

    if (optionsContainer3.classList.contains("active3")) {
        searchBox3.focus();
    }
});


//nếu đã chọn được nghành thì hiển thị lên lable đầu tiên và đóng thanh chọn
optionsList3.forEach(o => {
    o.addEventListener("click", () => {
        selected3.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer3.classList.remove("active3");
        searchForm.classList.remove('open3');
        searchParent.classList.remove('open3');
    });
});


//kiểm tra và lưu từng ký tự đã nhập
searchBox3.addEventListener("keyup", function(e) {
    filterList3(e.target.value);
});


//so sáng với dữ liệu có sẵn nếu k trùng thì block
const filterList3 = searchTerm3 => {
    searchTerm3 = searchTerm3.toLowerCase();
    optionsList3.forEach(option => {
        let label3 = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label3.indexOf(searchTerm3) != -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
};

//Phóng to thanh search 
var searchParent = document.querySelector('.search ');

var btnSearch = document.querySelector('.header__search-input');

var searchForm = document.querySelector('.search__left-form');

var headerClose = document.querySelector('.header__advanced-close');

var headerSub = document.querySelector('.header__search-sub');


btnSearch.addEventListener('focus', function() {
    searchForm.classList.add('open');
    searchParent.classList.add('open');
})

headerClose.addEventListener('click', function() {
    searchForm.classList.remove('open');
    searchParent.classList.remove('open');
})

//content

var listjob = document.getElementsByClassName("container__body-data");
var indexjob = 0;
var temp;

function InitJob() {
    if (listjob && listjob.length > 0) {
        for (let i = 18; i < listjob.length; i++) {
            listjob[i].style.display = 'none';
        }
    }
    indexjob = 17;
}


function showRJob() {
    temp = 0;
    if (listjob && listjob.length > 0) {
        for (let i = 0; i < listjob.length; i++) {
            listjob[i].style.display = 'none';
        }
        if (indexjob < listjob.length - 1) {
            for (let i = indexjob + 1; i < listjob.length; i++) {
                listjob[i].style.display = 'block';
                temp++;
                if (temp > 17) {
                    indexjob += temp - 1;
                    break;
                }
            }
            indexjob += temp;
        } else {
            indexjob = 0;
            for (let i = 0; i < listjob.length; i++) {
                listjob[i].style.display = 'block';
                temp++;
                if (temp > 17) break;
            }
            indexjob += temp - 1;
        }
    }
}

function showLJob() {
    temp = 0;
    if (listjob && listjob.length > 0) {
        for (let i = 0; i < listjob.length; i++) {
            listjob[i].style.display = 'none';
        }
        if (indexjob > 17) {
            for (let i = indexjob - (indexjob % 17); i >= 0; i--) {
                listjob[i].style.display = 'block';
                temp++;
                if (temp > 17) {
                    indexjob = indexjob - (indexjob % 17)
                    temp = 0;
                    break;
                }
            }
            indexjob -= temp;
        } else {
            indexjob = listjob.length - 1;
            for (let i = indexjob; i > 0; i--) {
                listjob[i].style.display = 'block';
                temp++;
                if ((indexjob % 17) > 0 && temp >= (indexjob % 17)) {
                    break;
                }
                if (temp > 17) break;
            }
        }
    }
}
InitJob();

//slidejob
window.addEventListener("load", function() {
    const slider = this.document.querySelector(".container__body-slide2");
    const sliderMain = this.document.querySelector(".container__body-slide2-main");
    const sliderItems = this.document.querySelectorAll(".container__body-slide2-item");
    const nextBtn = this.document.querySelector(".BtnRightslide2");
    const prevBtn = this.document.querySelector(".BtnLeftslide2");
    var sliderItemWidth;
    if (window.innerWidth <= 776 && window.innerWidth > 418) {
        sliderItemWidth = (sliderItems[0].offsetWidth) + 40;
    } else {
        if (this.window.innerWidth <= 418) {
            sliderItemWidth = (sliderItems[0].offsetWidth) + 45;
        } else {
            sliderItemWidth = (sliderItems[0].offsetWidth) + 40;
        }
    }
    let positionX = 0;
    let index = 0;
    nextBtn.addEventListener("click", function() {
        handleChangeSlide(1);
    })
    prevBtn.addEventListener("click", function() {
        handleChangeSlide(-1);
    })

    function handleChangeSlide(direction) {
        if (direction == 1) {
            index++;
            if (window.innerWidth <= 422) {
                if (index > sliderItems.length - 1) {
                    index = sliderItems.length - 1;
                    return;
                }
            } else {
                if (index > sliderItems.length - 3) {
                    index = sliderItems.length - 3;
                    return;
                }
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            console.log(index);
        } else {
            if (direction == -1) {
                index--;
                if (index < 0) {
                    index = 0;
                    return;
                }
                positionX = positionX + sliderItemWidth;
                sliderMain.style = `transform: translateX(${positionX}px)`;
                console.log(index);
            }
        }
    }
    $(window).resize(function() {
        location.reload();
    });
})

//sign up , login

var btnLogin = document.querySelector('.header__btn-login');

var btnSignUp = document.querySelector('.header__btn-sign-up');

var modalmain = document.querySelector('.modal');

var modal = document.querySelector('.modal__overlay');

var loginForm = document.querySelector('.auth-form-login');

var SignUpForm = document.querySelector('.auth-form');

btnLogin.addEventListener('click', function() {
    modalmain.style.display = 'flex';
    modal.style.display = 'block';
    loginForm.style.display = 'block';
    SignUpForm.style.display = 'none';
})

btnSignUp.addEventListener('click', function() {
    modalmain.style.display = 'flex';
    modal.style.display = 'block';
    SignUpForm.style.display = 'block';
    loginForm.style.display = 'none';
})

modal.addEventListener('click', function() {
    modal.style.display = 'none';
    loginForm.style.display = 'none';
    SignUpForm.style.display = 'none';
    modalmain.style.display = 'none';
})



var btnSwithSignUp = document.querySelector('.auth-form__swith-btn-div');


btnSwithSignUp.addEventListener('click', function() {
    modalmain.style.display = 'flex';
    loginForm.style.display = 'none';
    SignUpForm.style.display = 'block';
})

var btnSwithLogin = document.querySelector('.auth-form__swith-btn-login');

btnSwithLogin.addEventListener('click', function() {
    modalmain.style.display = 'flex';
    loginForm.style.display = 'block';
    SignUpForm.style.display = 'none';
})