import './../styles/css/main.css';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Form() {
    const { register, handleSubmit, formState: { errors, reset } } = useForm();
    const [message, setMessage] = useState('');
    // const onSubmit = data => console.log(data);
    
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
        setMessage(<span>Gracias por tu mensaje {data.nameUser}, pronto te contactaremos!</span>);
        reset();

      };
  
  return (
    <div className='form-contact'>
        <p>Déjanos tu mensaje y te contactaremos.</p>        
        <form onSubmit={handleSubmit(onSubmit)} className="formContact">
            <div className="form-group half-group"> 
                <label htmlFor="nameUser" className="label">Nombre y Apellido:</label>               
                <input type="text" id='nameUser' className={errors.nameUser ? 'form-control is-invalid': 'form-control'} {...register("nameUser", {required: true, minLength: 3, maxLength: 80, pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g})} /> 
                {errors.nameUser && errors.nameUser.type === "required" && <span className='error-control'>⚠ Debes completar este campo 😉</span>}
                {errors.nameUser && errors.nameUser.type === "minLength" && <span className='error-control'>⚠ Parece que tu nombre es muy corto 🤔</span>}
                {errors.nameUser && errors.nameUser.type === "pattern" && <span className='error-control'>⚠ Segur@ que tu nombre esta escrito correctamente?🤔</span>}               
            </div>
            <div className="form-group half-group">
                <label htmlFor="company" className="label">Empresa:</label>
                <input type="text" id='company' className={errors.nameUser ? 'form-control is-invalid': 'form-control'} {...register("company", {required: true, minLength: 3, maxLength: 100})} />
                {errors.company && errors.company.type === "required" && <span className='error-control'>⚠ Debes completar este campo 😉</span>}
            </div>
            <div className="form-group full-group">
                <label htmlFor="emailContact" className="label">Correo Electrónico:</label>
                <input type="text" id='emailContact' className={errors.nameUser ? 'form-control is-invalid': 'form-control'} {...register("emailContact", {required: true, pattern: /^\S+@\S+$/i})} />
                {errors.emailContact && errors.emailContact.type === "pattern" && <span className='error-control'>⚠ Segur@ que tu correo esta escrito correctamente?🤔</span>}
            </div>
            <div className="form-group full-group">
                <label htmlFor="subject" className="label">Asunto:</label>
                <select id='subject' className={errors.nameUser ? 'form-control is-invalid': 'form-control'} {...register("subject", { required: true })}>
                    <option value="">Selecciona una opción</option>
                    <option value="Servicio">Servicio</option>
                    <option value="Evento"> Evento</option>
                    <option value="Consulta"> Consulta</option>
                    <option value="Otros..."> Otros...</option>
                </select>
                {errors.subject && errors.subject.type === "required" && <span className='error-control'>⚠ Debes seleccionar una opción 😉</span>}
            </div>
            <div className="form-group full-group">
                <label htmlFor="msgUser" className="label">Mensaje:</label>
                <textarea id='msgUser' className={errors.nameUser ? 'form-control is-invalid': 'form-control'} {...register("msgUser", {required: true, max: 10, maxLength: 450})} />
                {errors.msgUser && errors.msgUser.type === "required" && <span className='error-control'>⚠ Déjanos saber tu duda y/o comentario 😉</span>}
            </div>
            <div className="form-group full-group">
                <label htmlFor="tyc" className="label">
                    <input type="checkbox" id='tyc' className={errors.tyc ? 'check-control is-invalid': 'check-control'} {...register("tyc", {required: true})} />
                    <span>He leido y acepto los Términos y Condiciones</span>
                </label>
                {errors.tyc && errors.tyc.type === "required" && <span className='error-control'>⚠ Debes aceptar los Términos y Condiciones 😥</span>}
            </div>
            <div className="form-group full-group">
                <input type="submit" value={'Enviar'} className="btn-submit" />
            </div>
            <p className='msgSubmit'>{message}</p>
        </form>
    </div>
  );
}