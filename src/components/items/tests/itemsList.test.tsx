import {render, screen, waitFor} from '@testing-library/react';
import ItemsList from "../itemsList/ItemsList";
import React from "react";
import {store} from "../../../store/store";
import { Provider } from 'react-redux';

import { server } from '../../../tests/mocks/server.js'
import { rest } from "msw";


beforeEach(() => {
  render(
    <Provider store={store}>
      <ItemsList/>
    </Provider>
  )
});

afterEach(() => {
});

test("Displays each item", async ()=> {
 const list =  await screen.findAllByRole('list');
 expect(list).toHaveLength(1);

  const listItems =  await screen.findAllByRole('listitem');
  expect(listItems).toHaveLength(3);

  const images =  await screen.findAllByRole('img');
  expect(images).toHaveLength(3);
})

// test("test server error response", async () => {
//   server.resetHandlers(
//     rest.get('https://fashionstudio-2c756-default-rtdb.firebaseio.com/items.json', (req, res, ctx)=> {
//       res(ctx.status(500));
//     })
//   );
//     // handle alert or so ??
//
//   await waitFor(async () => {
//     const a = await screen.findAllByRole('alert');
//     expect(a).toHaveLength(1)
//   })
// })
