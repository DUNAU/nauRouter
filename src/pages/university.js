import React from 'react';

const UnivercityPlace = (props) => {
  const { list } = props;
  return <div>
    <h4>{list.name}</h4>
    <h5>{list.director}</h5>
    <p>{list.phone}</p>
    <p>{list.office}</p>
    <a href={`${list.location}`} target='_blanck'>Прокласти маршрут</a>
  </div>
}

export const University = (list) => {
  console.log(list);
  return <>
    <h1>Факультети</h1>
    {list.map((x,id) => <UnivercityPlace key={id} list={x} />)}
  </>;
};