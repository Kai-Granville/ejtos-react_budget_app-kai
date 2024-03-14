import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyForm = (props) => {
    const { dispatch,remaining  } = useContext(AppContext);

    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Pounds" name="Pounds"> £ Pounds</option>
                <option value="Dollar" name="Dollar">$ Dollar</option>
                <option value="Euro" name="Euro">€ Euro</option>
                <option value="Rupee" name="Rupee">Rupee</option>
                  </select>

                    {/* <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setCost(event.target.value)}>
                        </input> */}

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
                </div>

        </div>
    );
};

export default CurrencyForm;

