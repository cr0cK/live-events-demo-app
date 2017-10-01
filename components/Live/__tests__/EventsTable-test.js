// @flow

import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import EventsTable from '../EventsTable';

Enzyme.configure({ adapter: new Adapter() });


describe('EventsTable component', () => {
  const events = [{
    date: '2017-01-01',
    email: 'toto1@aol.com',
    ip: '123.123.123.123',
    url: 'http://toto1.aol.com',
    userAgent: 'chrome',
    userName: 'toto1',
  }, {
    date: '2017-01-01',
    email: 'toto2@aol.com',
    ip: '123.123.123.124',
    url: 'http://toto2.aol.com',
    userAgent: 'chrome',
    userName: 'toto2',
  }];

  it('should render a Table', () => {
    const wrapper = shallow(
      <EventsTable
        events={events}
      />,
    );

    expect(wrapper.find('Table').length).toEqual(1);
  });

  it('should render two rows', () => {
    const wrapper = mount(
      <EventsTable
        events={events}
      />,
    );

    expect(wrapper.find('TableRow').length).toEqual(2);
  });

  it('should render 4 cells by row', () => {
    const wrapper = mount(
      <EventsTable
        events={events}
      />,
    );

    expect(wrapper
      .find('TableRow').first()
      .find('TableCell').length,
    ).toEqual(4);
  });
});
