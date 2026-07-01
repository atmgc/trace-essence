import Link from "next/link";

export default function TermsOfService() {
  return (
    <section className="bg-[#FDFCF8] min-h-screen py-16 md:py-24 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 lg:p-16 rounded shadow-sm border border-gray-100">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-serif text-[#1A1835] mb-4">
            Terms of Service
          </h1>
          <p className="text-[#B38D56] font-medium tracking-wider uppercase text-sm">
            Effective Date: June 29, 2026
          </p>
        </div>

        <hr className="border-t border-[#B38D56]/30 mb-10" />

        {/* Introduction */}
        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-[15px] md:text-base">
          <p className="mb-6">
            Welcome to Trace Essence (&quot;Trace Essence,&quot; &quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;). These Terms of Service
            (&quot;Terms&quot;) govern your access to and use of our website,
            services, products, digital content, events, and educational
            resources.
          </p>
          <p className="mb-10">
            By accessing our website, purchasing a service or product, booking
            an appointment, registering for an event, downloading resources, or
            participating in any Trace Essence offering, you acknowledge that
            you have read, understood, and agree to be legally bound by these
            Terms.
          </p>

          {/* 1. Services */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            1. Services
          </h2>
          <p className="mb-4">
            Trace Essence provides educational and personal development
            services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Identity Coaching</li>
            <li>Personal Development Coaching</li>
            <li>Channeled Readings</li>
            <li>Workshops</li>
            <li>Masterclasses</li>
            <li>Mentorship Programs</li>
            <li>Online Courses</li>
            <li>Live Events</li>
            <li>Speaking Engagements</li>
            <li>Digital Products</li>
            <li>Downloadable Resources</li>
            <li>Workbooks</li>
            <li>Educational Videos</li>
            <li>Memberships</li>
            <li>Any future services offered through Trace Essence</li>
          </ul>
          <p className="mb-10 text-sm italic text-gray-500">
            All services are intended for educational and informational
            purposes.
          </p>

          {/* 2. Eligibility */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            2. Eligibility
          </h2>
          <p className="mb-4">By using our services, you represent that:</p>
          <ul className="list-disc pl-6 mb-10 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>
              You are at least 18 years old or have permission from a parent or
              legal guardian.
            </li>
            <li>All information you provide is accurate and complete.</li>
            <li>You have the legal capacity to enter into this agreement.</li>
          </ul>

          {/* 3. Booking Services */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            3. Booking Services
          </h2>
          <p className="mb-4">
            Bookings are confirmed only after payment has been successfully
            processed unless otherwise stated. You are responsible for ensuring
            that:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Your contact information is correct.</li>
            <li>You attend your scheduled session or event.</li>
            <li>
              You have the required internet connection and equipment for
              virtual services.
            </li>
          </ul>
          <p className="mb-10 text-sm font-medium text-[#1A1835]">
            Failure to attend does not entitle you to a refund.
          </p>

          {/* 4. Payments */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            4. Payments
          </h2>
          <ul className="list-disc pl-6 mb-10 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>
              All prices are displayed in the applicable currency shown during
              checkout.
            </li>
            <li>We reserve the right to change prices at any time.</li>
            <li>
              Price changes will not affect bookings that have already been
              confirmed.
            </li>
            <li>
              Payments are securely processed through third-party payment
              providers.
            </li>
            <li>Trace Essence does not store your payment card information.</li>
          </ul>

          {/* 5. Refunds, Cancellations and Rescheduling */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            5. Refunds, Cancellations and Rescheduling
          </h2>
          <p className="mb-4">Unless a specific service states otherwise:</p>

          <p className="font-semibold text-[#1A1835] mt-6 mb-2">
            Coaching Sessions
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>
              Sessions may be rescheduled if at least 48 hours&apos; notice is
              provided.
            </li>
            <li>
              Appointments cancelled with less than 48 hours&apos; notice or
              missed without notice may be forfeited.
            </li>
          </ul>

          <p className="font-semibold text-[#1A1835] mt-6 mb-2">
            Digital Products
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>
              Due to their immediate accessibility, all digital product sales
              are final.
            </li>
          </ul>

          <p className="font-semibold text-[#1A1835] mt-6 mb-2">
            Masterclasses, Workshops and Live Events
          </p>
          <ul className="list-disc pl-6 mb-10 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>All registrations are final.</li>
            <li>
              If Trace Essence must cancel or postpone an event, participants
              may be offered a transfer to another date, credit toward another
              service, or a refund where appropriate.
            </li>
          </ul>

          {/* 6. Intellectual Property */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            6. Intellectual Property
          </h2>
          <p className="mb-4">
            Everything created by Trace Essence remains the exclusive
            intellectual property of Trace Essence. This includes, but is not
            limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Logos and Branding</li>
            <li>Videos, Presentations, and Slides</li>
            <li>Masterclass materials and Coaching frameworks</li>
            <li>Workbooks, Worksheets, PDFs, and Downloadable resources</li>
            <li>Audio recordings and Written content</li>
            <li>Graphics and Website content</li>
            <li>Social media content</li>
            <li>Training and Course materials</li>
            <li>Educational methodologies</li>
          </ul>
          <p className="mb-10 text-sm font-medium text-[#1A1835]">
            Purchasing access does not transfer ownership. You receive a
            limited, revocable, nontransferable license for your own personal
            use only.
          </p>

          {/* 7. Prohibited Uses */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            7. Prohibited Uses
          </h2>
          <p className="mb-4">Without prior written permission, you may not:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Copy our materials.</li>
            <li>Record coaching sessions or masterclasses.</li>
            <li>
              Screen record any presentations or photograph presentation slides.
            </li>
            <li>Share Zoom links or login credentials.</li>
            <li>
              Upload our materials online, sell them, or republish our content.
            </li>
            <li>Train artificial intelligence models using our content.</li>
            <li>Claim our work as your own.</li>
            <li>Remove copyright notices.</li>
            <li>Use our trademarks or branding without permission.</li>
          </ul>
          <p className="mb-10 text-sm font-medium text-[#1A1835]">
            Any unauthorized use may result in immediate removal from services
            without refund and may lead to legal action.
          </p>

          {/* 8. Virtual Events and Zoom Participation */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            8. Virtual Events and Zoom Participation
          </h2>
          <p className="mb-4">
            Participants are expected to conduct themselves respectfully. We
            reserve the right to remove participants who:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Disrupt the event or harass others.</li>
            <li>Engage in abusive behavior or share offensive content.</li>
            <li>Record the event without permission.</li>
            <li>Share confidential participant information.</li>
          </ul>
          <p className="mb-10 text-sm font-medium text-[#1A1835]">
            Removal may occur without refund.
          </p>

          {/* 9. Confidentiality */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            9. Confidentiality
          </h2>
          <p className="mb-4">
            We respect your privacy. Information voluntarily shared during
            coaching sessions will be treated respectfully.
          </p>
          <p className="mb-10">
            However, confidentiality cannot be guaranteed during group events or
            masterclasses where other participants are present. Participants are
            expected to respect one another&apos;s privacy and refrain from
            sharing personal information disclosed during group sessions.
          </p>

          {/* 10. Participant Responsibility */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            10. Participant Responsibility
          </h2>
          <p className="mb-4">You acknowledge that:</p>
          <ul className="list-disc pl-6 mb-10 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>You are responsible for your own decisions.</li>
            <li>
              You remain responsible for how you apply any information provided.
            </li>
            <li>Personal growth requires individual effort.</li>
            <li>Results vary from person to person.</li>
          </ul>

          {/* 11. No Guarantees */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            11. No Guarantees
          </h2>
          <p className="mb-4">
            While we are committed to providing high-quality educational
            services, Trace Essence does not guarantee:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>
              Specific personal outcomes, financial results, or career
              advancement.
            </li>
            <li>Relationship outcomes or spiritual experiences.</li>
            <li>
              Business success or emotional healing within a specific timeframe.
            </li>
          </ul>
          <p className="mb-10">
            Testimonials reflect individual experiences and should not be
            interpreted as guarantees.
          </p>

          {/* 12. Disclaimer */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            12. Disclaimer
          </h2>
          <p className="mb-10">
            Trace Essence provides coaching, education, and personal development
            services. Our services do not replace professional advice from
            licensed medical, psychological, psychiatric, legal, accounting, or
            financial professionals. If you require professional healthcare or
            mental health treatment, you should consult an appropriately
            licensed provider.
          </p>

          {/* 13. Limitation of Liability */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            13. Limitation of Liability
          </h2>
          <p className="mb-4">
            To the fullest extent permitted by law, Trace Essence shall not be
            liable for any direct, indirect, incidental, consequential, special,
            exemplary, or punitive damages arising from:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>
              Use of our website, coaching sessions, channeled readings,
              masterclasses, digital products, or workshops.
            </li>
            <li>
              Technical interruptions, third-party platforms, or delayed access.
            </li>
            <li>Participant decisions made after receiving our services.</li>
          </ul>
          <p className="mb-10 font-medium text-[#1A1835]">
            Your use of our services is entirely at your own risk.
          </p>

          {/* 14. Third Party Services */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            14. Third Party Services
          </h2>
          <p className="mb-4">
            Our website and services may integrate with third-party providers
            including payment processors, scheduling platforms, video
            conferencing platforms, email marketing providers, and other
            software.
          </p>
          <p className="mb-10">
            Trace Essence is not responsible for the policies, availability, or
            actions of these third-party providers. Users are encouraged to
            review the terms and privacy policies of those providers.
          </p>

          {/* 15. Website Use */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            15. Website Use
          </h2>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 mb-10 space-y-1 text-gray-600 marker:text-[#B38D56]">
            <li>Attempt unauthorized access to our systems.</li>
            <li>
              Introduce malicious software or interfere with website
              functionality.
            </li>
            <li>Use automated tools to scrape website content.</li>
            <li>Misrepresent your identity.</li>
          </ul>

          {/* 16. Privacy */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            16. Privacy
          </h2>
          <p className="mb-10">
            Your use of our website and services is also governed by our Privacy
            Policy.
          </p>

          {/* 17. Changes to These Terms */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            17. Changes to These Terms
          </h2>
          <p className="mb-4">
            We reserve the right to update these Terms at any time. Changes
            become effective immediately upon publication on our website.
          </p>
          <p className="mb-10">
            Continued use of our website or services after updates constitutes
            acceptance of the revised Terms.
          </p>

          {/* 18. Governing Law */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            18. Governing Law
          </h2>
          <p className="mb-10">
            These Terms shall be governed by and interpreted in accordance with
            the laws of the State of Texas, United States, without regard to its
            conflict of law principles. Any legal disputes arising under these
            Terms shall be resolved in the appropriate courts located within
            Texas, unless otherwise required by applicable law.
          </p>

          {/* 19. Severability */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            19. Severability
          </h2>
          <p className="mb-10">
            If any provision of these Terms is determined to be invalid or
            unenforceable, the remaining provisions shall remain in full force
            and effect.
          </p>

          {/* 20. Contact Us */}
          <h2 className="text-xl md:text-2xl font-serif text-[#1A1835] mt-12 mb-4">
            20. Contact Us
          </h2>
          <p className="mb-4">
            If you have questions about these Terms of Service or any Trace
            Essence services, please contact us through our website:
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
