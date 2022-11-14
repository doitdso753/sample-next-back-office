import React, {useEffect, useState} from 'react';
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";

function SearchInput({
  width,
}) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="표준카테고리 검색"
        inputProps={{ 'aria-label': '표준카테고리 검색' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;
