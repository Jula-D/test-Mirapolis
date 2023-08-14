let folders = document.querySelectorAll('.folder');
folders.forEach(folder => {
    const folderButton = folder.querySelector('.folder__button');
    folderButton.addEventListener('click', e => {
        if (folder.classList.contains('folder_opened')) {
            folder.classList.remove('folder_opened')
        }
        else {
            folder.classList.add('folder_opened');
        }
    })
});