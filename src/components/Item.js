import React from 'react';
import "./Item.css";
import Counter from './Counter';

function Item() {

function onAdd(){
    return alert("Item added to cart");
}

  return <div>
      <div id="app" className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
            <img className="w-1/2 h-full rounded-l-sm" src="https://image.api.playstation.com/vulcan/img/rnd/202111/1918/psoOkDbYuMdr1RsJo6TpU6bg.png" alt="Room Image"/>
            <div className="w-full flex flex-col">
                <div className="p-4 pb-0 flex-1">
                    <h3 className="font-regular mb-1 text-grey-darkest">Crash Bandicoot</h3>
                    <div className="text-xs flex items-center mb-4">
                        <i className="fas fa-angle-right mr-1 text-grey-dark"></i>
                        "Out of time"
                    </div>
                    <span className="text-5xl text-grey-darkest">35<span className="text-lg">US</span></span>
                    <Counter initial={1} stock={7} onAdd={onAdd} />
                </div>
            </div>
        </div>

  </div>;
}

export default Item;
