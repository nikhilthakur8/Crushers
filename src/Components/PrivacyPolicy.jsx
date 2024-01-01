/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 min-h-dvh text-gray-200 p-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to Crushers (the "App"). We are committed to protecting the
        privacy of our users and the security of the information they provide.
      </p>

      <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>

      <p className="mb-4">
        Crushers may collect personal information, including but not limited to
        names, contact information, and other relevant details when users
        interact with our app.
      </p>

      <h2 className="text-2xl font-bold mb-2">
        2. How We Use Your Information
      </h2>

      <p className="mb-4">
        We use the collected information to provide and improve our services,
        communicate with users, and ensure the security of our app.
      </p>

      <h2 className="text-2xl font-bold mb-2">3. Sharing Your Information</h2>

      <p className="mb-4">
        We do not sell, trade, or otherwise transfer your personal information
        to third parties. However, we may share information with trusted
        third-party service providers solely for the purpose of operating our
        app.
      </p>

      <h2 className="text-2xl font-bold mb-2">4. Security</h2>

      <p className="mb-4">
        Crushers takes reasonable measures to protect user information. However,
        no security measures are completely foolproof, and we cannot guarantee
        the absolute security of your data.
      </p>

      <h2 className="text-2xl font-bold mb-2">5. Changes to Privacy Policy</h2>

      <p className="mb-4">
        Crushers reserves the right to update this privacy policy at any time.
        Users will be notified of any changes, and continued use of the app
        constitutes acceptance of those changes.
      </p>

      <h2 className="text-2xl font-bold mb-2">6. Contact Us</h2>

      <p className="mb-4">
        If you have any questions or concerns about our privacy policy, please
        contact us at{" "}
        <Link to="mailto:cristianorolando696@gmail.com" className="text-blue-600 ">Crushers</Link>
      </p>

      <p>This privacy policy was last updated on 01-01-2024.</p>
    </div>
  );
};

export default PrivacyPolicy;
