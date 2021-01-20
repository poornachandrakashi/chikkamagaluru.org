import proptypes from 'prop-types';

const Btn = ({text, color}) => {
    return <button style={ { backgroundColor:color}}>{text}</button>
}



export default Btn
