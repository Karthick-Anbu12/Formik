import React, { useContext } from 'react'
import { useFormik } from 'formik'
import context from './Context'
import { Link } from 'react-router-dom'

function Author() {
  const {addauthor}=useContext(context)
  const formik=useFormik({
    initialValues:{
    name:"",
    dob:"",
    biography:""
    },
    validate: (values)=>{
      let error={};
      if(values.name == "" || values.name<=3){
          error.title = "Please enter a valid User Name"
        }
        if(values.biography == "" || values.biography.length<=50 ){
          error.author = "Please enter a valid Biography"
      
        if(values.dob == "" ){
          error.dob = "Please enter a Date of birth"
        }
       return error;
      }

    },
    onSubmit:(values)=>{
        addauthor(values)
     }
})
  return (
    
    <div className='container'>
      <Link className='btn btn-light' to={"/"}>Back</Link>
      <div className='row m-4 p-4 '>
        <form className='m-2 bg-light p-2 border border-dark rounded' onSubmit={formik.handleSubmit} >
          <div className="form-group m-3">
            <label for="title">Author Name</label>
            <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} id="name" placeholder="Enter Author Name" className={`form-control  ${formik.errors.name && 'is-invalid'}`} />
            <span style={{color : 'red'}}>{formik.errors.title}</span>
          </div>
          <div className="form-group m-3">
            <label for="title">Date of Birth</label>
            <input type="date"  name="dob" value={formik.values.dob} onChange={formik.handleChange} id="author" placeholder="Enter DOB"className={`form-control  ${formik.errors.dob && 'is-invalid'}`} />
            <span style={{color : 'red'}}>{formik.errors.dob}</span>
          </div>
          <div className="form-group m-3">
            <label for="title">Biography</label>
            <textarea  name="biography" value={formik.values.biography} onChange={formik.handleChange} id="biography" rows="3"className={`form-control  ${formik.errors.title && 'is-invalid'}`}>
            <span style={{color : 'red'}}>{formik.errors.title}</span></textarea>
          </div>
          <div className='text-center '>
            <button type="submit" className="btn btn-primary" >Add Author</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Author
