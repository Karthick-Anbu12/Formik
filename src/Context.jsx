import {createContext, useState } from "react";

 let context=createContext()
 
 export const UserProvider=({children})=>{
    let books=[
        {
            "title": "Moby-Dick",
            "author": "Herman Melville",
            "isbn": "9781503280786",
            "publication_date": "1851-10-18"
        },
        {
            "title": "War and Peace",
            "author": "Leo Tolstoy",
            "isbn": "9781400079988",
            "publication_date": "1869-01-01"
        },
        {
            "title": "The Odyssey",
            "author": "Homer",
            "isbn": "9780140268867",
            "publication_date": "circa 8th century BC"
        },
        {
            "title": "The Catcher in the Rye",
            "author": "J.D. Salinger",
            "isbn": "9780316769488",
            "publication_date": "1951-07-16"
        },
        {
            "title": "One Hundred Years of Solitude",
            "author": "Gabriel García Márquez",
            "isbn": "9780060883287",
            "publication_date": "1967-05-30"
        }
    ]
    let authors=[
        {
            "name": "Herman Melville",
            "dob": "1819-08-01",
            "biography": "American novelist known for Moby-Dick, exploring obsession and nature, celebrated posthumously as a literary great."
        },
        {
            "name": "Leo Tolstoy",
            "dob": "1828-09-09",
            "biography": "Renowned Russian author of War and Peace, exploring morality and human experience, later advocated nonviolent resistance."
        },
        {
            "name": "Homer",
            "dob": "circa 8th century BC",
            "biography": "Ancient Greek poet credited with The Iliad and The Odyssey, foundational texts of Western literature, focusing on heroism."
        },
        {
            "name": "J.D. Salinger",
            "dob": "1919-01-01",
            "biography": "American writer famed for The Catcher in the Rye, exploring teenage angst; became a recluse, avoiding public life."
        },
        {
            "name": "Gabriel García Márquez",
            "dob": "1927-03-06",
            "biography": "Colombian novelist and Nobel laureate known for One Hundred Years of Solitude, blending magic and realism in storytelling."
        }
    ]
   let  [author,setauthor]=useState(authors)
    const [book,setbooks]=useState(books)
    const addbook=(item)=>{
        setbooks([...book,item])
    }
    const removebook=(index)=>{
        book.splice(index,1)
        setbooks([...book])
    }
    const addauthor=(item)=>{
        setauthor([...author,item])
    }
    const removeauthor=(index)=>{
        author.splice(index,1)
        setauthor([...author])
    }
  
    
    return <context.Provider value={{author,book,addbook,removebook,addauthor,removeauthor}}>
{children}
    </context.Provider>
 }
 export default context