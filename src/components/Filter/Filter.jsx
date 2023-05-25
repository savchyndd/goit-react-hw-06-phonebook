import { useDispatch, useSelector } from 'react-redux';

import { setContactsFilter } from 'redux/filtersSlice';
import { getContactsFilter } from 'redux/selectors';

import { Label, Input } from './Filter.module';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={filter}
        onChange={handleChangeFilter}
      />
    </Label>
  );
};
