import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectores from '../../reducers';

const comment = ({
    text
}) => (
    <div>
        <p> { text } </p>
    </div>
);

export default connect(
    (state, { id }) => ({
        ...selectores.getComment(state, id),
    }),
    undefined,
)(comment);