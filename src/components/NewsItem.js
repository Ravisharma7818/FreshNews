import React, { Component } from 'react';

class NewsItem extends Component {
  render() {

    let { title, desc ,imgUrl ,CompleteNews} = this.props;
    return (
        <>
        <div className="my-3">
        <div className="card">
        <img src={!imgUrl?"https://derivates.kicker.de/image/upload/c_crop,x_0,y_245,w_2394,h_1347/w_1200,q_auto/v1/2022/01/19/45b94278-eb6e-4759-8b2a-4528dd5d6cf2.jpeg":imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <a href={CompleteNews} target="_blank" rel="noreferrer" className="btn btn-primary">Readmore</a>
        </div>
      </div>
      </div>
      </>
    );
  }
}

export default NewsItem;
