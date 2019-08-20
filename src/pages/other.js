import React from 'react';

const OtherPlace = (props) => {
  const { list } = props;
  return <div class="institute-card">
    <a class="title" href={`${list.location}`}>{`${list.office} ${list.name}`}</a>
    <p class="name">{list.director && `Контактна особа:: ${list.director}`}</p>
    <a class="number" href={`tel:${list.phone}`}>{list.phone}</a>
  </div>
}

export const Other = (list) => {
  console.log(list);
  return <>
    <p class="header-text">Інші місця</p>
    <div class="cards">
      {list.map((x,id) => <OtherPlace key={id} list={x} />)}
    </div>
  </>;
};