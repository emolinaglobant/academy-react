import { useSelector , useDispatch} from 'react-redux';
import {stateLogin , chooseAvatar} from '../../Reducer/loginReducer';

import './Profile.css';

const Profile = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.loginReducer.avatar);

    const getAvatar = (id) => dispatch(chooseAvatar(id));

    return (
        <article className="modalAvatar">
            <h2>select your avatar</h2>
            <section className="containerAvatar">
            {state.map((avatar) => {
                return <figure key={avatar.id} className="avatar" onClick={() => getAvatar(avatar.id)}>
                    <img src={avatar.img} alt="avatar"></img>
                </figure>
            })}
            </section>
            <button className="closeSesion" onClick={() => dispatch(stateLogin(false))}>sing out</button>
        </article>
    );
};

export default Profile;