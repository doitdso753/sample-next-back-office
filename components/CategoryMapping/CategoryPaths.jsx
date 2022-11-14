import React, {useEffect, useState} from 'react';
import Stack from "@mui/material/Stack";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function CategoryPaths({
  categoryData,
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      divider={<KeyboardArrowRightRoundedIcon color="action"/>}
    >
      <FormControl sx={{minWidth: 200}} size="small">
        <InputLabel id={`category`}>{item.name}</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={40}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export default CategoryPaths;
