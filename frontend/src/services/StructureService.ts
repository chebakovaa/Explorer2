import IStructureService from "@/interfaces/IStructureService";

export default class StructureSercice implements IStructureService {
  
  constructor(private readonly url: RequestInfo) {
  }

  public subPath(path: Array<Node>): Array<Node> {
    
    return fetch(this.url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return 
      .then(response => response.json());
    
    
//     var url = new URL('https://sl.se')

// var params = {lat:35.696233, long:139.570431} // or:
// var params = [['lat', '35.696233'], ['long', '139.570431']]

// url.search = new URLSearchParams(params).toString();

// fetch(url)
  }
  
}