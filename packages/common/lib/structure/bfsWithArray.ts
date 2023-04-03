import { Queue } from "./queue";

type Graph<T> = Map<T , T[]>;

export function bfs<T>(graph : Graph<T> , startNode: T){
  const visited:Set<T> = new Set();
  const queue = new Queue<T>();

  visited.add(startNode);
  queue.enqueue(startNode);

  while(queue.size() !== 0){
    
    const currentNode:T = queue.dequeue()!;
    const neighbors = graph.get(currentNode) ?? [];

     for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }
  
  return Array.from(visited);
}