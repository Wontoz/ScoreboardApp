import React from 'react';
import { PageHeader} from 'antd';

const body = (
    <PageHeader
        className = "scoreboard-header"
        title="Scoreboard"
    />
);

const Header = () => {
    return (
        <div>
            {body}
        </div>
    )
}

export default Header;