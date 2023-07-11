import React, { useCallback, useEffect, useRef } from 'react';
import './styles/ideology.style.css';
import '../Header/containers/HeaderContainer';
import HeaderContainer from '../Header/containers/HeaderContainer';
import kanye from '../../assets/images/IDEOLOGY/kanye.png';
type Props = {};
const Ideology = (props: Props) => {
  return (
    <div className='ideology'>
      <HeaderContainer />

      <div className='ideology-body'>
        <img className='ideology-body-kanye' src={kanye}></img>

        <div className='quote-eng'>
          Nobody can tell me where I can and can't go.
        </div>
        <div className='quote-kor'>
          아무도 내가 갈 수 있는 곳과 갈 수 없는 곳을 말해줄 수 없다.
        </div>
        <div className='quote-eng'>
          Peolpe always tell you, 'Be humble. Be humble.'
        </div>
        <div className='quote-kor'>
          사람들은 항상 '겸손하세요. 겸손하세요'라고 말합니다.
        </div>
        <div className='quote-eng'>
          <p>When was the last time somone told you to be amazing?</p>
          <p>'Be great! Be great! Be awesome! Be awesome!</p>
        </div>
        <div className='quote-kor'>
          <p>마지막으로 누군가가 당신에게 훌륭하다고 말한 것이 언제였습니까?</p>
          <p> "훌륭합니다! 훌륭합니다! 멋져요! 멋져요!"</p>
        </div>
        <div className='quote-eng'>- Kanye West</div>
      </div>
    </div>
  );
};

export default Ideology;
