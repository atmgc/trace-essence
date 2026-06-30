import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <section className="bg-[#FDFCF8] min-h-screen py-16 md:py-24 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 lg:p-16 rounded shadow-sm border border-gray-100">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-serif text-[#1A1835] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#B38D56] font-medium tracking-wider uppercase text-sm">
            Effective Date: June 29, 2026
          </p>
        </div>

        <hr className="border-t border-[#B38D56]/30 mb-10" />

        {/* Introduction */}
        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-[15px] md:text-base">
          <p className="mb-6">
            Trace Essence ("Trace Essence," "we," "our," or "us") respects your
            privacy and is committed to protecting your personal information.
          </p>
          <p className="mb-6">
            This Privacy Policy explains how we collect, use, disclose, store,
            and protect your information when you visit our website, purchase
            our products or services, register for events, communicate with us,
            or otherwise interact with Trace Essence.
          </p>
          <p className="mb-10 font-medium text-[#1A1835]">
            By using our website or services, you agree to the practices
            described in this Privacy Policy.
          </p>

          {/* 1. Information We Collect */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to
            us, including but not limited to:
          </p>

          <p className="font-semibold text-[#1A1835] mt-6 mb-2">
            Contact Information
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address (if applicable)</li>
          </ul>

          <p className="font-semibold text-[#1A1835] mt-6 mb-2">
            Booking Information
          </p>
          <p className="mb-4 text-gray-600">
            When booking coaching sessions, readings, workshops, or
            masterclasses, we may collect information necessary to provide the
            requested service.
          </p>

          <p className="font-semibold text-[#1A1835] mt-6 mb-2">
            Payment Information
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>
              Payments are processed through secure third-party payment
              providers.
            </li>
            <li>
              Trace Essence does not store or have access to your full credit
              card or debit card information.
            </li>
          </ul>

          <p className="font-semibold text-[#1A1835] mt-6 mb-2">
            Account Information
          </p>
          <p className="mb-2 text-gray-600">
            If you create an account on our website, we may collect:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Username and login credentials</li>
            <li>Purchase history</li>
            <li>Booking history</li>
          </ul>

          <p className="font-semibold text-[#1A1835] mt-6 mb-2">
            Communications
          </p>
          <p className="mb-2 text-gray-600">
            When you contact us, we may collect:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Emails and contact form submissions</li>
            <li>Customer support messages</li>
            <li>Feedback and survey responses</li>
          </ul>

          <p className="font-semibold text-[#1A1835] mt-6 mb-2">
            Technical Information
          </p>
          <p className="mb-2 text-gray-600">
            When visiting our website, we may automatically collect:
          </p>
          <ul className="list-disc pl-6 mb-10 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>IP address, browser type, device type, and operating system</li>
            <li>Referring website, pages visited, and time spent on pages</li>
            <li>General location information</li>
            <li>Cookies and similar technologies</li>
          </ul>

          {/* 2. How We Use Your Information */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">We may use your information to:</p>
          <ul className="list-disc pl-6 mb-10 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Provide our services and process bookings</li>
            <li>Deliver digital products and send event access information</li>
            <li>Process payments and respond to inquiries</li>
            <li>Improve our website and customer experience</li>
            <li>Personalize your experience</li>
            <li>
              Send newsletters and marketing communications (only where
              permitted)
            </li>
            <li>Notify you about updates</li>
            <li>Maintain website security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          {/* 3. Cookies and Tracking Technologies */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="mb-4">
            Our website may use cookies and similar technologies to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Improve website functionality</li>
            <li>Remember user preferences</li>
            <li>Analyze website traffic</li>
            <li>Measure marketing effectiveness</li>
            <li>Enhance user experience</li>
          </ul>
          <p className="mb-10 text-sm font-medium text-[#1A1835]">
            You may disable cookies through your browser settings, although
            doing so may affect website functionality.
          </p>

          {/* 4. Marketing Communications */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            4. Marketing Communications
          </h2>
          <p className="mb-4">
            If you subscribe to our newsletter or opt into marketing
            communications, we may send updates regarding:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>New services, events, workshops, and masterclasses</li>
            <li>Educational resources and promotions</li>
            <li>Company announcements</li>
          </ul>
          <p className="mb-10">
            You may unsubscribe at any time by clicking the unsubscribe link
            included in our emails or by contacting us through our website.
          </p>

          {/* 5. Sharing Your Information */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            5. Sharing Your Information
          </h2>
          <p className="mb-4 font-medium text-[#1A1835]">
            Trace Essence does not sell, rent, or trade your personal
            information.
          </p>
          <p className="mb-4">
            We may share your information only when necessary with trusted
            third-party providers who help us operate our business, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Payment processors and booking platforms</li>
            <li>Website hosting and email marketing providers</li>
            <li>Video conferencing and customer support tools</li>
            <li>Cloud storage and analytics providers</li>
          </ul>
          <p className="mb-10">
            These providers receive only the information necessary to perform
            their services and are expected to safeguard your information.
          </p>

          {/* 6. Legal Disclosure */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            6. Legal Disclosure
          </h2>
          <p className="mb-4">
            We may disclose your information if required by law or if we believe
            disclosure is necessary to:
          </p>
          <ul className="list-disc pl-6 mb-10 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Comply with legal obligations</li>
            <li>Protect our rights and prevent fraud</li>
            <li>Protect users</li>
            <li>Respond to lawful government requests</li>
          </ul>

          {/* 7. Data Security */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            7. Data Security
          </h2>
          <p className="mb-4">
            We take reasonable administrative, technical, and organizational
            measures to protect your personal information from unauthorized
            access, disclosure, alteration, or destruction.
          </p>
          <p className="mb-10">
            However, no method of internet transmission or electronic storage is
            completely secure, and we cannot guarantee absolute security.
          </p>

          {/* 8. Data Retention */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            8. Data Retention
          </h2>
          <p className="mb-4">
            We retain personal information only as long as reasonably necessary
            to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Provide services and maintain business records</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce our agreements</li>
          </ul>
          <p className="mb-10">
            When information is no longer required, it will be securely deleted
            or anonymized where appropriate.
          </p>

          {/* 9. Your Rights */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            9. Your Rights
          </h2>
          <p className="mb-4">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Request access to your personal information</li>
            <li>
              Request correction of inaccurate information or deletion of your
              information
            </li>
            <li>Request restriction of processing</li>
            <li>Withdraw consent where applicable</li>
            <li>Request a copy of your personal data</li>
            <li>Object to certain processing activities</li>
          </ul>
          <p className="mb-10">
            To exercise these rights, please contact us through our website.
          </p>

          {/* 10. Children's Privacy */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            10. Children's Privacy
          </h2>
          <p className="mb-4">
            Trace Essence services are intended for individuals aged 18 and
            older. We do not knowingly collect personal information from
            children under the age of 13.
          </p>
          <p className="mb-10">
            If we become aware that personal information from a child has been
            collected without appropriate consent, we will take reasonable steps
            to delete it.
          </p>

          {/* 11. Third Party Websites */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            11. Third Party Websites
          </h2>
          <p className="mb-4">
            Our website may contain links to third-party websites or services.
            Trace Essence is not responsible for the privacy practices or
            content of third-party websites.
          </p>
          <p className="mb-10">
            We encourage users to review the privacy policies of any third-party
            websites they visit.
          </p>

          {/* 12. Third Party Services */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            12. Third Party Services
          </h2>
          <p className="mb-4">
            We may use trusted third-party service providers to operate portions
            of our business, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Payment processors</li>
            <li>Scheduling and booking platforms</li>
            <li>Video conferencing platforms</li>
            <li>Email marketing services</li>
            <li>Website hosting and analytics providers</li>
            <li>Customer relationship management systems</li>
          </ul>
          <p className="mb-10">
            Each provider maintains its own privacy practices, and your use of
            those services may also be subject to their respective privacy
            policies.
          </p>

          {/* 13. International Users */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            13. International Users
          </h2>
          <p className="mb-4">
            If you access our website from outside the United States, your
            information may be transferred to, processed, and stored in the
            United States or other countries where our service providers
            operate.
          </p>
          <p className="mb-10">
            By using our website, you consent to these transfers where permitted
            by applicable law.
          </p>

          {/* 14. California Privacy Rights */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            14. California Privacy Rights
          </h2>
          <p className="mb-4">
            If you are a California resident, you may have additional rights
            regarding your personal information under applicable California
            privacy laws.
          </p>
          <p className="mb-10">
            These may include the right to know, correct, delete, or limit
            certain uses of your personal information, subject to applicable
            exceptions. Requests may be submitted through our website.
          </p>

          {/* 15. Changes to This Privacy Policy */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            15. Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy periodically. The updated version
            will be posted on this page with a revised Effective Date.
          </p>
          <p className="mb-10">
            Continued use of our website or services after changes are posted
            constitutes acceptance of the revised Privacy Policy.
          </p>

          {/* 16. Contact Us */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            16. Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions regarding this Privacy Policy or how your
            personal information is handled, please contact us through our
            website:
          </p>
          <p className="mb-10">
            <strong>Website: </strong>
            <Link
              href="https://www.trace-essence.com"
              className="text-[#B38D56] hover:underline transition-all"
            >
              https://www.trace-essence.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
