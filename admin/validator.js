//đối tượng `Validator`
function Validator(option) {

    //hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);

        var errorElement = inputElement.parentElement.querySelector(option.errorSelector);

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    //lấy element của form cần validate
    var formElement = document.querySelector(option.form);


    if (formElement) {
        option.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {

                //xử lý trường hợp blur khỏi input
                inputElement.onblur = function() {
                    // value : inputElement.value
                    // test func : rule.test

                    validate(inputElement, rule);
                }

                //xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(option.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }

}

//đĩnh nghĩa các rules
//nguyên tắc của các rules: 
//1. khi có lỗi => trả ra message lỗi
//2. Khi hơp lệ => không trả ra gì cả (undifined)
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : "Vui lòng nhập trường này"
        }
    };
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Trường này phải là email";
        }
    };
}

Validator.minLenght = function(selector, min) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            var check = regex.test(value);
            return value.length >= min && check ? undefined : `Vui lòng nhập vào tối thiếu ${min} ký tự và nhập ký tự số`;
        }
    };
}

Validator.isSelect = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value != "choose" ? undefined : "Vui lòng nhập trường này"
        }
    };
}