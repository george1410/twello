import { Stubby } from 'stubby';
import boardStubs from './boards/boards.json';
import columnStubs from './boards/columns.json';
import cardStubs from './boards/cards.json';

const stubs = new Stubby();

stubs.start({ stubs: 3001 });

const data = [boardStubs, columnStubs, cardStubs];

data.forEach(stub => {
  stubs.post(stub, (err, endpoint) =>
    console.log(
      `${endpoint.request.method} ${endpoint.request.url} added successfully.`
    )
  );
});
