import IStructureService from "@/interfaces/IStructureService";
import INode from "@/model/INode";
import INodeContent from "@/model/INodeContent";

export default class StructureSercice implements IStructureService {
  
  constructor(private readonly url: string) {
  }

  public async subPath(path: Array<INode>, start: number, count: number): Promise<INodeContent> {
    const endpoint = new URL(this.url);
    
    endpoint.search = new URLSearchParams([ 
      ["node-path", path.map(v => {v.mnem, v.name, v.id, v.pid, v.otype}).toString()],
      ["start", start.toString()],
      ["count", count.toString()]
    ]).toString();

    const result = await fetch(new Request(endpoint.toString(), {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      }
    }));
    if (result.status !== 200) throw new Error('server error');
    return result.json();
  }
  
}