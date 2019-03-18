export class Task{
    public _id:string;
    public task:string;

    public parent_id:string;
    public start_date: Date;
    public end_date: Date;
    public priority: Number = 0;
    public finished: Boolean;

}