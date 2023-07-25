import React from 'react';
import moment from 'moment';
import "moment-timezone"
const HeaderTop = () => {

    return (
        <div className='flex justify-between'>
            <div>
        {
        
        moment().tz("bn-bd").format('LLL')

        }
            </div>
        </div>
    );
};

export default HeaderTop;