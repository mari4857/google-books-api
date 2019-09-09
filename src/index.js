import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const starterHenryResults = {
    "kind": "books#volumes",
    "totalItems": 3144,
    "items": [
        {
            "volumeInfo": {
                "title": "Henry I",
                "authors": [
                    "C. Warren Hollister"
                ],
                "imageLinks": {
                    "thumbnail": "http://books.google.com/books/content?id=TRMaCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "previewLink": "http://books.google.com/books?id=TRMaCAAAQBAJ&printsec=frontcover&dq=henry&hl=&cd=1&source=gbs_api"
            },
            "searchInfo": {
                "textSnippet": "The resulting volume is one that will be welcomed by students and general readers alike."
            }
        },
        {
            "volumeInfo": {
                "title": "Henry Hikes to Fitchburg",
                "authors": [
                    "D.B. Johnson"
                ],
                "imageLinks": {
                    "thumbnail": "http://books.google.com/books/content?id=9CATYYof8TIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "previewLink": "http://books.google.com/books?id=9CATYYof8TIC&printsec=frontcover&dq=henry&hl=&cd=2&source=gbs_api"
            },
            "searchInfo": {
                "textSnippet": "Inspired by a passage from Henry David Thoreau’s Walden, the wonderfully appealing Henry Hikes to Fitchburg follows two friends who have very different approaches to life."
            }
        },
        {
            "volumeInfo": {
                "title": "Diplomacy",
                "authors": [
                    "Henry Kissinger"
                ],
                "imageLinks": {
                    "thumbnail": "http://books.google.com/books/content?id=0IZboamhb5EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "previewLink": "http://books.google.com/books?id=0IZboamhb5EC&printsec=frontcover&dq=henry&hl=&cd=8&source=gbs_api"
            },
            "searchInfo": {
                "textSnippet": "A brilliant, sweeping history of diplomacy that includes personal stories from the noted former Secretary of State, including his stunning reopening of relations with China. The seminal work on foreign policy and the art of diplomacy."
            }
        }
    ]
};

ReactDOM.render(<App
        starterBookResults={ starterHenryResults } />,
    document.getElementById('root'));