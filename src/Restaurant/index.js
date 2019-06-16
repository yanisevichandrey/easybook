import React, { Component } from 'react';
import TextField from '../components/TextField';
import './styles.css';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import DateTimePicker from 'react-datetime-picker';


class Restaurant extends Component {

    state = {
        isModalOpen: false,
        date: new Date(),
        places: '1'
    }

    handleOpenModal = () => {
        this.setState({
            isModalOpen: true
        })
    }

    handleClose = () => {
        this.setState({
            isModalOpen: false
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="restaurant">
                <div className="foto">
                    <img src="https://tomato.ua/image/resize/storage/restaurants/588fa9ca2fdfa0003327b9bb/1485810125588fa9cd419da_ef145c7a9fbc150f9bce3ad7c62a8b40.jpg?w=1200&h=1200"></img>
                </div>
                <div className="restaurant__info">
                    <div>
                        <h2 className="restaurant__name">Назва ресторану: AURA</h2>
                        <div className="address_time">Адреса: площа Гагаріна, 2, Вінниця</div>
                        <div className="address_time">Години роботи: 12:00 - 02:00</div>
                    </div>
                    <div className="text_booking_info"></div>
                    <div>
                        <div className="address_time">Особливості: кальян, караоке, європейська кухня</div>
                        <div className="address_time">Ключові слова: кальян, караоке, європейська кухня, центр, Вінниця</div>
                    </div>
                    <div className="text_booking_info"></div>
                    <div className="address_time">Детальний опис: </div>
                    <div className="description">
                        В центре города Винница зажглись огни нового фешенебельного заведения «Аура», который сочетает в себе ресторан, Lounge Bar и караоке Bar. «Аура» содержит два зала: основной – на втором этаже, в центре которого находится бар и сцена, а для талантливых любителей пения – отдельный караоке-зал. Впечатляющий интерьер соответствует требованиям лучшего вкуса. Над ним работали профессиональные дизайнеры, которые учли многие аспекты. Европейский дизайн, большие удобные диваны и кресла, идеально подобранная цветовая гамма, зеркала и панорамные окна с прекрасным видом. Элементы декора залов выполнены вручную. Меню подойдет для самих привередливых в еде: Wok Menu, Josper Menu, хоспер и роллы. Персонал ресторана соответствует требованиям самых высоких стандартов. Наши клиенты могут насладиться вкусными, свежими блюдами и широким выбором напитков. К услугам посетителей лучшие повара и бармены города. Здесь вас ждет отличный сервис. Днем – это ресторан, вечером – Lounge Bar, а в ночное время заведение работает в формате ночного клуба. Здесь проходят яркие вечеринки с лучшими DJ Украины. Для проведения шоу-программ, показов мод, тематических праздников в наличии профессиональное звуковое и световое оборудование. Благодаря техническому оснащению, каждый праздник и развлекательные мероприятия будут незабываемыми. Ресторан фэшн-формата «Аура» – это место с фантастической обстановкой. Именно здесь есть прекрасная возможность с радостью провести время, вкусно поесть и получить безграничное море позитива. Заведение принимает всех желающих отдохнуть в атмосфере загадочности и неземной ауры.
                    </div>
                    <div className="text_booking_info"></div>
                    <div className="booking" onClick={this.handleOpenModal}>Забронювати</div>
                    <Dialog
                        open={this.state.isModalOpen}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">Бронювання ресторану AURA</DialogTitle>
                        <DialogContent style={{height: '300px'}}>
                            <DialogContentText id="alert-dialog-description">
                                <DateTimePicker
                                style={{width: '100%'}}
                                    onChange={this.onChange}
                                    value={this.state.date}
                                />
                                <FormControl variant="outlined" style={{width: '100%', margin: '10px 0'}}>
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            htmlFor="outlined-age-simple"
                        >
                            Кількість місць
                        </InputLabel>
                        <Select
                            value={this.state.places}
                            onChange={this.handleChange}
                            className="Кількість місць"
                            name='places'
                            input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                />
                            }
                        >

                            <MenuItem value='1'>1</MenuItem>
                            <MenuItem value='2'>2</MenuItem>
                            <MenuItem value='3'>3</MenuItem>
                            <MenuItem value='4'>4</MenuItem>
                            <MenuItem value='5'>5</MenuItem>
                            <MenuItem value='6'>6</MenuItem>
                            <MenuItem value='7'>7</MenuItem>
                            <MenuItem value='8'>8</MenuItem>
                            <MenuItem value='9'>9</MenuItem>
                            <MenuItem value='10'>10</MenuItem>
                            <MenuItem value='more'>Більше</MenuItem>
                        </Select>
                    </FormControl>
                                <Button
                                    className="booking"
                                    variant="outlined"
                                    color="primary"
                                    onClick={this.handleOpenModal}>
                                    Забронювати
                                    </Button>

                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>

                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        )
    }
}

export default Restaurant;
