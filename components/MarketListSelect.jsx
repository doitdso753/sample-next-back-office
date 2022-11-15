import React, {useEffect, useState} from 'react';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function MarketListSelect({
  marketList,
  handleCheck,
}) {
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    handleCheck(checkedList);
  }, [checkedList])

  const handleCheckChange = (e) => {
    let prevCheckedList = checkedList;
    if (prevCheckedList.includes(e.target.value)) {
      prevCheckedList = prevCheckedList.filter((marketCode) => marketCode !== e.target.value);

    } else {
      prevCheckedList = [...prevCheckedList, e.target.value];
    }
    setCheckedList(prevCheckedList);
  }

  /**
   * '전체' 체크박스 핸들러
   * */
  const handleAllCheckChange = (e) => {
    if (!e.target.checked) {
      setCheckedList([]);
    } else {
      setCheckedList(marketList.map((item) => item.marketCode));
    }
  }
  return (
    <FormGroup row>
      <FormControlLabel control={<Checkbox onChange={handleAllCheckChange} checked={checkedList.length === marketList.length} />} label="전체" />
      {
        marketList?.map((item) => (
          <FormControlLabel control={<Checkbox checked={checkedList.includes(item.marketCode)} value={item.marketCode} onChange={handleCheckChange} />} label={item.name} />
        ))
      }

    </FormGroup>
  );
}

export default MarketListSelect;
