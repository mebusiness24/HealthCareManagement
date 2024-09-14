import React, { useState } from 'react';

const Verficationpage = () => {
  // State to manage whether the OTP input section should be shown
  const [isOTPSent, setIsOTPSent] = useState(false);

  // Function to handle sending OTP
  const sendOTP = () => {
    alert('OTP has been sent to your mobile number.');
    setIsOTPSent(true); // Show the OTP section
  };

  // Function to handle resending OTP
  const resendOTP = () => {
    alert('A new OTP has been sent to your mobile number.');
  };

  return (
    <div>
      <div className="verification-container">
        <h2>Phone Verification</h2>
        <form action="#">
          <input
            type="text"
            placeholder="Enter Mobile Number"
            maxLength="10"
            required
          />
          <button type="button" onClick={sendOTP}>
            Send OTP
          </button>

          {/* OTP Section */}
          {isOTPSent && (
            <div className="otp-section">
              <input
                type="text"
                placeholder="Enter OTP"
                maxLength="6"
                required
              />
              <button type="submit">Verify</button>
            </div>
          )}
        </form>
        <p>
          Didn't receive the code?{' '}
          <a href="#" onClick={resendOTP}>
            Resend OTP
          </a>
        </p>
      </div>
    </div>
  );
};

export default Verficationpage;
