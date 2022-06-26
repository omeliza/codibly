import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { search } from '../../store/slices/colorSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Search, SearchIconWrapper, StyledInputBase } from './styles';

export default function SearchAppBar() {
  const value = useAppSelector(state => state.colorReducer.searchText);
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ flexGrow: 1, mb: '20px' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              type="number"
              value={value}
              onChange={(e) => dispatch(search(e.target.value))}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}