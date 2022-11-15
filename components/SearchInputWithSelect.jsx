import React, {useEffect, useState} from 'react';
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";

import Popper from '@mui/material/Popper';
import PopupState, { bindTrigger, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

function SearchInputWithSelect({
  handleSearchInput,
  searchInput,
  searchData,
  handleSearchData,
  width,
}) {

  const handleSearch = (e) => {
    handleSearchData(searchInput);
  }

  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => {
        console.log(popupState);
        return (
          <div>
            <Paper
              component="form"
              sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width}}
              {...bindTrigger(popupState)}
            >
              <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="표준카테고리 검색"
                inputProps={{'aria-label': '표준카테고리 검색'}}
                value={searchInput}
                onChange={handleSearchInput}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch(e);
                  }
                }}
              />
              <IconButton type="button" sx={{p: '10px'}} aria-label="search" onClick={handleSearch}>
                <SearchIcon/>
              </IconButton>
            </Paper>
            <Popper placement="bottom-start" transition {...bindPopper(popupState)}>
              {({TransitionProps}) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <List
                      sx={{
                        display: 'inline-block',
                        width: '100%',
                        minWidth: 500,
                        position: 'relative',
                        overflow: 'auto',
                        // maxHeight: 200,
                      }}
                      subheader={<li/>}
                    >
                      {searchData?.map((item) => (
                        <ListItem key={item?.value} disablePadding>
                          <ListItemButton selected sx={{pt: 0, pb: 0}}>
                            <ListItemText primary={item?.name}/>
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        )
      }}
    </PopupState>
  );
}

export default SearchInputWithSelect;
