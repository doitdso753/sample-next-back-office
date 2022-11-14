import React, {useEffect, useState} from 'react';
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

function StandardCategoryPaths({
  depth,
  pathsData,
  handleClick,
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      divider={<KeyboardArrowRightRoundedIcon color="action"/>}
    >
      {Array.from({ length: depth }, (v, i) => i)
        .map((index) => (
        <List
          sx={{
            display: 'inline-block',
            width: '100%',
            maxWidth: 220,
            position: 'relative',
            overflow: 'auto',
            maxHeight: 200,
          }}
          subheader={<li/>}
        >
          {pathsData[index]?.paths.map((item) => (
            <ListItem key={item?.value} disablePadding>
              <ListItemButton selected sx={{pt: 0, pb: 0}}>
                <ListItemText primary={item?.name}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ))}
    </Stack>
  );
}

export default StandardCategoryPaths;
