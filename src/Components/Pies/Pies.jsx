import {useState} from 'react';
import Pie from './Pie/Pie'

const Pies = () => {
    const [pies, setPies] = useState([]);

        // const pumpkinPie = {
        //     flavor: 'Pumpkin',
        //     size: 10,
        //     hotPie: false,
        //     vegan: false,
        //     baseOfPie: 'Pumpkin Puree',
        //     crust: 'Pastry Dough'
        // }

        const testDataPies = [
            {
                flavor: 'Pumpkin',
                baseOfPie: 'Pumpkin puree',
                crust: 'Pastry',
                vegan: true,
                size: 8,
                hotPie: false
            },
            {
                flavor: 'Apple',
                baseOfPie: 'Jam',
                crust: 'Graham cracker',
                vegan: true,
                size: 6,
                hotPie: true
            },
            {
                flavor: 'Chocolate',
                baseOfPie: 'Pudding',
                crust: 'Pastry',
                vegan: false,
                size: 8,
                hotPie: false
            }
        ]

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Flavor</th>
                        <th>Size</th>
                        <th>Hot Pie?</th>
                        <th>Vegan?</th>
                        <th>Base of Pie</th>
                        <th>Crust</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <NameOfComponent newNameInNewComponent={nameOfVar/FunctionInThisComponent} /> */}
                    <Pie pies={testDataPies} />
                </tbody>
            </table>
        </div>
    );
};

export default Pies;