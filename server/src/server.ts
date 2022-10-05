#!/usr/bin/node --experimental-specifier-resolution=node
import { app } from './main';

app.listen(8080, () => {
  console.log('Press CTRL-C to stop, Listening on 8080\n');
});
