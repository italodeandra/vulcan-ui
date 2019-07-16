import React from 'react'
import classNames from '../../Utils/classNames';

const Footer = ({ children, ...props }) => (
    <tfoot className={classNames(`vui-DataTable-Row vui-DataTable-Footer`)} {...props}>
        {children}
    </tfoot>
)

export default Footer;
