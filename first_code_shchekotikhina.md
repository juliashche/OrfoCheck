# Страница теста на тему "Приставки на з-с"

## Aside

### **[ Главное меню ]**
* Прописываю ссылки для главного меню сайта
* Основной класс меню - menu, у разделов "Работа с текстом", "Правила", "Тесты" и "О проекте" - menu-item, у названий тем для правил и тестов - sub-menu

## Main
Пишу название сайта и заголовок страницы
### **[ Тестовые задания ]**
* Создаю форму теста (class test), состоящую из пяти вопросов (class questions)
* По три варианта ответа для каждого вопроса (class radio), верные варианты ответа заранее помечаются value=1* 
* Каждому вопросу присваивается id error-1, error-2 и тд, на случай если пользователь допустит в задании ошибку*  (изначально сообщение скрыто)
* Создаю кнопку "Проверить" (class button)

### **[ Подсчитывание количества верных ответов ]**
* Открываю теги script для java script кода
* После нажатия на кнопку "Проверить" открывается функция check
* Создаю счетчик correct для подсчитывания верных ответов
* Просматриваю результаты (true или false), которые пришли из функции checkAnswer (Сценарий "Проверка теста")
* Если результат был верным, увеличиваю счетчик на 1
* Иначе у ошибочного задания текст "Ошибка!" становится видимым
* Вывожу количество верных результатов теста (correct)

### **[ Проверка теста ]**
* Запускаю функцию checkAnswer и передаю значение выбранных пользователем ответов по id (r1, r2, r3 и тд)
* Если у выбранного ответа value=1 предаю true, иначе false 






