import React from 'react';
import Api from './Api';
import Intro from './Intro.md';
import cn from 'classnames';
import { render } from 'react-dom';

import localizer from 'react-big-calendar/lib/localizers/globalize';
import globalize from 'globalize';

localizer(globalize);

import 'react-big-calendar/lib/less/styles.less';
import './styles.less';
import './prism.less';
import Basic from './demos/basic';
import Selectable from './demos/selectable';
import Cultures from './demos/cultures';
import Popup from './demos/popup';
import Rendering from './demos/rendering';
import CustomView from './demos/customView';
import Timeslots from './demos/timeslots';
import Dnd from './demos/dnd';

let demoRoot = 'https://github.com/onursimsek94/react-big-calendar/tree/master/examples/demos'

const Example = React.createClass({
  getInitialState(){
    return {
      selected: 'basic',
    };
  },

  render() {
    let selected = this.state.selected;
    let Current = {
      basic: Basic,
      selectable: Selectable,
      cultures: Cultures,
      popup: Popup,
      rendering: Rendering,
      customView: CustomView,
      timeslots: Timeslots,
      dnd: Dnd,
    }[selected];

    return (
      <div className='app'>
      <div className="jumbotron">
        <div className="container">
          <h1>Big Calendar <i className='fa fa-calendar'/></h1>
          <p>such enterprise, very business.</p>
            <p>Forked from&nbsp;
              <a target='_blank' href="https://github.com/intljusticemission/react-big-calendar">
                intljusticemission/react-big-calendar
              </a>
          </p>
          <p>
            <a href="#intro">
              <i className='fa fa-play'/> Getting started
            </a>
            {' | '}
            <a href="#api">
              <i className='fa fa-book'/> API documentation
            </a>
            {' | '}
            <a target='_blank' href="https://github.com/onursimsek94/react-big-calendar">
              <i className='fa fa-github'/> github
            </a>
          </p>
        </div>
      </div>
        <div className='examples'>
          <header className="contain">
            <ul className='nav nav-pills'>
              <li className={cn({active: selected === 'basic' })}>
                <a href='#' onClick={this.select.bind(null, 'basic')}>Basic</a>
              </li>
              <li className={cn({active: selected === 'selectable' })}>
                <a href='#' onClick={this.select.bind(null, 'selectable')}>Selectable</a>
              </li>
              <li className={cn({active: selected === 'cultures' })}>
                <a href='#' onClick={this.select.bind(null, 'cultures')}>I18n and Locales</a>
              </li>
              <li className={cn({active: selected === 'popup' })}>
                <a href='#' onClick={this.select.bind(null, 'popup')}>Popup</a>
              </li>
              <li className={cn({active: selected === 'timeslots' })}>
                <a href='#' onClick={this.select.bind(null, 'timeslots')}>Timeslots</a>
              </li>
              <li className={cn({active: selected === 'rendering' })}>
                <a href='#' onClick={this.select.bind(null, 'rendering')}>Custom rendering</a>
              </li>
              <li className={cn({active: selected === 'dnd' })}>
                <a href='#' onClick={this.select.bind(null, 'dnd')}>Drag and Drop</a>
              </li>
            </ul>
          </header>
          <div className='example'>
            <div className='view-source'>
              <a target='_blank' href={demoRoot + '/' + selected + '.js' }>
                <strong><i className='fa fa-code'/>{' View example source code'}</strong>
              </a>
            </div>
            <Current className='demo' />
          </div>
        </div>
        <div className='docs'>
          <Intro className='contain section'/>
          <Api className='contain section' />
        </div>
      </div>
    );
  },

  select(selected, e){
    e.preventDefault();
    this.setState({ selected })
  }
});

render(<Example/>, document.getElementById('root'));
