import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                    <img src="images/clothes/botcloth1_show.jpg" alt="" />
                    <div className="caption">
                        <p>
                            <a className="btn btn-primary">Thử Đồ</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;