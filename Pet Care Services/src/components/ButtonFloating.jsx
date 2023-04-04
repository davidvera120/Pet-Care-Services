import * as React from 'react';
import { BotonFlotante } from '../styles/StylesGlobal';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function FloatingActionButtons() {

    
    return (
        <BotonFlotante>
            <Link to={'/'}>
                <WhatsAppIcon/>
            </Link>
        </BotonFlotante>
    );
}
