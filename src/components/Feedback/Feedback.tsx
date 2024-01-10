import React, { ReactNode, useState } from 'react';
import styles from './styles.module.css';
import posthog from 'posthog-js'
export const Feedback = ({ metadata }: { metadata: any }) => {
  const [rating, setRating] = useState<1 | 2 | 3 | 4 | 5 | null>(null);
  const [notes, setNotes] = useState<string | null>(null);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [hoveredScore, setHoveredScore] = useState<Number | null>(null);
  const [textAreaLabel, setTextAreaLabel] = useState<ReactNode | null>(null);
  const [textAreaPlaceholder, setTextAreaPlaceholder] = useState<string>('This section is optional');
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);

  const submitDisabled = rating === null || (rating < 4 && (notes === null || notes === ''));

  const scores: (1 | 2 | 3 | 4 | 5)[] = [1, 2, 3, 4, 5];

  const handleSubmit = async () => {
    if (rating === null) {
      setErrorText('Please select a score.');
      return;
    }

    if (rating < 4 && notes === null) {
      setErrorText(
        "Because this doc wasn't perfect, please provide us with some feedback of where we can improve."
      );
      return;
    }

    const sendData = async () => {
      posthog.init('phc_Krs7r8xNYU3OeIItMy5lOoPcTnxJmrX5zYn5JMp2izy', {
        api_host: 'https://app.posthog.com',
        autocapture: false,
      })
      posthog.capture('Feedback', {sentiment: rating + '/5', page: window.location.pathname, text: notes});

      // if you like Plausible, then uncomment the following block (the packages are already added to package.json):
      /*

       const plausibleScript = document.createElement("script")
       plausibleScript.src = "https://plausible.io/js/script.manual.js"
       plausibleScript.setAttribute("data-domain", "danroscigno.github.io")
       plausibleScript.defer = true
       document.head.appendChild(plausibleScript)
 
       window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
       plausible('Feedback', {props: {sentiment: rating + '/5', page: window.location.pathname, text: notes}})

       */
 
    // If you like Google Analytics uncomment the following block:
    /*

       window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
       window.gtag("config", "G-NTGS7YWWQ1");
       window.gtag("event", "Feedback", { sentiment: rating + '/5', page: window.location.pathname, text: notes});
    */

    };

    sendData()
      .then(() => {
        setRating(null);
        setNotes(null);
        setIsSubmitSuccess(true);
      })
      .catch(e => {
        console.error(e);
      });

    return;
  };

  const handleScoreClick = (scoreItem: 1 | 2 | 3 | 4 | 5) => {
    if (scoreItem === rating) {
      setRating(null);
      setErrorText(null);
      setHoveredScore(null);
      return;
    }
    setErrorText(null);
    setRating(scoreItem);
    if (scoreItem < 4) {
      setTextAreaLabel(
        <>
          <p>What can we do to improve it? Please be as detailed as you like.</p>
          <p>Real human beings read every single review.</p>
        </>
      );
      setTextAreaPlaceholder('This section is required... how can we do better?');
    }
    if (scoreItem >= 4) {
      setTextAreaLabel(
        <>
          <p>Any general feedback you'd like to add?</p>
          <p>We'll take it all... tell us how well we're doing or where we can improve.</p>
          <p>Real human beings read every single review.</p>
        </>
      );
      setTextAreaPlaceholder('This section is optional');
    }
  };

  // Do not show on Intro page
  if (metadata.source === '@site/docs/index.mdx') {
    return null;
  }

  return (
    <div className={styles.feedback} id={'feedback'}>
      <div className={styles.form}>
        <div className={styles.topSection}>
          <h3>What did you think of this doc?</h3>
          {isSubmitSuccess ? (
            <div className={styles.successMessage}>
              <p>Thanks for your feedback.</p>
              {rating >= 3 ? (
                <p>Feel free to review as many docs pages as you like!</p>
              ) : (
                <p>
                  If you need help with the issue that led to this low score, you can create a{' '}
                  <a
                    href="https://github.com/starrocks/starrocks/issues/new/choose"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub issue
                  </a>{' '}
                  if you think this is a bug, or check out our{' '}
                  <a href="https://join.slack.com/t/starrocks/shared_invite/zt-z5zxqr0k-U5lrTVlgypRIV8RbnCIAzg" target="_blank" rel="noopener noreferrer">
                    Slack workplace
                  </a>
                  , where the community and devs are ready to engage.
                </p>
              )}
            </div>
          ) : (
            <div className={styles.numberRow}>
              {scores.map((star, index) => (
                <div
                  className={styles.star}
                  key={star}
                  onClick={() => handleScoreClick(star)}
                  onMouseEnter={() => setHoveredScore(index + 1)}
                  onMouseLeave={() => setHoveredScore(-1)}
                >
                  {rating >= star ? (
                    <svg width="36" height="36" viewBox="0 0 24 24">
                      <path
                        fill="#ffc107"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      />
                    </svg>
                  ) : (
                    <svg width="36" height="36" viewBox="0 0 24 24">
                      <path
                        fill={hoveredScore > index ? '#ffc107' : '#B1BCC7'}
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div style={rating ? { display: 'block' } : { display: 'none' }}>
          <div className={styles.textAreaLabel}>{textAreaLabel}</div>
          <textarea
            className={styles.textarea}
            value={notes ?? ''}
            placeholder={textAreaPlaceholder ?? ''}
            rows={5}
            onChange={e => setNotes(e.target.value)}
          />
          <div className={styles.errorAndButton}>
            <p className={styles.errorText}>{errorText}</p>
            <div className={styles.buttonContainer}>
              <button className={submitDisabled ? styles.buttonDisabled : ''} onClick={() => handleSubmit()}>
                Send your review!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
