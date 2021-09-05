import { useState } from 'react';
import Statistics from './components/Statistic/Statistic.jsx';
import Section from './components/Section/Section.jsx';
import FeedbackOptions from './components/FeedBackOptions/FeedBackOptions.jsx';
import Notification from './components/Notification/Notification.jsx';
import s from './App.module.css';
export default function Component() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const toSetState = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good * 100) / countTotalFeedback());
  };

  let total = countTotalFeedback();

  return (
    <section className={s.section}>
      <Section title="Please leave feeaback">
        <FeedbackOptions onLeaveFeedback={toSetState} />
      </Section>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </section>
  );
}
