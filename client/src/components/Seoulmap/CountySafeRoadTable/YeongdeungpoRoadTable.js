import React from "react";
import cloneDeep from "lodash/cloneDeep";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { YeongdeungpoSaferoadData } from "../CountySaferoadData/YeongdeungpoSaferoadData";

const tableHead = {
  number: "귀갓길 번호",
  city_county: "시군구명",
  administrative: "행정동",
  road_address: "소재지 도로명주소",
};

const YeongdeungpoRoadTable = () => {
  const countPerPage = 15;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(YeongdeungpoSaferoadData.slice(0, countPerPage))
  );

  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(YeongdeungpoSaferoadData.slice(from, to)));
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
        total={YeongdeungpoSaferoadData.length}
      />
      <table className="countyTable">
        <thead className="countyThead">
          <tr className="countyThead">{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      </div>
  );
};
export default YeongdeungpoRoadTable;
