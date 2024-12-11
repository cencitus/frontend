document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Функция для открытия модального окна
    function openModal(service) {
        modalTitle.textContent = `Форма обратной связи для ${service}`;
        modal.style.display = "block";
        document.body.classList.add("no-scroll");
    }

    // Функция для закрытия модального окна
    closeBtn.onclick = function () {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    };

    // Закрытие модального окна при клике вне его
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("no-scroll");
        }
    };

    // Назначаем обработчики событий на кнопки
    const buttons = document.querySelectorAll(".open-modal");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const service = button.getAttribute("data-service");
            openModal(service);
        });
    });

    // Обработчик формы
    const feedbackForm = document.getElementById("feedback-form");
    const submissionMessage = document.createElement("p"); // Создаем элемент для сообщения
    submissionMessage.id = "submission-message";
    submissionMessage.style.display = "none"; // Скрываем сообщение по умолчанию
    feedbackForm.parentNode.insertBefore(
        submissionMessage,
        feedbackForm.nextSibling
    ); // Вставляем сообщение после формы

    feedbackForm.addEventListener("submit", submitForm);

    // Создаем объект formData
    const formData = {
        name: "",
        email: "",
        phone: "",
        date: "",
        comment: "",
        printData() {
            console.log(`Имя: ${this.name}`);
            console.log(`E-mail: ${this.email}`);
            console.log(`Телефон: ${this.phone}`);
            console.log(`Дата: ${this.date}`);
            console.log(`Комментарий: ${this.comment}`);
        },
    };

    // Реализуем функцию submitForm
    function submitForm(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const date = document.getElementById("date").value.trim();
        const comment = document.getElementById("comment").value.trim();

        // Проверки
        if (!name || !email || !comment) {
            alert("Поля 'Имя', 'E-mail' и 'Комментарий' должны быть заполнены.");
            return;
        }

        const phoneRegex = /^[0-9]{11}$/;
        if (!phoneRegex.test(phone)) {
            alert("Телефон должен содержать 11 цифр.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Введите корректный e-mail.");
            return;
        }

        formData.name = name;
        formData.email = email;
        formData.phone = phone;
        formData.date = date;
        formData.comment = comment;

        formData.printData();
        alert("Форма успешно отправлена!");

        // Показ сообщения с анимацией
        submissionMessage.textContent = "Форма отправлена!";
        submissionMessage.style.display = "block";
        submissionMessage.classList.add("fade-in");

        // Скрываем сообщение через 3 секунды
        setTimeout(() => {
            submissionMessage.classList.remove("fade-in");
            submissionMessage.style.display = "none";
        }, 3000);
    }
});
