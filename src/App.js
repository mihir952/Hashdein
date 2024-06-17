import React, { useEffect, useState } from 'react'

function App() {
  const [book,setBook]=useState([]);
  const [searchQuery,setSearchQuery]=useState('');
  const [filteredBook,setfilteredBook]=useState([]);

  useEffect(()=>{
    const bookData=[
      {id:1,name:"Atomic habit",author:'Mihir',price:'$20'},
      {id:2,name:"Physics",author:'Tushar',price:'$30'},
      {id:3,name:"Math",author:'Gupta',price:'$30'},
      {id:4,name:"Chemistry",author:'Rahul',price:'$40'},
      {id:5,name:"Biology",author:'Devpriya',price:'$50'}
    ];
    setBook(bookData);
    setfilteredBook(bookData)
  },[])

  useEffect(()=>{
    const filtered=book.filter(book=> book.name.includes(searchQuery));
    setfilteredBook(filtered)
  },[searchQuery,book])

  const handlesearch=(event)=>{
    setSearchQuery(event.target.value)
  };
  return (
    <div className="mydiv">
      <input type='text' value={searchQuery} onChange={handlesearch} placeholder='Seach your book...'/>
      <div className='book-list'>
        {
          filteredBook.map((book)=>(
            <div className='book-card' key={book.id}>
              <h2>{book.name}</h2>
              <p>Author:{book.author}</p>
              <p>Price:{book.price}</p>
              </div>
          ))
        }
      </div>
    
      
     
    </div>
  )
}

export default App

//******** */
//Conditional Rendering and types
//{isLoggedIn ? <DisplayComponent /> : <NonDisplayComponent />}

//***Questions */
// React Lifecycle
// Props,prop drilling
// Optimization Technique
// UseRef ,UseCallback
// MVC
//UseContext,ContextApi
