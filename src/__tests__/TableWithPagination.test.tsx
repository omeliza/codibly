import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { setupStore } from '../store/store';

import { TableWithPagination } from '../components/TableWithPagination/TableWithPagination';

const store = setupStore();

describe('TableWithPagination', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
    <Provider store={store}>
      <TableWithPagination />
    </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});