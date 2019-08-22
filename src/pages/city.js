import React from 'react';
import { ListContent } from 'semantic-ui-react';

const CityPlace = (props) => {
  const { list } = props;
  return <div className="institute-card">
    <p className="title"><b>{list.name}</b></p>
    {list.office && <a className="name" href={`${list.location}`}>{list.office}</a>}
    <p><a href="https://t.me/SM_NAU" className="name">Канал студмістечка</a></p>
    {list.director && <p className="name">{`Староста: ${list.director}`}<br/>(<a href={list.contact} className='name'>{list.contact.split('/').pop()}</a>)</p>}
  </div>
}

export const City = (list) => {
  return <>
    <p className="header-text head">Студмістечко</p>
    <div className="cards">
      {list.map((x,id) => <CityPlace key={id} list={x} />)}
    </div>
  </>;
};