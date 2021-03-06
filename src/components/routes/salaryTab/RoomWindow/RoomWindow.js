import './RoomWindow.css';
import { BsAsterisk, BsWifi, BsCheckLg } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";

const RoomWindow = ({
    price
}) => {

    return (
        <div id="roomWindow">
            <div> Pokój x osobowy</div>
            <div id="picture">zdjecie</div>
            <div id="parameters">
                <p><IoIosBed/> Łóżko jednoosobowe</p>
                <p><BsAsterisk/>  Klimatyzacja</p>
                <p><BsWifi/> Wi-Fi</p>
                <p>
                    <BsCheckLg/>bezpłatny zestaw kosmetyków
                    <BsCheckLg/>toaleta
                    <BsCheckLg/>wanna lub prysznic
                    <BsCheckLg/>ręczniki
                    <BsCheckLg/>szafa
                    <BsCheckLg/>TV
                    <BsCheckLg/>lodówka
                    <BsCheckLg/>telefon
                    <BsCheckLg/>biurko
                    <BsCheckLg/>suszarka do włosów
                    <BsCheckLg/>balkon
                </p>
            </div>
            Cena za pokój: {price} zł
            <p>
                Liczba pokój
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </p> 
        </div>
    )
}
 
export default RoomWindow;