import { app } from './app.mjs';

app.listen(process.env.PORT, () => console.log(`api listening http://localhost:${process.env.PORT || 3333}`));