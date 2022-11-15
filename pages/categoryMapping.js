import React, {useState} from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import MarketListSelect from "../components/MarketListSelect";
import StandardCategoryPaths from "../components/CategoryMapping/StandardCategoryPaths";
import SearchInput from "../components/SearchInputWithSelect";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import CategoryPaths from "../components/CategoryMapping/CategoryPaths";

const searchData = [{
  name: 'a>b>c',
  value: 947230,
}]

const standardType = [
  {name: '표준카테고리 검색', value: 'search'},
  {name: '표준카테고리 선택', value: 'select'},
]

const marketList = [
  {id: 1, marketCode: 'smartstore', name: '스마트스토어'},
  {id: 2, marketCode: '11st', name: '11번가'},
  {id: 3, marketCode: 'auction', name: '옥션'},
  {id: 4, marketCode: 'gmarket', name: 'G마켓'},
  {id: 5, marketCode: 'coupang', name: '쿠팡'},
]

function CategoryMapping() {
  const [marketSelected, setMarketSelected] = useState([]);
  const [standardTypeChecked, setStandardTypeChecked] = useState(standardType[0].value);
  const [standardSearch, setStandardSearch] = useState('');
  const [standardSearchResult, setStandardSearchResult] = useState([]);

  /**
   * categoryCode: "1001296"
   * categoryId: 39308
   * categoryName: undefined
   * cb: undefined
   * depth: 1
   * marketCode: "11st"
   * mode: "market"
   * selectedDepth: 2
   * setMarketCode: "auctionEsm"
  * */
  return (
    <TableContainer component={Paper}>
      <Typography variant="h5" gutterBottom>카테고리 매핑</Typography>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        {/*<TableHead>*/}
        {/*  <TableRow>*/}
        {/*    <TableCell colSpan={2}>카테고리 매핑</TableCell>*/}
        {/*  </TableRow>*/}
        {/*</TableHead>*/}
        <TableBody>
          <TableRow>
            <TableCell component="th" sx={{width: 170}}>마켓선택</TableCell>
            <TableCell>
              <MarketListSelect
                marketList={marketList}
                handleCheck={(checkedList) => {
                  setMarketSelected(marketList.filter((item) => checkedList.includes(item.marketCode)));
                  // TODO: 초기 데이터 세팅, 초기 데이터 없을 시 DB 1차 카테고리 가져오기
                }}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" sx={{width: 170}}>표준 카테고리</TableCell>
            <TableCell>
              <ToggleButtonGroup
                color="primary"
                value="search"
                exclusive
                // onChange={handleAlignment}
                aria-label="표준카테고리"
                sx={{mb: 1}}
              >
                {standardType.map((item) => (
                  <ToggleButton
                    aria-label={item.name}
                    value={item.value}
                    selected={standardTypeChecked === item.value}
                    onClick={(e) => setStandardTypeChecked(e.target.value)}
                  >
                    {item.name}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
              {standardTypeChecked === 'search' && (
                <SearchInput
                  width={500}
                  searchData={standardSearchResult}
                  handleSearchData={setStandardSearchResult}
                  searchInput={standardSearch}
                  handleSearchInput={(e) => setStandardSearch(e.target.value)}
                  // onChange={(e) => setStandardSearch(e.target.value)}
                />
              )}
              {standardTypeChecked === 'select' && (
                <StandardCategoryPaths
                  depth={1}
                  pathsData={[{ depth: 1, paths: [{ name: '빵', value: 12 }]}]}
                />
              )}
            </TableCell>
          </TableRow>
          {marketSelected.map((item) => (
            <TableRow>
              <TableCell component="th" sx={{width: 170}}>{item.name}</TableCell>
              <TableCell>
                <CategoryPaths depth={1} pathsData={[{ depth: 1, paths: [{ name: '빵', value: 12 }]}]} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CategoryMapping;