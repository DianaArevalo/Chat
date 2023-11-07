import { useState, useEffect } from 'react'

const AgregarTexto = () => {
    const [user, setUser] = useState('')
    const [inc, setInc] = useState('')
    const [displayTodayDate, setDisplayTodayDate] = useState('');


    useEffect(() => {
        const showHour = new Date();
        const hour = showHour.getHours();
        const minutes = showHour.getMinutes();
        const formattedTime = `${hour}:${minutes}`;

        setDisplayTodayDate(formattedTime);
    }, []);

    const saludo = () => {
        if (displayTodayDate > '12:59') {
            return 'Buenas tardes';
        } else {
            return 'Buenos días';
        }
    };


    return (
        <form action="">

            <input
                type='text'
                name='user'
                placeholder='Maria'
                autoComplete='off'
                onChange={ev => setUser(ev.target.value)}
                value={user}
            >
            </input>
            <input
                type='text'
                name='inc'
                placeholder='INC123456'
                autoComplete='on'
                onChange={ev => setInc(ev.target.value)}
                value={inc}
            >
            </input>
            <input
                type="text"
                value={displayTodayDate}
            />

            <p>{saludo()} Sr@. {user} mi nombre es Oscar Tovar del area IT LAN ¿Como esta?, me comunico con usted por el incidente No. {inc}</p>

        </form>
    )
}

export default AgregarTexto