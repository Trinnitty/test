import React, { useState, useEffect } from "react";
import Table from "./Table";
function Actors() {
  const requestAPI = "https://swapi.co/api/people/";
  const [res, setRes] = useState({
    data: null,
    complete: false,
    pending: false,
    error: false
  });

  useEffect(() => {
    setRes({
      data: null,
      pending: true,
      error: false,
      complete: false
    });
    fetch(requestAPI)
      .then(response => response.json())
      .then(res =>
        setRes({
          data: res,
          pending: false,
          error: false,
          complete: true
        })
      )
      .catch(() =>
        setRes({
          data: null,
          pending: false,
          error: true,
          complete: true
        })
      );
  }, [requestAPI]);

  return (
    <div>
      <h3>Actors</h3>
      {(!res.complete && <p>Waiting...</p>) || (
        <Table actors={res.data.results} />
      )}
    </div>
  );
}
export default Actors;
