import React from "react";
import styled from "styled-components";
import Table from "./components/Table";


import users from "./users";

const Styles = styled.div`
  padding: 1rem;
  table {
    margin-left: auto;
    margin-right: auto;
    border-spacing: 0;
    border: solid 1px #dddddd;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: solid 1px #dddddd;
      border-top: solid 1px #dddddd;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "React Employee Directory",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName"
          },
          {
            Header: "Last Name",
            accessor: "lastName"
          },
          {
            Header: "Address",
            accessor: "address"
          },
          {
            Header: "Role",
            accessor: "role"
          },
          {
            Header: "Department",
            accessor: "department"
          }
        ]
      }
    ],
    []
  );

  const data = users;

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default App;