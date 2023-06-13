import Form from './Form/form';
import ContactList from './Contacts/contacts';
import Filter from './Filter/filter';

function App() {
  return (
    <section className="section">
      <h1 className="text-title">Phonebook</h1>
      <Form />
      <h2 className="text-title">Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
}
export default App;
