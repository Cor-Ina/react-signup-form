
import React from "react"
import './App.css';

export default function App() {
    
  const [form, setForm] = React.useState( {
    email: "",
    password: "",
    confirm: "",
    joinedNewsletter: false,
  })

    
  function handleChange(event) {
    const {name, type, value, checked} = event.target
    setForm(prevForm => ({
      
      ...prevForm,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(form.password === form.confirm) {
        console.log("Successfully signed up")
    } else {
        console.log("Passwords do not match")
        return
    }
    
    if(form.joinedNewsletter) {
        console.log("Thanks for signing up for our newsletter!")
    }
  }
    
  return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                name="email"
                value = {form.email}
                onChange={handleChange}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                name="password"
                value = {form.password}
                onChange={handleChange}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                name="confirm"
                value = {form.confirm}
                onChange={handleChange}
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name="okayToEmail"
                    checked = {form.joinedNewsletter}
                    onChange={handleChange}
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
        </form>
    </div>
  )
}
