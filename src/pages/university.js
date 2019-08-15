import React from 'react';

const UnivercityPlace = (props) => {
  const { list } = props;
  return <div class="institute-card">
    <a class="title" href={`${list.location}`}>{`${list.office} ${list.name}`}</a>
    <p class="name">{list.director}</p>
    <a class="number"  href={`tel:${list.phone}`}>{list.phone}</a>
  </div>
}

export const University = (list) => {
  console.log(list);
  return <>
    <p class="header-text">Інститути та факультети</p>
    <div class="cards">
      {list.map((x,id) => <UnivercityPlace key={id} list={x} />)}
    </div>
  </>;
};