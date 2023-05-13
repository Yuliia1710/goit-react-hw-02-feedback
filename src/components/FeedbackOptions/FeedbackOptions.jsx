import { FeedbackBtn, Button } from './Feedbackoptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);

  return (
    <FeedbackBtn>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </FeedbackBtn>
  );
};

export default FeedbackOptions;
