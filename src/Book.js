import React from 'react';
import './Book.css';

export default function Book(props) {
    const { book } = props;

    let author;
    let title;
    let thumbnailUrl;
    let previewUrl;
    let snippet;
    let cost;

    //handling abnormal responses
    if ( book.volumeInfo ) {
        author = book.volumeInfo.authors !== undefined
            ? book.volumeInfo.authors[0]
            : 'No authors listed'
        title = book.volumeInfo.title !== undefined
            ? book.volumeInfo.title
            : 'No authors listed';
        thumbnailUrl = book.volumeInfo.imageLinks.thumbnail !== undefined
            ? book.volumeInfo.imageLinks.thumbnail
            : 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg';
        previewUrl = book.volumeInfo.previewLink !== undefined
            ? book.volumeInfo.previewLink
            : 'https://books.google.com/';
    } else {
        author = null;
        title = null;
        thumbnailUrl = null;
        previewUrl = null;
        snippet = null;
        cost = null;
    }

    if ( book.searchInfo ) {
        snippet = book.searchInfo.textSnippet !== undefined
            ? book.searchInfo.textSnippet
            : null;
    } else {
        snippet = null;
    }

    if ( book.saleInfo ) {
        cost = book.saleInfo.saleability === 'FOR_SALE'
            ? '$' + book.saleInfo.listPrice.amount
            : null;
    } else {
        cost = null;
    }

    return (
        <div className="book-container">
            <a href={ previewUrl } target="blank">
                <li className="book-list-item">
                    <img src={ thumbnailUrl } className="book-image" alt={`The cover of the book titled ${title}`}></img>
                    <div className="book-info">
                        <h2 className="book-title">{ title }</h2>
                        <h4 className="book-author">{ author }</h4>
                        <div className="book-cost">{ cost }</div>
                        <p className="book-snippet">{ snippet }</p>
                    </div>
                </li>
            </a>
        </div>
    );

}