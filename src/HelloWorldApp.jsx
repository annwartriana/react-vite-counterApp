
import PropTypes from 'prop-types';

export const HelloWorldApp = ({ title ,subTitle }) => {
  return (
    <>
      <h1>{ title }</h1>
      <p> { subTitle }</p>
    </>
  );
};

HelloWorldApp.propTypes = {
  title:PropTypes.string.isRequired,
  subTitle:PropTypes.number.isRequired,
}
