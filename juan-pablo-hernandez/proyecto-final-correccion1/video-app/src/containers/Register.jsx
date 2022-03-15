import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.css';

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		const navigate = useNavigate();
		return (
			<Component
				{...props}
				navigate={navigate}
			/>
		);
	}

	return ComponentWithRouterProp;
}

const Register = props => {

	const [form, setValues] = useState({
		email: '',
		name: '',
		password: '',
	});

	const handleInput = e => {
		setValues({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		props.registerRequest(form);
		props.navigate('/');
	}

	return (
		<>
			<section className='register'>
				<section className='register__container'>
					<h2>Regístrate</h2>
					<form className='register__container--form' onSubmit={handleSubmit}>
						<input 
							name='name'
							className='input'
							type='text'
							placeholder='Nombre'
							onChange={handleInput}
						/>
						<input 
							name='email'
							className='input'
							type='text'
							placeholder='Correo'
							onChange={handleInput}
						/>
						<input 
							name='password'
							className='input'
							type='password'
							placeholder='Contraseña' 
							onChange={handleInput}
						/>
						<button className='button'>Registrarme</button>
					</form>
					<Link to="/login">
						Iniciar sesión
					</Link>
				</section>
			</section>
		</>
	);
}

const mapDispatchToProps = {
	registerRequest,
};

export default withRouter(connect(null, mapDispatchToProps)(Register));