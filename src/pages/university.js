import React from 'react';

const UnivercityPlace = (props) => {
  const { list } = props;
  return <div className="institute-card">
    <a className="title" href={`${list.location}`}>{`${list.office} ${list.name}`}</a>
    <p className="name">{`${list.director}`}</p>
    {list.subdirector && <p className="name">{`Заступник: ${list.subdirector}`}</p>}
    <a className="number" href={`tel:${list.phone}`}>{list.phone}</a>
  </div>
}

export const University = (list) => {
  return <>
    <p className="header-text head">Інститути та факультети</p>
    <p className="header-text" style={{'fontSize':'24px'}}>Примітка. Вхід у 2,5,3 корпуси здійснюється через 4 корпус!</p>
    <div className="cards">
      {list.map((x,id) => <UnivercityPlace key={id} list={x} />)}
    </div>
  </>;
};