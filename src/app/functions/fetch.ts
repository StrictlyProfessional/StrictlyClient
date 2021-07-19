import { from } from "rxjs";

export function strictlyUpdate(url, data) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
        fetch(
          url,
          {
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
            mode: 'no-cors'
          }
        )
      );
}