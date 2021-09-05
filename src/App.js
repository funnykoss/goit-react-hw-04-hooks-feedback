import React, { Component } from 'react';
import Statistics from './components/Statistic/Statistic.jsx';
import Section from './components/Section/Section.jsx';
import FeedbackOptions from './components/FeedBackOptions/FeedBackOptions.jsx';
import Notification from './components/Notification/Notification.jsx';
import s from './App.module.css';
export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  toSetState = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    let total = this.countTotalFeedback();

    return (
      <section className={s.section}>
        <Section title="Please leave feeaback">
          <FeedbackOptions onLeaveFeedback={this.toSetState} />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </section>
    );
  }
}
