import React from 'react'

export class Book extends React.PureComponent {
    render() {
      const { title, author } = this.props;
  
      return (
        <div>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
      );
    }
  }
  