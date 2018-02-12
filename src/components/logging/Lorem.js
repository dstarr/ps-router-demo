import React from 'react';
import {withRouter} from "react-router-dom";

const Lorem = ({match}) => {

    return (
        <div>
            <h3>{match.params.eid}</h3>
            <p><strong>Requested Path:</strong> {match.path}</p>
            <p>
                Lorem ipsum dolor sit amet, sit dicit oblique blandit eu, vis impetus deserunt te. Mutat simul vivendum te qui, no aperiri principes mel. Nam unum accusam contentiones ex, tempor euismod ei est, at pri omnis vocent denique. Et lorem sadipscing quo, per doming argumentum complectitur ad.
            </p>
            <p>
                Veri torquatos usu cu, id mandamus convenire adolescens has. Mea nisl autem at, iuvaret euismod cum ut, quo porro dolorem no. Ei sea viderer suavitate tincidunt, minimum fabellas te usu, abhorreant consequuntur ea cum. Ne exerci democritum dissentias nam, te eos eloquentiam efficiantur.
            </p>
            <p><strong>Time Stamp:</strong> {Date.now()}</p>

        </div>
    );
};

export default withRouter(Lorem);