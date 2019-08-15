import React from 'react';

const UnivercityPlace = (props) => {
  const { list } = props;
  return <a class="institute-card" href={`${list.location}`}>
    <p class="title">{`${list.office} ${list.name}`}</p>
    <p class="name">{list.director}</p>
    <p class="number">{list.phone}</p>
  </a>
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