import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'

function FooterSocials({className}) {
    return (
        <ul className={classNames('flex space-x-4', className)}>
            <li>
                <Link href="https://www.linkedin.com/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
            </li>
            <li>
                <Link href="https://github.com/">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
            </li>
        </ul>
    );
}

export default FooterSocials;
