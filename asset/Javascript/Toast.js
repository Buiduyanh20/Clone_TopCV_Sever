function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        //auto remove toast
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        //remove toast when clicked
        toast.onclick = function(e) {

            //kiểm tra người dùng đã ấn vào close hay chưa
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fa-circle-check',
            info: 'fa-circle-info',
            warning: 'fa-circle-exclamation',
            error: 'fa-circle-exclamation',
        }
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="fa-solid ${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__mgs">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>`;
        main.appendChild(toast);
    }

}

function showSuccessToast() {
    toast({
        title: 'Thành Công !',
        message: 'Chúc mừng ! Bạn đã đăng ký ứng tuyển thành công. Vui lòng chờ trong giây lát ',
        type: 'success',
        duration: 5000
    })
}

function showErrorToast() {
    toast({
        title: 'Hủy Thành Công',
        message: 'Bạn vừa hủy ứng tuyển. Vui lòng đợi chúng tôi xử lý ! Cảm ơn bạn',
        type: 'warning',
        duration: 5000
    })
}