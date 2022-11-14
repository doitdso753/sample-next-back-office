import React, {useEffect, useState} from 'react';
import Stack from "@mui/material/Stack";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function CategoryPaths({
  depth,
  pathsData,
  handleClick
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      divider={<KeyboardArrowRightRoundedIcon color="action"/>}
    >
      {Array.from({ length: depth }, (v, i) => i)
        .map((index) => (
          <FormControl sx={{minWidth: 200}} size="small">
            <InputLabel id={`category`}>1차</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              // value={age}
              label={`1차`}
              // onChange={handleChange}
            >
              {pathsData[index]?.paths.map((item) => (
                <MenuItem value={item?.value}>{item?.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
    </Stack>
  );
}

export default CategoryPaths;
