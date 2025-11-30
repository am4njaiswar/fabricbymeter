import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="font-sans bg-white"> {/* Use the same font-sans as your site */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-4 text-center">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span>Privacy Policy</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-gray-900 text-center mb-12 tracking-widest">
          Privacy Policy
        </h1>

        {/* Body Text: Formatted with styled section headings */}
        {/* --- CHANGE: Removed space-y-6 --- */}
        <div className="text-gray-700 text-sm md:text-base leading-relaxed">

          {/* --- CHANGE: Removed pt-6, changed space-y-4 to space-y-3 --- */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Collection of Personally Identifiable Information and other
              Information
            </h2>
            <p>
              If you browse through this site without providing us with any
              personal information, we will gather and store some information
              about your visit, such as IP address, type of browser and
              operating system used, date and time you access our site, pages
              you visit, and if you linked to our website from another
              website, the address of that website. This information will not
              identify you personally and will not be linked back to you.
            </p>
            <p>
              There will be times, such as when you submit an auto lead request
              to a dealer or fill out our contact form, when we will need to
              obtain personally identifiable information from you or about you.
              Such personally identifiable information may include your name,
              address, e-mail address, telephone number and identification
              number.
            </p>
            <p>
              In general, you can browse the Website without telling us who you
              are or revealing any personal information about yourself. Once you
              give us your personal information, you are not anonymous to us.
              Where possible, we indicate which fields are required and which
              fields are optional. You always have the option to not provide
              information by choosing not to use a particular service or
              feature on the Website. We may automatically track certain
              information about you based upon your behaviour on our Website. We
              use this information to do internal research on our users'
              demographics, interests, and behaviour to better understand,
              protect and serve our users. This information is compiled and
              analysed on an aggregated basis. This information may include the
              URL that you just came from (whether this URL is on our Website
              or not), which URL you next go to (whether this URL is on our
              Website or not), your computer browser information, and your IP
              address.
            </p>
          </div>

          {/* --- CHANGE: changed space-y-4 to space-y-3 --- */}
          <div className="space-y-3 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Sharing of your Personal Information
            </h2>
            <p>
              Under no circumstances do we rent, trade or share the personally
              identifiable information that we have collected from you, with
              any other company for their marketing purposes, without your
              consent. We reserve the right to communicate Your Information to
              any third party that makes a legally-compliant request for its
              disclosure. However, we will not disclose your name, address and
              other information which identifies you personally to any third
              party without your consent. We reserve the right to collect
              general demographic and other anonymous information that does not
              personally identify you. This information is not associated with
              your personally identifiable information and cannot be linked to
              you personally.
            </p>
            <p>
              We use third-party service providers to serve advertisements on
              our behalf across the internet and sometimes on this website. They
              may collect anonymous information about your visits to our
              website, and your interaction with our products and services. They
              may also use information about your visits to this and other
              websites to target advertisements for goods and services. This
              anonymous information is collected through the use of a pixel
              tag, which is industry standard technology used by most major
              websites. No personally identifiable information is collected or
              used in this process. They do not know the name, phone number,
              address, email address, or any personally identifying
              information about the user.
            </p>
          </div>

          {/* --- CHANGE: changed space-y-4 to space-y-3 --- */}
          <div className="space-y-3 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Cookies
            </h2>
            <p>
              From time to time, we may place "cookies" on your personal
              computer. "Cookies" are small identifiers sent from a web server
              and stored on your computer's hard drive, that help us to
              recognise you if you visit our website again. Also, our site uses
              cookies to track how you found our site. To protect your privacy
              we do not use cookies to store or transmit any personal
              information about you on the Internet. You have the ability to
              accept or decline cookies. Most web browsers automatically accept
              cookies, but you can usually modify your browser setting to
              decline cookies if you prefer. If you choose to decline cookies
              certain features of the site may not function properly or at all
              as a result.
            </p>
          </div>

          {/* --- CHANGE: changed space-y-4 to space-y-3 --- */}
          <div className="space-y-3 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Links to Other Sites
            </h2>
            <p>
              Our Website links to other websites that may collect personally
              identifiable information about you. We are not responsible for
              the privacy practices or the content of those linked websites.
            </p>
          </div>

          {/* --- CHANGE: changed space-y-4 to space-y-3 --- */}
          <div className="space-y-3 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Security
            </h2>
            <p>
              We safeguard your privacy using known security standards and
              procedures and comply with applicable privacy laws. Our websites
              combine industry-approved physical, electronic and procedural
              safeguards to ensure that your information is well protected
              throughout its life cycle in our infrastructure.
            </p>
          </div>

          {/* --- CHANGE: changed space-y-4 to space-y-3 --- */}
          <div className="space-y-3 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Credit Check and Fraud Prevention
            </h2>
            <p>
              We use standard and authorised payment services and our Credit
              Check and Fraud Prevention policies are aligned to these
              companies. All disputes would be handled by Jaipur courts.
            </p>
          </div>

          {/* --- CHANGE: changed space-y-4 to space-y-3 --- */}
          <div className="space-y-3 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Opt out Policy
            </h2>
            <p>
              We provide all users with the opportunity to opt-out of receiving
              non-essential (promotional, marketing-related) communications
              from us on behalf of our partners, and from us in general, after
              setting up an account.
            </p>
            <p>
              If you no longer wish to receive any information from us please
              drop us an email at{" "}
              <a
                href="mailto:info@fabricbymeter.com"
                className="underline hover:text-black"
              >
                info@fabricbymeter.com
              </a>
            </p>
          </div>

          {/* --- CHANGE: changed space-y-4 to space-y-3 --- */}
          <div className="space-y-3 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Changes to Privacy Policy
            </h2>
            <p>
              If we decide to change our privacy policy, we will post those
              changes on this page so that you are always aware of what
              information we collect, how we use it, and under what
              circumstances we disclose it.
            </p>
          </div>
          
          {/* --- CHANGE: changed space-y-4 to space-y-3 --- */}
          <div className="space-y-3 pt-6">
            <p>
              If you still have any query about our privacy policy kindly drop
              us an email at{" "}
              <a
                href="mailto:info@fabricbymeter.com"
                className="underline hover:text-black"
              >
                info@fabricbymeter.com
              </a>
              , we will reply you within 1-2 working days.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}