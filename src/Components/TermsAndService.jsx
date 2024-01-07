/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const TermsOfService = () => {
  document.title = "Terms of Service - Crushers"
  return (
    <div className="bg-gray-900 text-gray-200 p-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <p className="mb-4">
        These Terms of Service ("Terms") govern your use of Crushers (the
        "App"). By accessing or using the App, you agree to comply with these
        Terms.
      </p>

      <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>

      <p className="mb-4">
        By using the App, you acknowledge and agree to these Terms. If you do
        not agree with these Terms, please refrain from using the App.
      </p>

      <h2 className="text-2xl font-bold mb-2">2. Use of the App</h2>

      <p className="mb-4">
        You agree to use the App for lawful purposes and in compliance with all
        applicable laws and regulations. You further agree not to engage in any
        activity that may interfere with the proper functioning of the App.
      </p>

      <h2 className="text-2xl font-bold mb-2">3. User Accounts</h2>

      <p className="mb-4">
        To access certain features of the App, you may be required to create a
        user account. You are responsible for maintaining the confidentiality of
        your account information and agree to notify us of any unauthorized use
        of your account.
      </p>

      <h2 className="text-2xl font-bold mb-2">4. Content</h2>

      <p className="mb-4">
        The App may allow users to submit, post, or share content. By doing so,
        you grant Crushers a worldwide, non-exclusive, royalty-free license to
        use, reproduce, modify, and distribute your content.
      </p>

      <h2 className="text-2xl font-bold mb-2">5. Termination</h2>

      <p className="mb-4">
        Crushers reserves the right to terminate or suspend your access to the
        App at any time, with or without cause. Upon termination, your rights to
        use the App will cease immediately.
      </p>

      <h2 className="text-2xl font-bold mb-2">6. Changes to Terms</h2>

      <p className="mb-4">
        Crushers may update these Terms at any time. It is your responsibility
        to review these Terms periodically. Your continued use of the App after
        changes constitutes acceptance of the modified Terms.
      </p>

      <h2 className="text-2xl font-bold mb-2">7. Contact Us</h2>

      <p className="mb-4">
        If you have any questions or concerns about these Terms, please contact
        us at{" "}
        <Link
          to="mailto:cristianorolando696@gmail.com"
          className="text-blue-600 "
        >
          Crushers
        </Link>
      </p>

      <p>These Terms were last updated on 01-01-2024.</p>
    </div>
  );
};

export default TermsOfService;
