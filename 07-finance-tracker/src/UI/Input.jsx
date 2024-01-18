import { useState } from 'react';
import './Input.css';

function Input({ type, name, value, setValue }) {
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="form__control">
      <label className="form__label" htmlFor={name}>
        {name[0].toUpperCase() + name.slice(1)}:
      </label>
      <input className="form__input" type={type} name={name} id={name} value={value} onChange={handleChange} />
    </div>
  );
}

export default Input;

// import { useState } from 'react';
// import './Input.css';

// function Input({ type, name, onSubmit }) {
//   const [input, setInput] = useState('');

//   function handleChange(e) {
//     setInput(e.target.value);
//     onSubmit(name, e.target.value); // pass the name and value to the parent component
//   }

//   return (
//     <div className="form__control">
//       <label className="form__label" htmlFor={name}>
//         {name[0].toUpperCase() + name.slice(1)}
//       </label>
//       <input className="form__input" type={type} name={name} id={name} value={input} onChange={handleChange} />
//     </div>
//   );
// }

// function ParentComponent() {
//   const [formValues, setFormValues] = useState({});

//   function handleInputChange(name, value) {
//     setFormValues({...formValues, [name]: value });
//   }

//   return (
//     <div>
//       <Input type="text" name="firstName" onSubmit={handleInputChange} />
//       <Input type="text" name="lastName" onSubmit={handleInputChange} />
//       <ChildComponent formValues={formValues} />
//     </div>
//   );
// }

// function ChildComponent({ formValues }) {
//   return (
//     <div>
//       <p>First Name: {formValues.firstName}</p>
//       <p>Last Name: {formValues.lastName}</p>
//     </div>
//   );
// }
