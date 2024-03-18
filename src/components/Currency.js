import React, { useState } from "react";
import onClickOutside from 'react-onclickoutside';

function CurrencyForm({title, items, multiSelect = false}){
    const [open , setOpen] = useState=false;
    const [selection, setSelection] = useState([]);
    const toggle = () => (!open);
    CurrencyForm.handleClickOutside = () => setOpen(false);

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
          if (!multiSelect) {
            setSelection([item]);
          } else if (multiSelect) {
            setSelection([...selection, item]);
          }
        } else {
          let selectionAfterRemoval = selection;
          selectionAfterRemoval = selectionAfterRemoval.filter(
            current => current.id !== item.id
          );
          setSelection([...selectionAfterRemoval]);
        }
      }
    
      function isItemInSelection(item) {
        if (selection.some(current => current.id === item.id)) {
          return true;
        }
        return false;
      }


    return(
        <div className="dd-wrapper">
            <div 
                className="dd-header" 
                tableindex={0} 
                role="button" 
                onKeyPress={() => toggle(!open)} 
                onClick={() => toggle(!open)}
                >

                <div className="dd-header_title">
                    <p className="dd-header-title--bold">{title}</p>
                </div>
                <div className="dd-header_action">
                    <p>{open ? 'Close' : 'Open'}</p>
                </div>
                {open && (
                    <ul className="dd-list">
                        {items.map(item =>(
                            <li className=" dd-item-list" key={item.id}>
                                <button type="button" onClick={() => handleOnClick(item)}>
                                    <span>{item.value}</span>
                                    <span>{isItemInSelection(item) && 'Selected'}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => CurrencyForm.handleClickOutside,
  };
  

export default onClickOutside(CurrencyForm, clickOutsideConfig);
