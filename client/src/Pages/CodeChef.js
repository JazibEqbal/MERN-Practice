import React, { useEffect, useState } from "react";
import axios from "axios";

const CodeChef = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/contest/organiser/codechef`
      );
      setResponse(res.data.contest);
    }
    getData();
  }, []);
  // console.log(response);
  // const codechefContest = response.map((item) => (
  //   <div key={item._id}>{item.organiser}</div>
  // ));

  const ongoingContest = response.filter(
    (item) => new Date(item.dateofcontest) - new Date() > 0
  );
  const pastContest = response.filter(
    (item) => new Date(item.dateofcontest) - new Date() <= 0
  );
  return (
    <div>
    </div>
  );
};

export default CodeChef;
