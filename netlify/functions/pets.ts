import { Handler } from '@netlify/functions';

const pets = [
  {
    id: 1,
    name: 'fluffy',
    type: 'dog',
  },
  {
    id: 2,
    name: 'mittens',
    type: 'gerbil',
  },
  {
    id: 2,
    name: 'bruiser',
    type: process.env.SECRET_VALUE,
  },
];

export const handler: Handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pets),
  };
};
