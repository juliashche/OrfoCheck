# Щекотихина Юлия - “Проверка правописания онлайн с орфографическим разбором текста”
# Пользовательские сценарии

### Группа: 10и2
### Электронная почта: jullshchek@gmail.com
### VK:  https://vk.com/jullshche

### [ Сценарий 1 - Работа с главным меню ]
1.	На первой странице сайта с левой стороны расположена область главного меню
2.	Нажав на строчку «Работа с текстом», пользователь попадает на главную страницу (Сценарий «Ввод текста»)
3.	Наведя курсор на строчку «Правила», пользователь открывает перечень всех правил орфографии русского языка, внесенных на сайт 
4.	Среди появившегося списка орфограмм пользователь может выбрать нужную ему тему (Сценарий «Информационная справка»)
5.	Наведя курсор на строчку «Тесты», пользователь открывает перечень учебных тестов для закрепления правил орфографии (Сценарий «Раздел тесты»)
6.	Среди появившегося списка тестов пользователь может выбрать нужную ему тему (Сценарий «Раздел тесты»)
7.	Выбрав строчку «О проекте», пользователь попадает на страницу с описанием главной задачи сайта
### [ Сценарий 2 - Ввод текста ]
1.	Пользователь открывает главную страницу (Сценарий «Работа с главным меню»)
2.	Нажимает на поле для ввода текста, расположенное посередине экрана
3.	Пользователь водит текст, который хочет проверить на наличие орфографических ошибок и опечаток
4.	Нажимает кнопку «Проверить»
5.	Появляется окно, в котором спрашивается, действительно ли пользователь хочет приступить к обработке текста
6.	Если пользователь выбирает кнопку «нет», то на экране снова появляется непроверенный текст, который можно дополнить
7.	Если пользователь выбирает кнопку «да», то запускается обработка текста (Сценарий «Проверка текста»)
### [ Сценарий 3 - Проверка текста ]
1.	Пользователь переходит к данному сценарию, подтвердив свое желание приступить к обработке текста (Сценарий «Ввод текста»)
2.	Система анализирует текст на наличие опечаток и орфографических ошибок
3.	Ниже поля для ввода текста появляется информация о найденных ошибках 
4.	Проверяющая система распознает два вида ошибок: орфографические и просто опечатки 
5.	При желании пользователь может вносить изменения в уже проверенный текст
6.	Внеся изменения, пользователь вновь нажимает кнопку «Проверить» (Сценарий «Проверка текста»)
7.	Пользователь может работать с введенным текст и запускать сценарий «Проверка текста» неограниченное количество раз
### [ Сценарий 4 - Анализ найденных опечаток и орфографических ошибок ]
1.	После проверки ниже поля для ввода текста появится сообщение, информирующее пользователя о количестве ошибок, допущенных в тексте, или об их отсутствии
2.	Система проводит анализ допущенных ошибок и под каждым неправильно написанным словом дает описание ошибки
3.	Если в слове была допущена орфографическая ошибка, то называется соответствующая орфограмма (например, «Ошибка на чередование гласных в корнях -лаг-, -лож-») 
4.	Рядом дается ссылка на Информационную справку
5.	Нажав на ссылку, пользователь перейдет к объяснению правила русского языка, на которое была сделана ошибка (Сценарий «Информационная справка»)
6.	Если в слове была допущена ошибка не на орфограмму, то рядом появляется надпись «Опечатка»
7.	Система не проводит анализ и какие-либо ссылки для опечаток
### [ Сценарий 5 - Информационная справка ]
1.	Если пользователь переходит к Информационной справке через Главное меню, то при наведении курсора на строку «Правила» перед ним открывается перечень всех орфограмм русского языка, внесенных на сайт
2.	Пользователь выбирает нужный ему раздел орфографии
3.	Если пользователь переходит к информационной справке через ссылку в анализе ошибок (Сценарий «Анализ найденных опечаток и орфографических ошибок») или возвращается из раздела тестов (Сценарий «Прохождение теста»), он сразу попадает в тот раздел орфографии, где объясняется нужное правило
4.	После перехода к нужному правилу, перед пользователем открывается объяснение правила русского языка на соответствующую орфограмму 
5.	В информационной справке пользователь может также найти примеры, помогающие лучше усвоить изученное правило
6.	Под информационной справкой находится ссылка на прохождение учебного теста
7.	Пользователь переходит по ссылке на страницу с тестом, если хочет закрепить пройденный материал (Сценарий «Раздел тесты»)
### [ Сценарий 6 - Раздел тесты ]
1.	Если пользователь переходит на страницу через Главное меню, то при наведении курсора на строку «Тесты» перед ним открывается перечень всех тестов на закрепление орфографических правил русского языка
2.	Пользователь выбирает нужный ему тест 
3.	Если пользователь переходит к тесту через ссылку в информационной справке, (Сценарий «Информационная справка»), он уже сразу попадает на страницу нужного теста 
4.	Каждый тест содержит 5 заданий на закрепление пройденного материала
5.	После перехода на страницу теста перед пользователем откроются тестовые задания (Сценарий «Прохождение теста») 
6.	Также на странице будет расположена кнопка «Вернуться к информационной справке»
7.	Нажав на эту кнопку, пользователь возвращается на предыдущую страницу к правилам орфографии (Сценарий «Информационная справка»)
### [ Сценарий 7 - Прохождение теста ]
1.	После перехода к выполнению тестов пользователь увидит список из 5 тестовых заданий на выбранную орфограмму
2.	Тестовые задания состоят из условия и четырех вариантов ответа
3.	Выбрав один из вариантов, пользователь может сразу перейти к следующему заданию, расположенному ниже
4.	Закончив выполнение всех заданий, пользователь нажимает кнопку «Проверить»
5.	Появляется надпись о количестве допущенных ошибок при выполнении теста
6.	После проверки те задания, в которых допущены ошибки, будут выделены красным цветом
7.	Под информацией о количестве допущенных ошибок появляется ссылка для обратного перехода к информационной справке (Сценарий «Информационная справка»)
