import React, { Component } from 'react';
import TextField from '../components/TextField';
import './styles.css';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chips, { Chip } from '../../node_modules/react-chips';

class UserProfile extends Component {

    state = {
        userInfo: false,
        bookingInfo: false,
        addRest: true,
        timeTo: '00:00',
        timeFrom: '10:00',
        choosenRests: [
            {
                id: 1,
                name: 'Теремок',
                address: 'вул. Келецька 100, Вінниця',
                workingTime: '11:00 - 02:00',
                status: 'Booked',
                bookingInfo: {
                    date: '24.05.2019',
                    places: 2,
                    time: '17:00'
                },
                foto: 'https://tomato.ua/image/resize/storage/restaurants/588fa99e2fdfa0003327b99b/1498560744595238e89e2b7_595238c1044fb0.40098036.jpeg?w=1200&h=1200'
            },
            {
                id: 2,
                name: 'Арталь',
                address: 'вул. Володимира Антоновича, 8, Вінниця',
                workingTime: '10:00 - 23:00',
                status: 'Finished',
                bookingInfo: {
                    date: '24.05.2019',
                    places: 2,
                    time: '17:00'
                },
                foto: 'https://objor.com/uploads/posts/2018-1/5704-3-5a6f94654eebc.jpeg'
            },
            {
                id: 3,
                name: 'Aura',
                address: 'площа Гагаріна, 2, Вінниця',
                workingTime: '12:00 - 02:00',
                status: 'Finished',
                bookingInfo: {
                    date: '24.05.2019',
                    places: 2,
                    time: '17:00'
                },
                foto: 'https://tomato.ua/image/resize/storage/restaurants/588fa9ca2fdfa0003327b9bb/1485810125588fa9cd419da_ef145c7a9fbc150f9bce3ad7c62a8b40.jpg?w=1200&h=1200'

            }
        ]
    }

    handleShowUserInfo = () => {
        this.setState({
            userInfo: true,
            bookingInfo: false,
            addRest: false
        })
    }

    handleShowBookInfo = () => {
        this.setState({
            userInfo: false,
            bookingInfo: true,
            addRest: false
        })
    }

    handleAddRest = () => {
        this.setState({
            userInfo: false,
            bookingInfo: false,
            addRest: true
        })
    }



    render() {
        return (
            <div className="userProfile">
                <div className="wrapOnTabs">
                    <div className="tab" style={{ backgroundColor: this.state.userInfo ? '#2046c7' : 'white', color: this.state.userInfo ? 'white' : '#2046c7' }} onClick={this.handleShowUserInfo}>Інформація про користувача</div>
                    <div className="tab" style={{ backgroundColor: this.state.bookingInfo ? '#2046c7' : 'white', color: this.state.bookingInfo ? 'white' : '#2046c7' }} onClick={this.handleShowBookInfo}>Інформація про бронювання</div>
                    <div className="tab" style={{ backgroundColor: this.state.addRest ? '#2046c7' : 'white', color: this.state.addRest ? 'white' : '#2046c7' }} onClick={this.handleAddRest}>Додати ресторан</div>
                </div>
                {this.state.userInfo && <div className="wrapOnFields">
                    <TextField
                        value={this.state.name}
                        name='name'
                        onChange={this.handleChange}
                        label="Ім'я"
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
                        label="Телефон"
                    />
                    <TextField
                        value={this.state.intereses}
                        name='intereses'
                        onChange={this.handleChange}
                        label="Інтереси"
                    />
                    <button className="saveButton">Зберегти</button>
                </div>}
                {this.state.bookingInfo && <div className="wrapOnFields">
                    {
                        this.state.choosenRests.map(rest => {
                            return (
                                <div className="restautant" key={rest.id}>
                                    <div className="flex">
                                        <div className="restaurant__foto"><img src={rest.foto}></img></div>
                                        <div className="restaurant__info">
                                            <div>
                                                <h2 className="restaurant__name">Назва ресторану: {rest.name}</h2>
                                                <div className="address_time">Адреса: {rest.address}</div>
                                                <div className="address_time">Години роботи: {rest.workingTime}</div>
                                            </div>
                                            <div className="text_booking_info">Інформація про бронювання</div>
                                            <div>
                                                <div className="address_time">Дата: {rest.bookingInfo.date}</div>
                                                <div className="address_time">Кількість місць: {rest.bookingInfo.places}</div>
                                                <div className="address_time">Час: {rest.bookingInfo.time}</div>
                                                <div className="address_time">Статус: {rest.status}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>}

                {this.state.addRest && <div className="wrapOnFields">
                    <TextField
                        value={this.state.name}
                        name='name'
                        onChange={this.handleChange}
                        label="Назва ресторану"
                    />
                    <TextField
                        value={this.state.email}
                        name='email'
                        onChange={this.handleChange}
                        label="Адреса"
                    />
                    <FormControl variant="outlined" style={{ width: '100%', marginBottom: '8px', marginRight: '5px' }}>
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            htmlFor="outlined-age-simple"
                        >
                            Від
                        </InputLabel>
                        <Select
                            value={this.state.timeFrom}
                            onChange={this.handleChange}
                            className="select"
                            name='timeFrom'
                            input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                />
                            }
                        >

                            <MenuItem value='00:00'>00:00</MenuItem>
                            <MenuItem value='01:00'>01:00</MenuItem>
                            <MenuItem value='02:00'>02:00</MenuItem>
                            <MenuItem value='03:00'>03:00</MenuItem>
                            <MenuItem value='04:00'>04:00</MenuItem>
                            <MenuItem value='05:00'>05:00</MenuItem>
                            <MenuItem value='06:00'>06:00</MenuItem>
                            <MenuItem value='07:00'>07:00</MenuItem>
                            <MenuItem value='08:00'>08:00</MenuItem>
                            <MenuItem value='09:00'>09:00</MenuItem>
                            <MenuItem value='10:00'>10:00</MenuItem>
                            <MenuItem value='11:00'>11:00</MenuItem>
                            <MenuItem value='12:00'>12:00</MenuItem>
                            <MenuItem value='13:00'>13:00</MenuItem>
                            <MenuItem value='14:00'>14:00</MenuItem>
                            <MenuItem value='15:00'>15:00</MenuItem>
                            <MenuItem value='16:00'>16:00</MenuItem>
                            <MenuItem value='17:00'>17:00</MenuItem>
                            <MenuItem value='18:00'>18:00</MenuItem>
                            <MenuItem value='19:00'>19:00</MenuItem>
                            <MenuItem value='20:00'>20:00</MenuItem>
                            <MenuItem value='21:00'>21:00</MenuItem>
                            <MenuItem value='22:00'>22:00</MenuItem>
                            <MenuItem value='23:00'>23:00</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" style={{ width: '100%', marginBottom: '8px', }}>
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            htmlFor="outlined-age-simple"
                        >
                            До
                        </InputLabel>
                        <Select
                            value={this.state.timeTo}
                            onChange={this.handleChange}
                            className="select"
                            name='timeTo'
                            input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                />
                            }
                        >

                            <MenuItem value='00:00'>00:00</MenuItem>
                            <MenuItem value='01:00'>01:00</MenuItem>
                            <MenuItem value='02:00'>02:00</MenuItem>
                            <MenuItem value='03:00'>03:00</MenuItem>
                            <MenuItem value='04:00'>04:00</MenuItem>
                            <MenuItem value='05:00'>05:00</MenuItem>
                            <MenuItem value='06:00'>06:00</MenuItem>
                            <MenuItem value='07:00'>07:00</MenuItem>
                            <MenuItem value='08:00'>08:00</MenuItem>
                            <MenuItem value='09:00'>09:00</MenuItem>
                            <MenuItem value='10:00'>10:00</MenuItem>
                            <MenuItem value='11:00'>11:00</MenuItem>
                            <MenuItem value='12:00'>12:00</MenuItem>
                            <MenuItem value='13:00'>13:00</MenuItem>
                            <MenuItem value='14:00'>14:00</MenuItem>
                            <MenuItem value='15:00'>15:00</MenuItem>
                            <MenuItem value='16:00'>16:00</MenuItem>
                            <MenuItem value='17:00'>17:00</MenuItem>
                            <MenuItem value='18:00'>18:00</MenuItem>
                            <MenuItem value='19:00'>19:00</MenuItem>
                            <MenuItem value='20:00'>20:00</MenuItem>
                            <MenuItem value='21:00'>21:00</MenuItem>
                            <MenuItem value='22:00'>22:00</MenuItem>
                            <MenuItem value='23:00'>23:00</MenuItem>
                        </Select>
                    </FormControl>
                    <Chips
                        placeholder="Особливості"
                        value={this.state.chips}
                        onChange={this.onChange}
                        suggestions={["Літня тераса", "Зал для курців", "Кальян", "Лаунж зона", "Караоке", "Жива музика", "Дитяча кімната", "Суші", "Піца"]}

                    />
                    <div style={{height: '10px'}}></div>
                    <TextField
                        value={this.state.password}
                        name='password'
                        onChange={this.handleChange}
                        label="Ключові слова"
                        styles={{margin: '10px'}}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Детальний опис"
                        multiline
                        rows="4"
                        defaultValue="Default Value"
                        margin="normal"
                        variant="outlined"
                    />
                    <div className="addFoto">
                        <div className="addFotoText">Додайте фото:</div>
                        <input type="file" style={{ marginBottom: '10px' }} />
                    </div>
                    <button className="saveButton">Додати</button>
                </div>}
            </div>
        )
    }
}

export default UserProfile;
