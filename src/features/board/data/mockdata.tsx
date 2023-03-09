export const initialData = {
    tasks: {
        'task-1': { id: 'task-1', dueDate:'3/25/2021', members:["Carlos"], name:"Finish new dashboard", content: 'Take out the garbage' },
        'task-2': { id: 'task-2', members:[], name:"Update styles", content: 'Watch my favorite show' },
        'task-3': { id: 'task-3', dueDate:"31/3/2023", members:[], name:"Update components", content: 'Charge my phone' },
        'task-4': { id: 'task-4', members:["Carlos"], name:"Create new template", content: 'Cook dinner' },
        'task-5': { id: 'task-5', members:["Carlos"], name:"Create new template", content: 'Cook dinner' },
        'task-6': { id: 'task-6', members:[], name:"Create new template", content: 'Cook dinner' },
        'task-7': { id: 'task-7', members:[], name:"Create new template", content: 'Cook dinner' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Today',
            taskIds: ['task-5'],
        },
        'column-3': {
            id: 'column-3',
            title: 'In progress',
            taskIds: ['task-6'],
        },
        'column-4': {
            id: 'column-4',
            title: 'Done',
            taskIds: ['task-7'],
        }
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};
