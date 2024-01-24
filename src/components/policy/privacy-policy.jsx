import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

function privacypolicy() {
  return (
    <>
      <Breadcrumbs className="pt-7 xl:pt-8">
        <Link to={"/"}>Home</Link> &nbsp;
        <Link to={"/policies/privacy-policy"} className="text-blue-600">
          Privacy-Policy
        </Link>
      </Breadcrumbs>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="head text-center xl:mb-8 mb-3">Privacy policy</h1>
          <h3 className="font-bold text-center xl:mb-8 mb-3">
            PRIVACY STATEMENT
          </h3>
          <div className="flex justify-center text-slate-700 items-center flex-col ">
            {/* 1 */}
            <h4 className="xl:mb-8 mb-3 text-black xl:text-sm text-xs font-extrabold">
              SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
            </h4>
            <p className="xl:text-sm text-xs text-balance xl:w-1/2 w-4/5 xl:mb-8 mb-3">
              When you purchase something from our store, as part of the buying
              and selling process, we collect the personal information you give
              us such as your name, address, and email address. When you browse
              our store, we also automatically receive your computer’s internet
              protocol (IP) address in order to provide us with information that
              helps us learn about your browser and operating system. Email
              marketing (if applicable): With your permission, we may send you
              emails about our store, new products, and other updates.
            </p>
            {/* 2 */}
            <h4 className="xl:mb-8 mb-3 xl:text-sm text-black text-xs font-extrabold">
              SECTION 2 - CONSENT
            </h4>
            <p className="xl:text-sm text-xs iphoneXr:text-balance xl:w-2/4 w-4/5 xl:mb-8 mb-3">
              How do you get my consent? When you provide us with personal
              information to complete a transaction, verify your credit card,
              place an order, arrange for a delivery, or return a purchase, we
              imply that you consent to our collecting it and using it for that
              specific reason only. If we ask for your personal information for
              a secondary reason, like marketing, we will either ask you
              directly for your expressed consent or provide you with an
              opportunity to say no.
            </p>
            {/* 3 */}
            <h4 className="xl:mb-8 mb-3 text-black xl:text-sm text-xs font-extrabold">
              SECTION 3 - DISCLOSURE
            </h4>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5 xl:mb-8 mb-3">
              We may disclose your personal information if we are required by
              law to do so or if you violate our Terms of Service.
            </p>
            <h4 className="xl:mb-8 mb-3 xl:text-sm text-xs font-extrabold">
              SECTION 4 - SHOPIFY
            </h4>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5 xl:mb-8 mb-3">
              Our store is hosted on Shopify Inc. They provide us with an online
              e-commerce platform that allows us to sell our products and
              services to you. Your data is stored through Shopify’s data
              storage, databases, and the general Shopify application. They
              store your data on a secure server behind a firewall.
              <br /> <h5>Payment:</h5>
              <p className="text-balance  ">
                If you choose a direct payment gateway to complete your
                purchase, then Shopify stores your credit card data. It is
                encrypted through the Payment Card Industry Data Security
                Standard (PCI-DSS). Your purchase transaction data is stored
                only as long as is necessary to complete your purchase
                transaction. After that is complete, your purchase transaction
                information is deleted. All direct payment gateways adhere to
                the standards set by PCI-DSS as managed by the PCI Security
                Standards Council, which is a joint effort of brands like Visa,
                Mastercard, American Express, and Discover. PCI-DSS requirements
                help ensure the secure handling of credit card information by
                our store and its service providers. For more insight, you may
                also want to read Shopify’s Terms of Service
              </p>
              <Link
                to={"https://www.shopify.com/legal/terms"}
                className="text-blue-600"
                target="_blank"
              >
                (https://www.shopify.com/legal/terms)
              </Link>{" "}
              &nbsp;
              <h6>or Privacy Statement</h6>
              <Link
                to={"https://www.shopify.com/legal/privacy"}
                className="text-blue-600"
                target="_blank"
              >
                (https://www.shopify.com/legal/privacy).
              </Link>
            </p>
            <h4 className="xl:mb-8 mb-3  text-black xl:text-sm text-xs font-extrabold">
              SECTION 5 - THIRD-PARTY SERVICES
            </h4>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5 xl:mb-5 mb-3">
              In general, the third-party providers used by us will only
              collect, use, and disclose your information to the extent
              necessary to allow them to perform the services they provide to
              us.
            </p>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5 xl:mb-5 mb-3">
              However, certain third-party service providers, such as payment
              gateways and other payment transaction processors, have their own
              privacy policies with respect to the information we are required
              to provide to them for your purchase-related transactions.
            </p>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5 xl:mb-5 mb-3">
              For these providers, we recommend that you read their privacy
              policies so you can understand the manner in which your personal
              information will be handled by these providers.
            </p>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5  mb-3">
              In particular, remember that certain providers may be located in
              or have facilities that are located in a different jurisdiction
              than either you or us. So if you elect to proceed with a
              transaction that involves the services of a third-party service
              provider, then your information may become subject to the laws of
              the jurisdiction(s) in which that service provider or its
              facilities are located. As an example, if you are located in
              Canada and your transaction is processed by a payment gateway
              located in the United States, then your personal information used
              in completing that transaction may be subject to disclosure under
              United States legislation, including the Patriot Act. Once you
              leave our store’s website or are redirected to a third-party
              website or application, you are no longer governed by this Privacy
              Policy or our website’s Terms of Service.
            </p>{" "}
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5 xl:mb-5 mb-3">
              <span>Links</span> <br />
              When you click on links on our store, they may direct you away
              from our site. We are not responsible for the privacy practices of
              other sites and encourage you to read their privacy statements.
            </p>
            <h4 className="xl:mb-8 mb-3 text-black xl:text-sm text-xs font-extrabold">
              SECTION 6 - SECURITY
            </h4>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5  mb-3">
              To protect your personal information, we take reasonable
              precautions and follow industry best practices to make sure it is
              not inappropriately lost, misused, accessed, disclosed, altered,
              or destroyed.
            </p>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5 xl:mb-5  mb-3">
              If you provide us with your credit card information, the
              information is encrypted using secure socket layer technology
              (SSL) and stored with AES-256 encryption. Although no method of
              transmission over the Internet or electronic storage is 100%
              secure, we follow all PCI-DSS requirements and implement
              additional generally accepted industry standards.
            </p>
            <h4 className="xl:mb-8 mb-3 xl:text-sm text-xs font-extrabold">
              SECTION 7 - COOKIES
            </h4>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5   mb-3">
              Here is a list of cookies that we use. We’ve listed them here so
              that you can choose if you want to opt out of cookies or not.
            </p>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5   mb-3">
              _session_id, unique token, sessional, Allows Shopify to store
              information about your session (referrer, landing page, etc).
            </p>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5   mb-3">
              _shopify_visit, no data held, Persistent for 30 minutes from the
              last visit, Used by our website provider’s internal stats tracker
              to record the number of visits _shopify_uniq, no data held,
              expires midnight (relative to the visitor) of the next day, Counts
              the number of visits to a store by a single customer.
            </p>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5   mb-3">
              cart, a unique token, persistent for 2 weeks, Stores information
              about the contents of your cart.
            </p>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5   mb-3">
              _session_id, unique token, sessional, Allows Shopify to store
              information about your session (referrer, landing page, etc).
            </p>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5 xl:mb-5  mb-3">
              _secure_session_id, unique token, sessional storefront_digest,
              unique token, indefinite If the shop has a password, this is used
              to determine if the current visitor has access. PREF, persistent
              for a very short period, is Set by Google and tracks who visits
              the store and from where
            </p>
            <h4 className="xl:mb-8 mb-3 text-black xl:text-sm text-xs font-extrabold">
              SECTION 8 - AGE OF CONSENT
            </h4>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5 xl:mb-5  mb-3">
              By using this site, you represent that you are at least the age of
              majority in your state or province of residence, or that you are
              the age of majority in your state or province of residence and you
              have given us your consent to allow any of your minor dependents
              to use this site.
            </p>
            <h4 className="xl:mb-8 mb-3 text-black xl:text-sm text-xs font-extrabold">
              SECTION 9 - CHANGES TO THIS PRIVACY POLICY
            </h4>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5 xl:mb-4  mb-3">
              We reserve the right to modify this privacy policy at any time, so
              please review it frequently. Changes and clarifications will take
              effect immediately upon their posting on the website. If we make
              material changes to this policy, we will notify you here that it
              has been updated, so that you are aware of what information we
              collect, how we use it, and under what circumstances, if any, we
              use and/or disclose it.
            </p>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5 xl:mb-5  mb-3">
              We reserve the right to modify this privacy policy at any time, so
              please review it frequently. Changes and clarifications will take
              effect immediately upon their posting on the website. If we make
              material changes to this policy, we will notify you here that it
              has been updated, so that you are aware of what information we
              collect, how we use it, and under what circumstances, if any, we
              use and/or disclose it.
            </p>
            <h4 className="xl:mb-8 mb-3 text-black xl:text-sm text-xs font-extrabold">
              QUESTIONS AND CONTACT INFORMATION
            </h4>
            <p className="xl:text-sm text-xs  xl:w-2/4 w-4/5 xl:mb-4  mb-3">
              If you would like to: access, correct, amend, or delete any
              personal information we have about you, register a complaint, or
              simply want more information contact our Privacy Compliance
              Officer <br />
              [Re: Privacy Compliance Officer]
            </p>
            <h4 className="py-12 text-center">
              please contact us at{" "}
              <span className="font-semibold">
              Abc332@example.com
              </span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default privacypolicy;
