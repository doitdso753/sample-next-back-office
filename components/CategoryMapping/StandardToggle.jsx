import React, {useEffect, useState} from 'react';
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

function StandardCategory() {
  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value="search"
        exclusive
        // onChange={handleAlignment}
        aria-label="표준카테고리"
        sx={{ mb: 1 }}
      >
        <ToggleButton value="search" aria-label="left aligned">표준카테고리 검색</ToggleButton>
        <ToggleButton value="select" aria-label="left aligned">표준카테고리 선택</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default StandardCategory;
