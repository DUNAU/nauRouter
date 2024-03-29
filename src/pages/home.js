import React from 'react';

const Channel = (props) => {
  const { list } = props;
  return <div className="institute-card">
    <a href={list.link} className='title'>{list.title}</a>
  </div>
}

export const Home = (list) => {
  return <>
    <p className="header-text head"><b>Путівник по НАУ</b></p>
    <p className="header-text" style={{'fontSize':'24px'}}>Підписуйтесь на ресурси:</p>
    <div className="cards">
      {list.map((x,id) => <Channel key={id} list={x} />)}
    </div>
  </>;
};