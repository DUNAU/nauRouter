import React from 'react';

const OtherPlace = (props) => {
  const { list } = props;
  return <div className="institute-card">
    <a className="title" href={`${list.location}`}>{`${list.office} ${list.name}`}</a>
    <p className="name">{list.director && `Контактна особа: ${list.director}`}</p>
    <a className="number" href={`tel:${list.phone}`}>{list.phone}</a>
  </div>
}

export const Other = (list) => {
  console.log(list);
  return <>
    <p className="header-text">Інші місця</p>
    <div className="cards">
      {list.map((x,id) => <OtherPlace key={id} list={x} />)}
    </div>
  </>;
};