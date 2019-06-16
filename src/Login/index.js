import React, { Component } from 'react';
import TextField from '../components/TextField';
import './styles.css';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Login extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        phone: '',
        role: 'user',
        loginWindow: true,
        registrationWindow: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleShowLogin = () => {
        this.setState({
            loginWindow: true,
            registrationWindow: false
        })
    }

    handleShowRegistration = () => {
        this.setState({
            loginWindow: false,
            registrationWindow: true
        })
    }

    handleAddUser = () => {
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
            phone: this.state.phone,
            intereses: this.state.intereses
        }

        if(this.state.role === 'customer') {
            delete user.intereses
        }

        let newUsers = [...this.props.users];
        newUsers.push(user);

        this.setState({
            name: '',
            email: '',
            password: '',
            role: 'user',
            phone: '',
            intereses: ''
        })

        this.props.addUser(newUsers)
    }




    render() {
        return (
            <div className="login">
                <div className="wrapOnTabs">
                    <div className="tab" style={{ backgroundColor: this.state.loginWindow ? '#2046c7' : 'white', color: this.state.loginWindow ? 'white' : '#2046c7' }} onClick={this.handleShowLogin}>Login</div>
                    <div className="tab" style={{ backgroundColor: this.state.registrationWindow ? '#2046c7' : 'white', color: this.state.registrationWindow ? 'white' : '#2046c7' }} onClick={this.handleShowRegistration}>Registration</div>
                </div>
                {this.state.loginWindow && <div className="wrapOnFields">
                    <TextField
                        value={this.state.email}
                        name='email'
                        onChange={this.handleChange}
                        label="Email"
                    />
                    <TextField
                        value={this.state.name}
                        name='password'
                        onChange={this.handleChange}
                        label="Password"
                    />
                    <button className="button">Login</button>
                </div>}
                {this.state.registrationWindow && <div className="wrapOnFields">
                    <TextField
                        value={this.state.name}
                        name='name'
                        onChange={this.handleChange}
                        label="Name"
                    />
                    <TextField
                        value={this.state.email}
                        name='email'
                        onChange={this.handleChange}
                        label="Email"
                    />
                    <TextField
                        value={this.state.phone}
                        name='phone'
                        onChange={this.handleChange}
                        label="Phone"
                    />
                    <FormControl variant="outlined" style={{width: '100%', marginBottom: '8px'}}>
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            htmlFor="outlined-age-simple"
                        >
                            Роль
                        </InputLabel>
                        <Select
                            value={this.state.role}
                            onChange={this.handleChange}
                            className="select"
                            name='role'
                            input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                />
                            }
                        >

                            <MenuItem value='user'>Клієнт</MenuItem>
                            <MenuItem value='customer'>Власник</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        value={this.state.intereses}
                        name='intereses'
                        onChange={this.handleChange}
                        label="Інтереси"
                    />
                    <TextField
                        value={this.state.password}
                        name='password'
                        onChange={this.handleChange}
                        label="Password"
                    />
                    <button onClick={this.handleAddUser} className="button">Registration</button>
                </div>}
            </div>
        )
    }
}

export default Login;
