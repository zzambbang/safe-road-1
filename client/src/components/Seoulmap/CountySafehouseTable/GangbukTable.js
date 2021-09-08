import React from "react";
import cloneDeep from "lodash/cloneDeep";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { GangbukData } from "../CountySafehouseData/GangbukData"

const tableHead = {
    name: "점포명",
    city_county: "시군구명",
    road_address: "소재지 도로명주소",
    number_address: "소재지 지번주소",
    tel_number: "지킴이집 전화번호"
};

const GangbukTable = () => {
  const countPerPage = 15;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(GangbukData.slice(0, countPerPage))
  );

  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(GangbukData.slice(from, to)));
  };

  const tableRows = rowData => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    
    <div className="tableSet">
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={GangbukData.length}
      />
      <table>
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody>{tableData()}</tbody>
      </table>
      </div>
      

  );
};
export default GangbukTable;
