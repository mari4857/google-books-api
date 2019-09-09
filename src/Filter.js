import React from 'react';
import './Filter.css';

export default function Filter(props) {
    
    const { handlePrintType, handleBookType } = props;
    
    return (
        <div className="filter-bar-container">
            <label htmlFor="print">Print Type:</label>
            <form
                action=""
                className="print-type-filter-form"
                onChange={ e => handlePrintType( e.target.value )}>
                <select
                    name="print-type-filter">
                    <option
                        value="all">
                            All
                    </option>
                    <option
                        value="magazines">
                            Only Magazines
                    </option>
                </select>
            </form>
            <label htmlFor="book">Book Type:</label>
            <form
                action=""
                className="book-type-filter-form"
                onChange={ e => handleBookType( e.target.value )}>
                <select
                    name="book-type-filter">
                    <option
                        value="ebooks">
                            All eBooks
                    </option>
                    <option
                        value="free-ebooks">
                            Free eBooks
                    </option>
                    <option
                        value="paid-ebooks">
                            Paid eBooks
                    </option>
                    <option
                        value="full">
                            Fully Available eBooks
                    </option>
                    <option
                        value="partial">
                            Partially Available eBooks
                    </option>
                </select>
            </form>
        </div>
    )
}