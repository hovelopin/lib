export class Stack<T>{
  private items: T[];

  constructor(){
    this.items = [];
  }

  push(value : T){
    this.items.push(value)
  }

  pop():T | undefined{
    return this.items.pop();
  }

  peek():T | undefined{
    return this.items[this.items.length - 1];
  }

  isEmpty():boolean{
    return this.items.length === 0;
  }

  size():number{
    return this.items.length
  }
}