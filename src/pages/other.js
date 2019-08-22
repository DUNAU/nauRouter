import React from 'react';

const OtherPlace = (props) => {
  const { list } = props;
  return <div className="institute-card">
    <a className="title" href={`${list.location}`}>{`${list.office} ${list.name}`}</a>
    {list.director && <p className="name">{`Контактна особа: ${list.director}`}</p>}
    {list.channel && <a href={`https://t.me/${list.channel}`} className="name"><br/>Бот для зв'язку</a>}
    {list.phone && <a className="number" href={`tel:${list.phone}`}>{list.phone}</a>}
  </div>
}

export const Other = (list) => {
  console.log(list);
  return <>
    <p className="header-text head">Інші місця</p>
    <div className="cards">
      {list.map((x,id) => <OtherPlace key={id} list={x} />)}
    </div>
  </>;
};