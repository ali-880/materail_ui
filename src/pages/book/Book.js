import React from 'react';
import { useState } from 'react';
const Book = () => {
    const [book]=useState({book:[
        {id:1 ,name:"alireza",title:"perspolis",price:"1200",vertion:"4"},
        {id:2 ,name:"bahram",title:"or or",price:"12000",vertion:"4"},        
        {id:3 ,name:"vahid",title:"es es",price:"1500",vertion:"4"},
        {id:4 ,name:"javad",title:"tanha",price:"1000",vertion:"3"},
        {id:5 ,name:"nahid",title:"map",price:"3000",vertion:"4"},
        {id:6 ,name:"maryam",title:"sadaf",price:"3000",vertion:"5"},
        {id:77 ,name:"tahere",title:"vahid",price:"3200",vertion:"6"},
        {id:8 ,name:"behnam",title:"uuid",price:"2600",vertion:"3"},
        {id:9 ,name:"orange",title:"ionic",price:"1200",vertion:"2"},        
    ]})
    return ( 
        <div className="rtl">
            <table className="table table-hover table-info">
                <thead>
                    <th>نام</th>
                    <th>موضوع</th>
                    <th>قیمت</th>
                    <th>جنس</th>
                </thead>
                <tbody>
                    {book.book.map(b=>(
                        <tr key={b.id}>
                            <td>{b.name}</td>
                            <td>{b.title}</td>
                            <td>{b.price}</td>
                            <td>{b.vertion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default Book;