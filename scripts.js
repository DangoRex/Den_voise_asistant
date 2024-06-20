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
            requirementsText = '<p>Минимальные системные требования:</p><ul><li>Операционная система: Windows</li><li>Оперативная память: 6,5 MБ</li><li>Место на диске: 3 ГБ</li><li>Микрофон</li><li>Динамик</li></ul>';
            break;
        case '2.0.0':
            infoText = 'Информация о версии 2.0.0: ;
            requirementsText = '<p>Минимальные системные требования:</p><ul><li>Операционная система: Windows</li><li>Оперативная память: X MБ</li><li>Место на диске: X ГБ</li><li>Микрофон</li><li>Динамик</li></ul>';
            break;
        default:
            infoText = 'Выберите версию из списка, чтобы увидеть информацию.';
            requirementsText = '<p>Минимальные системные требования:</p><ul><li>Операционная система: Windows</li><li>Оперативная память: 6,5 MБ</li><li>Место на диске: 3 ГБ</li><li>Микрофон</li><li>Динамик</li></ul>';
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
        '2.0.0': 'https://drive.google.com/uc?export=download&id=ID_ДЛЯ_ВЕРСИИ_1.2.0'  // Укажите правильный ID для версии 1.2.0
    };

    const downloadLink = downloadLinks[selectedVersion] || '#';

    if (downloadLink !== '#') {
        window.location.href = downloadLink;
    } else {
        alert('Выберите версию для скачивания.');
    }
}

function showSystemRequirements() {
    var modal = document.getElementById("systemRequirementsModal");
    modal.style.display = "block";
}

function closeSystemRequirements() {
    var modal = document.getElementById("systemRequirementsModal");
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    var modal = document.getElementById("systemRequirementsModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
