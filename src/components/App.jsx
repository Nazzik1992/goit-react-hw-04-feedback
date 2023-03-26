import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const btnFeedback = ['good', 'neutral', 'bad'];
  
  
  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + bad + neutral)) * 100);
  }


    return (
    <div>
     <Section title="Please leave feedback">
          <FeedbackOptions
            options={btnFeedback}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {countTotalFeedback() === 0 ? (
          <Notification />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
    
    </div>
  )
  }
