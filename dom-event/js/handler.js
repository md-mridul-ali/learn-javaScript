document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        const pageTitleElement = document.getElementById('page-title');
        pageTitleElement.innerText = 'Updated page title';
    })


document.getElementById('btn-login')
    .addEventListener('click', function () {
        const userInfo = document.getElementById('user-info');
        userInfo.innerText = 'user logged in successfully';
    })