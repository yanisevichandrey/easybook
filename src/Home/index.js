import React, { Component } from 'react';
import TextField from '../components/TextField';
import './styles.css';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chips, { Chip } from '../../node_modules/react-chips';

class HomePage extends Component {

    state = {
        userInfo: true,
        bookingInfo: false,
        timeFrom: '10:00',
        timeTo: '00:00',
        choosenRests: [
            {
                id: 1,
                name: 'Теремок',
                address: 'вул. Келецька 100, Вінниця',
                workingTime: '11:00 - 02:00',
                status: 'Booked',
                features: 'Зал для курців, піаніно, літня тераса, кальян',
                keyWords: 'центр, келецька, кальян',
                foto: 'https://tomato.ua/image/resize/storage/restaurants/588fa99e2fdfa0003327b99b/1498560744595238e89e2b7_595238c1044fb0.40098036.jpeg?w=1200&h=1200'
            },
            {
                id: 2,
                name: 'Арталь',
                address: 'вул. Володимира Антоновича, 8, Вінниця',
                workingTime: '10:00 - 23:00',
                status: 'Finished',
                features: 'Зал для курців, піаніно, літня тераса, кальян',
                keyWords: 'центр, келецька, кальян',
                foto: 'https://objor.com/uploads/posts/2018-1/5704-3-5a6f94654eebc.jpeg'
            },
            {
                id: 3,
                name: 'Aura',
                address: 'площа Гагаріна, 2, Вінниця',
                workingTime: '12:00 - 02:00',
                status: 'Finished',
                features: 'Зал для курців, піаніно, літня тераса, кальян',
                keyWords: 'центр, келецька, кальян',
                foto: 'https://tomato.ua/image/resize/storage/restaurants/588fa9ca2fdfa0003327b9bb/1485810125588fa9cd419da_ef145c7a9fbc150f9bce3ad7c62a8b40.jpg?w=1200&h=1200'
            }
        ],
        chips: []
    }

    handleShowUserInfo = () => {
        this.setState({
            userInfo: true,
            bookingInfo: false
        })
    }

    handleShowBookInfo = () => {
        this.setState({
            userInfo: false,
            bookingInfo: true
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChange = chips => {
        this.setState({ chips });
      }



    render() {
        return (
            <div className="home">
                <div className="wrapOnFilterBlock">
                    <TextField label="Пошук" />
                    <div style={{ display: 'flex' }}>
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
                        <FormControl variant="outlined" style={{ width: '100%', marginBottom: '8px', marginLeft: '5px' }}>
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
                    </div>
                    <Chips
                        styles={{height: '100px'}}
                        placeholder="Особливості"
                        value={this.state.chips}
                        onChange={this.onChange}
                        suggestions={["Літня тераса", "Зал для курців", "Кальян", "Лаунж зона", "Караоке", "Жива музика", "Дитяча кімната", "Суші", "Піца"]}

                    />
                </div>
                <div className="wrapOnRests">
                    {
                        this.state.choosenRests.map(rest => {
                            return (
                                <div className="restautant" key={rest.id}>
                                    <div className="flex">
                                        <div className="restaurant__foto"><img width="100%" src={rest.foto}></img></div>
                                        <div className="restaurant__info">
                                            <div>
                                                <h2 className="restaurant__name">Назва ресторану: {rest.name}</h2>
                                                <div className="address_time">Адреса: {rest.address}</div>
                                                <div className="address_time">Години роботи: {rest.workingTime}</div>
                                            </div>
                                            <div className="text_booking_info"></div>
                                            <div>
                                                <div className="address_time">Особливості: {rest.features}</div>
                                                <div className="address_time">Ключові слова: {rest.keyWords}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default HomePage;
