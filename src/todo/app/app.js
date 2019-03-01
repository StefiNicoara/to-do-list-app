import TodoPage from './views/todo-page';
import Manager from './models/manager';
import TodoController from './controllers/todo-controller';

window.onload = () => {
    const todoPage = new TodoPage();
    todoPage.initRender(window.document.body);

    const manager = new Manager();

    const todoController = new TodoController(todoPage, manager);
    todoController.repaint();
    todoController.bindEvents();
};
