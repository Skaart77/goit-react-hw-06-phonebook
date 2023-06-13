import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contact/Add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name: name,
    number: number,
  },
}));

export const deleteContact = createAction('contact/Delete');

export const setFilter = createAction('contact/Filter');
