import express from "express";
import { getAllTodos, getTodoById, updateTodo, deleteTodo, addTodo } from "../controllers/todoController.js";
import { isAuthenticatedUser, isAuthorizedUser } from '../middleware/auth.js'
const router = express.Router();



router.route('/todos').get( getAllTodos);

router.route('/todo/:id').get(isAuthenticatedUser, getTodoById);

router.route('/todo/update/:id').put(isAuthenticatedUser, updateTodo);

router.route('/todo/delete/:id').delete(isAuthenticatedUser, deleteTodo);

router.route('/todo/new').post(isAuthenticatedUser, isAuthorizedUser("admin", "teacher"), addTodo);


export default router;