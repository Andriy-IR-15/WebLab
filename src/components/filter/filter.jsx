import ApplyButton from './applyButton';
import Select from './select';
import './filter.css';


export default function Filter() {
    let companyCategories = ['IPhone', 'Pixel', 'Moto'];
    let priceCategories = ['1-4999 UAH', '5000-9999 UAH', '10000-99999 UAH'];

    return (
        <div className='filter'>
            <Select id="companyFilter" filterBy='Company' category={companyCategories}/>
            <Select id="priceFilter" filterBy='Price' category={priceCategories}/>
            <ApplyButton/>
        </div>
    );
}