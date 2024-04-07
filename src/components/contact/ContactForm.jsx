'use client'

import { useState } from 'react'
import {toast} from 'react-toastify';

export const ContactForm = () =>
{
    const [ loader, setLoader ] = useState(false);
    const [ data, setData ] = useState({
        name: "",
        email: "",
        subject: "",
        message:"",
        
    })

    const clearData = () =>
    {
        setData({
            name: "",
            email: "",
            subject: "",
            message:"",
            
        })
    }

    const emailSubmitHandler = async (event) => {
        event.preventDefault();
        setLoader(true)
        
    
        // Assuming data contains the required fields: name, email, subject, and message
        const { name, email, subject, message } = data;
    
        // Make sure data is available
        if (!name || !email || !subject || !message) {
            console.error('Missing required fields');
            toast.info("All fields are required")
            setLoader(false);
            return;
        }
        console.log(data);
    
        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            if (!response.ok) {
                throw new Error('Failed to send email');
            }
    
            console.log('Email sent successfully');
            toast.success("Email Sent Sucessfully !!!")
            // Assuming clearData is a function to clear the form fields
            clearData();
        } catch (error) {
            console.error('Error sending email:', error.message);
            toast.error("Something went wrong, Please Contact Manually")
        }
        setLoader(false)
    }
    


    return (
        <div className="row">
            <form onSubmit={(event)=>emailSubmitHandler(event)} className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                                placeholder="Name*"
                                id='name'
                                value={data.name}
                                onChange={(event)=>setData({...data,'name':event.target.value})}
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                                placeholder="Email*"
                                id='email'
                                value={data.email}
                                onChange={(event)=>setData({...data,'email':event.target.value})}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                                placeholder="Subject*"
                                id='subject'
                                value={data.subject}
                                onChange={(event)=>setData({...data,'subject':event.target.value})}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message*"
                                defaultValue={""}
                                id='message'
                                value={data.message}
                                onChange={(event)=>setData({...data,'message':event.target.value})}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <button disabled={loader} type="submit" className="btn">
                    {loader? "Please wait ...":"Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
    )
}