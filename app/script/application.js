import React from 'react';
import ReactDOM from 'react-dom';

import 'application.scss';

import Dashboard from 'dashboard';

import refresher from 'services/refresher';

import Cell from 'components/Cell';
import Empty from 'components/Empty';
import Image from 'components/Image';
import Clock from 'components/Clock';
import CodeClimate from 'components/CodeClimate';
import ProductiveTime from 'components/ProductiveTime';
import Resolution from 'components/Resolution';

import logo from 'images/logo.svg';

if (!DEV) {
  console.log('Registred autorefresh!');
  refresher(10000 /* ms */);
}

ReactDOM.render(
  (
    <Dashboard columns={4} rows={3}>
      <Cell>
        <Image src={logo} />
      </Cell>
      <Cell>
        <Clock displayName="Zagreb" timezone="Europe/Zagreb" />
      </Cell>
      <Cell>
        <Clock timezone="America/Havana" displayName="Cayman Islands" />
      </Cell>
      <Cell rowSpan={2}>
        <CodeClimate />
      </Cell>

      <Cell>
        <Clock timezone="America/New_York" displayName="New York" />
      </Cell>
      <Cell rowSpan={2}>
        <CodeClimate />
      </Cell>
      <Cell>
        <Resolution />
      </Cell>

      <Cell>
        <Clock timezone="America/Los_Angeles" displayName="Los Angeles" />
      </Cell>
      <Cell colSpan={2}>
        <ProductiveTime />
      </Cell>
    </Dashboard>
  ), document.querySelector('.js-app')
);
