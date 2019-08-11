import React from 'react';
import { ListContent } from 'semantic-ui-react';

const CityPlace = (props) => {
  const { list } = props;
  return <div>
    <h4>{list.name}</h4>
    <a href={`${list.location}`}>{list.office}</a>
    <p>{list.director && `Староста: ${list.director}`}</p>
    <a href={`https://t.me/${list.contact}`}>{list.contact}</a>
  </div>
}

export const City = (list) => {
  console.log(list);
  return <>
    <h1>Гуртожитки</h1>
    {list.map((x,id) => <CityPlace key={id} list={x} />)}
  </>;
};