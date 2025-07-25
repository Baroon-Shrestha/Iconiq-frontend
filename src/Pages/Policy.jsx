import React from "react";

export default function Policy() {
  return (
    <div className="bg-white text-gray-800 py-12 px-4 sm:px-10 lg:px-32 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">
        Terms & Policies
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-600">
          Welcome to Iconiq. By accessing or using our services, you agree to
          comply with the following Terms and Policies. Please read them
          carefully.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          2. User Responsibilities
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>
            You must provide accurate information when creating an account or
            filling forms.
          </li>
          <li>
            Unauthorized access or use of the platform is strictly prohibited.
          </li>
          <li>
            Users must not distribute harmful, illegal, or offensive content.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">3. Data Privacy</h2>
        <p className="text-gray-600">
          Iconiq values your privacy. All user data is securely stored and will
          not be shared with third parties without consent. You may request
          deletion of your data at any time.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          4. Intellectual Property
        </h2>
        <p className="text-gray-600">
          All content, branding, and designs used on the Iconiq platform are the
          intellectual property of Iconiq and are protected by copyright laws.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">5. Payment & Refunds</h2>
        <p className="text-gray-600">
          All transactions made through Iconiq are final. Refunds are subject to
          specific service-level agreements and must be formally requested with
          justification.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">6. Modifications</h2>
        <p className="text-gray-600">
          Iconiq reserves the right to update these Terms and Policies at any
          time. Continued use of the platform after changes implies acceptance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">7. Contact</h2>
        <p className="text-gray-600">
          If you have any questions regarding our terms and policies, feel free
          to reach out to us at{" "}
          <a
            href="mailto:support@iconiq.com"
            className="text-blue-600 underline"
          >
            support@iconiq.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
