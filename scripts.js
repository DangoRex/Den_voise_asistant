function updateVersionInfo() {
    var versionInfo = document.getElementById('versionInfo');
    var versionDropdown = document.getElementById('versionDropdown');
    var selectedVersion = versionDropdown.value;

    var infoText = '';
    var requirementsText = '';

    switch (selectedVersion) {
        case '1.0.0':
            infoText = 'Информация о версии 1.0.0: В этой версии доступны функции:<br>  • Управление яркостью и звуком<br>  • Решение простых примеров<br>  • Получение времени<br>  • Включение автокликера<br>  • Открытие приложений<br>  • Выключение компьютера<br>  • Создание скриншота';
            requirementsText = '<p>Минимальные системные требования:</p><ul><li>Операционная система: Windows</li><li>Оперативная память: 6,5 MБ</li><li>Место на диске: 3 ГБ</li><li>Микрофон</li><li>Динамик</li></ul>';
            break;
        case '1.1.0':
            infoText = 'Информация о версии 1.1.0: Добавлены функции:<br>  • Записи звука';
            requirementsText = '<p>Минимальные системные требования:</p><ul><li>Операционная система: Windows</li><li>Оперативная память: 6,5 MБ</li><li>Место на диске: 6,5 ГБ</li><li>Микрофон</li><li>Динамик</li></ul>';
            break;
        case '2.0.0':
            infoText = 'Информация о версии 2.0.0: Уменьшен размер программы больше, чем в 2 раза, по сравнению с версией 1.1.0. Изменений в функционале нет.';
            requirementsText = '<p>Минимальные системные требования:</p><ul><li>Операционная система: Windows</li><li>Оперативная память: 6,3 MБ</li><li>Место на диске: 2,8 ГБ</li><li>Микрофон</li><li>Динамик</li></ul>';
            break;
        default:
            infoText = 'Выберите версию из списка, чтобы увидеть информацию.';
            requirementsText = '<p>Минимальные системные требования:</p><ul><li>Операционная система: Windows</li><li>Оперативная память: 6,3 MБ</li><li>Место на диске: 2,8 ГБ</li><li>Микрофон</li><li>Динамик</li></ul>';
            break;
    }

    versionInfo.innerHTML = `<p>${infoText}</p>`;
    document.getElementById('requirementsList').innerHTML = requirementsText;
}

function download() {
    const versionDropdown = document.getElementById('versionDropdown');
    const selectedVersion = versionDropdown.value;

    const downloadLinks = {
        '1.0.0': 'https://drive.google.com/uc?export=download&id=1Y39qZnnwqASSP_54nF6Em-BGTpB07rb4',
        '1.1.0': 'https://drive.google.com/uc?export=download&id=1p1k8ikYe1dVmLPDnxRACeqoS8pSEv580',
        '2.0.0': 'https://drive.google.com/uc?export=download&id=16YaDbKzCNOhIcX1naFHwhzd_z5ahbEBg'
    };

    const downloadLink = downloadLinks[selectedVersion] || '#';

    if (downloadLink !== '#') {
        window.location.href = downloadLink;
    } else {
        alert('Выберите версию для скачивания.');
    }
}

function showSystemRequirements() {
    document.getElementById('systemRequirementsModal').style.display = 'block';
}

function closeSystemRequirements() {
    document.getElementById('systemRequirementsModal').style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    var modal = document.getElementById("systemRequirementsModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
