export class ConstantValues {

    static readonly ROUTE_URL_ALL_TASKS: string = "all-tasks";
    static readonly ROUTE_URL_PENDING_TASKS: string = "pending-tasks";
    static readonly ROUTE_URL_COMPLETED_TASKS: string = "completed-tasks";

    static readonly TASKS_URGENT: string = "Urgent";
    static readonly TASKS_NOT_URGENT: string = "Not Urgent";
    static readonly TASKS_URGENCY_NONE: string = "None";

    static readonly VIEW_CATEGORIES: Array<any> = [
        {label: "View All Tasks", url: "/" + ConstantValues.ROUTE_URL_ALL_TASKS},
        {label: "Pending Tasks", url: "/" + ConstantValues.ROUTE_URL_PENDING_TASKS},
        {label: "Completed Tasks", url: "/" + ConstantValues.ROUTE_URL_COMPLETED_TASKS}
    ];
}