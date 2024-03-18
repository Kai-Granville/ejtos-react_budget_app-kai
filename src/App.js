import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import { CurrencyProvider } from './components/CurrencyContex';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import CurrencyForm from './components/Currency';

const items = [
    {
        id: 1,
        value: '£ Pounds',
        Symbol: '£'
    },
    {
        id: 2,
        value: '$ Dollars',
        Symbol: '$'
    },
    {
        id: 3,
        value: '€ Euros',
    },
    {
        id: 4,
        value: '₹ Rupee',
    },
];

const App = () => {
    return (
        <AppProvider>
            <CurrencyProvider>
        
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <CurrencyForm title="Currency" items={items} multiSelect/>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
            </CurrencyProvider>
        </AppProvider>
    );
};

export default App;
