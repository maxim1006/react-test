export interface TodoModel {
    name: string;
    id: string | number;
    description?: string;
    completed?: boolean;
}
