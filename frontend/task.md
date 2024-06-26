# Задание: Создание простого ToDo-приложения
### Описание
Создайте простое ToDo-приложение, которое позволяет пользователю добавлять, удалять и отмечать задачи как выполненные.

### Требования
#### Создание задач:
Введите текст в поле ввода и нажмите кнопку "Добавить задачу", чтобы добавить новую задачу в список.
##### Отображение списка задач:
Показывайте все задачи в списке. Каждая задача должна иметь текст и кнопку для удаления.
#### Удаление задач:
При нажатии на кнопку "Удалить" соответствующая задача должна удаляться из списка.
#### Отметка задач как выполненных:
Каждая задача должна иметь возможность быть отмеченной как выполненная (например, через чекбокс). Выполненные задачи должны отображаться с зачеркнутым текстом.
#### Локальное состояние:
Используйте локальное состояние для хранения списка задач.
#### Стилизация:
Приложение должно быть аккуратно стилизовано. Можно использовать простые CSS или CSS-in-JS решения.
### Дополнительно (необязательно):
Сохранение состояния задач в LocalStorage для сохранения списка при перезагрузке страницы.
Возможность редактирования текста задачи.
#### Основные компоненты
<li> App: Корневой компонент, который содержит всё приложение;</li>
<li>ToDoList: Компонент, который отображает список задач;</li>
<li>ToDoItem: Компонент, который отображает отдельную задачу;</li>
<li>ToDoForm: Компонент для добавления новых задач.</li>