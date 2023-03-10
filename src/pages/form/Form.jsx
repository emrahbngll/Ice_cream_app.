import React, { useState } from 'react';

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  return (
    <form className="my-3 d-flex gap-5 justify-content-center align-items-center">
      <div className="d-flex gap-4">
        <input
          type="checkbox"
          id="kosullar"
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <div className="text-nowrap kosullar">
          <p
            style={{ opacity: isVisible ? '1' : '0' }}
            className="bg-light text-dark p-2 rounded shadow popup"
          >
            size gerçekten birsey teslim etmeyeceğiz
          </p>
          <label htmlFor="kosullar">"I agree to the Terms and Conditions"</label>
        </div>
      </div>
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        disabled={!isChecked}
        className="btn btn-warning"
        style={{ width: '150px' }}
      >
        Complete Order
      </button>
    </form>
  );
};

export default Form;