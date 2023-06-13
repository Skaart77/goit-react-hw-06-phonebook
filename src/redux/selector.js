export const getContacts = state => state.contacts.contactReducer;
export const getFilter = state => state.contacts.filterReducer;

export const getFilterContacts = state => {
  const lowerCaseFilter = getFilter(state).toLowerCase();
  const filterContacts = getContacts(state).filter(({ name }) =>
    name.toString().toLowerCase().includes(lowerCaseFilter)
  );
  return filterContacts;
};
