import { ConstantValues } from './constant-values';
export var mockTasks = {
    "completed": [
        {text: "Feed the dog", importance: ConstantValues.TASKS_URGENCY_NONE},
        {text: "Clean the kitchen", importance: ConstantValues.TASKS_URGENCY_NONE},
        {text: "Pay electricity bill", importance: ConstantValues.TASKS_URGENCY_NONE},
        {text: "Fix the shirt button", importance: ConstantValues.TASKS_URGENCY_NONE}
    ],
    "pending": [
        {text: "Turn off the oven", importance: ConstantValues.TASKS_URGENT},
        {text: "Store water", importance: ConstantValues.TASKS_URGENT},
        {text: "Write my daily diary", importance: ConstantValues.TASKS_NOT_URGENT},
        {text: "Take the dog out for a walk", importance: ConstantValues.TASKS_NOT_URGENT},
    ]
};