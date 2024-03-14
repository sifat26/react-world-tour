import './Country.css'
const Country = ({cuuntry}) => {
    console.log(cuuntry);
    const {name,flags}=cuuntry;
    return (
        <div className='country'>
            <h3>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />

            
        </div>
    );
};

export default Country;