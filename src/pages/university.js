import React from 'react';

const UnivercityPlace = (props) => {
  const { list } = props;
  return <div className="institute-card">
    <a className="title" href={`${list.location}`}>{`${list.office} ${list.name}`}</a>
    <p className="name">{`Директор: ${list.director}`}</p>
    <a className="number" href={`tel:${list.phone}`}>{list.phone}</a>
  </div>
}

export const University = (list) => {
  console.log(list);
  return <>
    <p className="header-text head">Інститути та факультети</p>
    <div className="cards">
      {list.map((x,id) => <UnivercityPlace key={id} list={x} />)}
    </div>
  </>;
};