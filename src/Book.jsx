import React, { useContext } from 'react'
import { useFormik } from 'formik'
import context from './Context'
import { Link } from 'react-router-dom'

function Book() {
    const {addbook}=useContext(context)
    const formik=useFormik({
        initialValues:{
        title:"",
        author:"",
        isbn:"",
        pubdate:""
        },
        validate: (values)=>{
            let error={};
            if(values.title == "" ){
                error.title = "Please enter a valid title"
              }
              if(values.author == "" || values.author.length<=3 ){
                error.author = "Please enter a valid Author"
              }
              if(values.isbn>999 || values.isbn<100){
                error.isbn = "Please enter a valid ISBN number"
              }
              if(values.pubdate == "" ){
                error.pubdate = "Please enter a Publication date"
              }
             return error
        },
        onSubmit:(values)=>{
            addbook(values)
            console.log(values.isbn)

         }
    })
    return (
        <div className='container'>
            <Link className='btn btn-light' to={"/"}>Back</Link>
            <div className='row m-4 p-4'>
                <form className='m-2 bg-light p-2 border border-dark rounded' onSubmit={formik.handleSubmit}>
                    <div className="form-group m-3">
                        <label for="title">Title</label>
                        <input type="text"  id="title" name='title' value={formik.values.title} onChange={formik.handleChange} placeholder="Enter Title" className={`form-control  ${formik.errors.title && 'is-invalid'}`} />
                        <span style={{color : 'red'}}>{formik.errors.title}</span>
                        </div>
                    <div className="form-group m-3">
                        <label for="title">Author</label>
                        <input type="text"  id="author" name='author' value={formik.values.author} onChange={formik.handleChange} placeholder="Enter Author" className={`form-control  ${formik.errors.author && 'is-invalid'}`} />
                        <span style={{color : 'red'}}>{formik.errors.author}</span>
                    </div>
                    <div className="form-group m-3">
                        <label for="title">ISBN number</label>
                        <input type="number" id="isbn" name='isbn' value={formik.values.isbn} onChange={formik.handleChange} placeholder="ISBN number" className={`form-control  ${formik.errors.isbn && 'is-invalid'}`} />
                        <span style={{color : 'red'}}>{formik.errors.isbn}</span>
                    </div>
                    <div className="form-group m-3">
                        <label for="title">Publication Date</label>
                        <input type="date" id="pbdate" name='pubdate' value={formik.values.pubdate} onChange={formik.handleChange} placeholder="Enter publication date" className={`form-control  ${formik.errors.pubdate && 'is-invalid'}`} />
                        <span style={{color : 'red'}}>{formik.errors.pubdate}</span>
                    </div>
                    <div className='text-center'>
                    <button type="submit" className="btn btn-primary" on>Add Book</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Book
