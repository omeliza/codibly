import { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/hooks';
import { fetchColors } from './store/reducers/actionCreator';
import SearchAppBar from './components/SearchAppBar/SearchAppBar';
import { TableWithPagination } from './components/TableWithPagination/TableWithPagination';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchColors())
  }, [dispatch]);

  return (
    <>
      <SearchAppBar />
      <TableWithPagination />
    </>
  );
}

export default App;
