import { Container } from 'components/App.styled';
import { Form, InputForm, BtnSubmit } from './SearchForm.styled';
import { useState} from 'react';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter the film title');
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputForm
          type="text"
          name="value"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search movies ..."
           autocomplete="off"
        />
        <BtnSubmit type="submit" >
          Search
        </BtnSubmit>
      </Form>
    </Container>
  );
};

export default SearchForm;
