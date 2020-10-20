import mongoose from 'mongoose';

import '../components/auth'; // TODO: need to revisit after conversion to typescript and adding user auth components
// import './models/researchTrees';
// import './models/ships';

export const connect = () => {
  mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },
    () => {
      console.log('Connected to DB');
    }
  );
};
