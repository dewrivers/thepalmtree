import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors }} = useForm();
  

     const form = useRef();
     const serviceID = "service_ID";
     const templateID = "template_ID";
     const userID = "user_m9rxznCS0QxVMSA7hQ45X";

     const onSubmit = (data, r) => {
        sendEmail(
          serviceID,
          templateID,
          {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
          },
          userID
        )
        r.target.reset();
      }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
              setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Something went wrong ${err}`));
      };

    return (
        <div className="contacts">
            <div className="text-center">
            <h1>Contact Me</h1>
            <p> Please fill out the form and describe your proyect needs and I'll contact you as soon as posible.</p>
            <span className="success-message">{successMessage}</span>
            </div>
        <div className="container">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6 col-xs-12">

                    {/* NAME INPUT */}
                    <div className="text-center">
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    {...register("name", { required: "Please enter your name", 
                    maxLength: {
                        value: 20,
                        message: "Please enter a name with fewer than 20 characters"
                      }})} 
                    />
                    <div className="line"></div>
                    </div>
                    <span className="error-message text-center">
                    {errors.name && errors.name.message}
                    </span>
                     {/* PHONE INPUT */}
                     <div className="text-center">
                     <input 
                     type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    {...register("phone", { required: "Please add your phone number" })} 
                    />
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                    {errors.phone && errors.phone.message}
                    </span>
                    
                     {/* EMAIL INPUT */}
                     <div className="text-center">
                     <input 
                    type="email" 
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    {...register("email", { required: true, pattern:{
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      }
                    })} 
                    />
                    <div className="line"></div></div>
                    <span className="error-message">
                    {errors.email?.type === 'required' && "Please provide you email"}
                    </span>
                    
                     
                     {/* Subject INPUT */}
                     <div className="text-center">
                     <input 
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    {...register("subject", { required: true })}
                    />
                    <div className="line"></div></div>
                    <span className="error-message">
                    {errors.subject?.type === 'required' && "OOPS, you forget to add the subject."}
                    </span>
                    </div>
                    

                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                    <div className="text-center">   
                     <textarea 
                    type="text"
                    className="form-control"
                    placeholder="Please describe shortly your project needs..."
                    name="description"
                    {...register("description", { required: true })}
                    >
                    </textarea>
                    <div className="line"></div></div>
                    <span className="error-message">
                    {errors.description?.type === 'required' && "Please describe shortly your project needs."}
                    </span>
                    
                    <button 
                    className="btn-ghost secundary contact-btn" 
                    type="submit">
                        contact me
                    </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}



export default Contacts;