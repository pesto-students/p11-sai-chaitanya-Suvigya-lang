import React from 'react'
import WithLogging from './WithLogging';
class BookList extends React.Component {

    books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
        // Add more books if you'd like
      ];
  render (){
    
    return <div>
        <ul>
        {this.books.map((item,idx)=>{
            return <li key={idx}>{item.author}{item.year}{item.title}</li>
        })}
        </ul>
    </div>
  
}
}

const BookListWithLogging = WithLogging(BookList);

export default BookListWithLogging;

