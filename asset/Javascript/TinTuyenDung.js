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

// search box select 1

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

//Đặt sẵn con trỏ focus vào input
selected.addEventListener("click", () => {
    //toggle : đóng mở hộp
    optionsContainer.classList.toggle("active");

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

// ứng tuyển

var CvList;

function layDL() {
    if ("CvUngTuyen" in localStorage) {
        CvList = JSON.parse(localStorage.getItem("CvUngTuyen"));
    } else {
        CvList = new Array();
    }
}

layDL();

function ungtuyen(x) {
    var boxsp = x.parentElement.parentElement;
    var hinhanhntd = boxsp.children[0].children[0].children[0].src;
    var tenncv = boxsp.children[1].children[0].innerText;
    var tenntd = boxsp.children[1].children[1].innerText;
    var cv = new Array(hinhanhntd, tenncv, tenntd);

    CvList.push(cv);
    localStorage.setItem("CvUngTuyen", JSON.stringify(CvList));
    showSuccessToast();
    setTimeout(function() {
        window.location.assign("KetNoi.html");
    }, 3000);
}



function huyungtuyen(x) {
    var cvListStr = JSON.parse(localStorage.getItem("CvUngTuyen"));
    var boxsp = x.parentElement.parentElement;
    var hinhanhntd = boxsp.children[0].children[0].children[0].src;
    var tenncv = boxsp.children[1].children[0].innerText;
    var tenntd = boxsp.children[1].children[1].innerText;
    for (let i = 0; i < cvListStr.length; i++) {
        if (cvListStr[i][0] == hinhanhntd && cvListStr[i][1] == tenncv && cvListStr[i][2] == tenntd) {
            cvListStr.splice(i, 1);
            localStorage.setItem("CvUngTuyen", JSON.stringify(cvListStr));
            showErrorToast();
            setTimeout(function() {
                location.reload();
            }, 3000);
        }
    }
}

function check() {
    var cvListStr = JSON.parse(localStorage.getItem("CvUngTuyen"));
    var check1 = document.getElementById("container__body-tilte-box");
    var hinhanhntdcheck = check1.children[0].children[0].children[0].src;
    var tenncvcheck = check1.children[1].children[0].innerText;
    var tenntdcheck = check1.children[1].children[1].innerText;
    for (let i = 0; i < cvListStr.length; i++) {
        if (cvListStr[i][0] == hinhanhntdcheck && cvListStr[i][1] == tenncvcheck && cvListStr[i][2] == tenntdcheck) {
            $('.container__body-tilte-box-apply-now').hide();
            $('.container__body-tilte-box-apply-now-done').show();
        }
    }
}
check();