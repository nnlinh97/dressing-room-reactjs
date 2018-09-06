import React, { Component } from 'react';
import Item from './Item';

class Room extends Component {
    render() {
        return (
            <div>
                {/* Phụ kiện */}
                <div className="col-lg-6 col-sm-6">
                    <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
                        <div className="btn-group" role="group">
                            <button type="button" id="stars" className="btn btn-primary" href="#tab1" data-toggle="tab">
                                <div className="hidden-xs">Quần</div>
                            </button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" id="favorites" className="btn btn-default" href="#tab2" data-toggle="tab">
                                <div className="hidden-xs">Áo</div>
                            </button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" id="following" className="btn btn-default" href="#tab3" data-toggle="tab">
                                <div className="hidden-xs">Tóc </div>
                            </button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" id="following" className="btn btn-default" href="#tab4" data-toggle="tab">
                                <div className="hidden-xs">Người mẫu </div>
                            </button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" id="following" className="btn btn-default" href="#tab5" data-toggle="tab">
                                <div className="hidden-xs">Khung nền </div>
                            </button>
                        </div>
                    </div>
                    <div className="well">
                        <div className="tab-content">
                            <div className="tab-pane fade in active" id="tab1">
                                <Item/>
                            </div>
                            <div className="tab-pane fade in" id="tab2">
                                
                            </div>
                            <div className="tab-pane fade in" id="tab3">
                                <h3>Tóc</h3>
                            </div>
                            <div className="tab-pane fade in" id="tab4">
                                <h3>Người Mẫu</h3>
                            </div>
                            <div className="tab-pane fade in" id="tab5">
                                <h3>Khung nền</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Room;