import React from "react";


const HomePage = ({ debts }) => {

  const { name,  amount, deadline,  } = debts.find((debt) => debt.id);

  return (
    <div>
      <div className="">
        <h2 className="text-center bg-body-secondary">Qarzdorlar:</h2>
        <h3>Ism: {name}</h3>
        <h5>Qarz miqdori: {amount} $</h5>
        <h5>Deadline: {deadline}</h5>
      </div>
    </div>
  );
};

export default HomePage;
