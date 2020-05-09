import React from "react";

function ColumnFilter({ column: { filterValue, setFilter } }) {
  return (
    <input
      value={filterValue || ""}
      onChange={e => {
        setFilter(e.target.value);
      }}
      placeholder={`Enter search here...`}
    />
  );
}

export default ColumnFilter;