import Link from "next/link";

export default function ReturnExchangePage() {
  return (
    <div className="font-sans bg-white"> {/* Use the same font-sans as your site */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-4 text-center">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span>Return/Exchange/Cancellation Policy</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-gray-900 text-center mb-12 tracking-widest">
          Return/Exchange/Cancellation Policy
        </h1>

        {/* Body Text: Formatted to match Terms & Conditions structure */}
        <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
          
          <p>
            At The Fabric By Meter, each fabric undergoes rigorous quality checks to
            ensure accurate measurements, defect-free designs, and pristine
            condition. Please review our return and exchange policy:
          </p>

          <div className="space-y-4 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Returns or Exchange
            </h2>
            <p>
              The Fabric By Meter DOES NOT accept returns/ refunds/exchange of any
              fabrics. The Fabric By Meter accepts returns or exchanges only for
              defective items.
            </p>
            <p>
              Please create an unboxing video upon receiving your parcel. We
              require this video to address any defective or wrong product
              issues.
            </p>
            <p>
              If you receive a defective product, request a refund or
              replacement within 24 hours by emailing us images of the product,
              invoice, inner and outer packaging, and batch number.
            </p>
            <p>
              Include pictures of the damaged or tampered areas of the product
              or package.
            </p>
            <p>Allow 10 to 15 days for your request to be processed.</p>
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Refund or Replacement Eligibility
            </h2>
            <p>
              You are eligible for exchange if you receive a damaged or wrong
              product. In case the original product is not available you are
              eligible for store credit.
            </p>
            <p>
              Return shipping charges for wrong/defective products are not
              covered by us.
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Refund Process
            </h2>
            <p>
              Please mail us on{" "}
              <a 
                href="mailto:info@fabricbymeter.com" 
                className="underline hover:text-black"
              >
                info@fabricbymeter.com
              </a>
            </p>
            <p>
              Returns should be sent to Rochlani Textiles, Plot no 10, 2nd Pasta
              lane, Colaba, Mumbai - 400005, Maharashtra, with your order number
              in the subject line.
            </p>
            <p>
              Refunds are issued as gift cards by default, valid for 6 months.
              Alternatively, refunds can be transferred back to the source or
              bank account.
            </p>
            <p>
              Products like fabrics cut from a roll, sale items, pre-cut
              fabrics, gift cards, and fabrics printed on demand are
              non-returnable.
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Defective or Damaged Products
            </h2>
            <p>
              Covered defects include substantial inconsistencies in print,
              texture, or color; torn or unusable fabric; loose weave or damaged
              structure; and significant weight variation.
            </p>
            <p>
              Not covered are color discrepancies due to screen variations,
              inherent color bleeding, and fabric ordered below 2 meters.
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Conditions for Returned Products
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Intact tags, unwashed, unused, unstitched, and undamaged condition.</li>
              <li>Original packaging must be included.</li>
            </ul>
          </div>
          
          <div className="space-y-4 pt-6">
            <h2 className="text-lg font-semibold uppercase text-gray-900">
              Return for Customer Dislike
            </h2>
            <p>
              Returns are not accepted if the product does not meet expectations,
              subject to conditions similar to defective product returns.
            </p>
            <p>
              Customers bear full shipping charges, and refunds are processed
              within 2 weeks of receipt of the returned order via store credit /
              gift cards.
            </p>
            <p>
              We aim to ensure your satisfaction with every purchase. Please
              feel free to contact us for further assistance.
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <p>
              Orders once placed cannot be cancelled by the customer. In case an
              item is unavailable we will cancel the order and refund you within
              7-14 days.
            </p>
          </div>
          
          <div className="space-y-4 pt-6">
            <p>
              For COD orders, an order confirmation call/ message will be sent ,
              if not confirmed, the order will be cancelled. COD orders are not
              accepted for custom dyed fabrics, samples or custom made goods.
            </p>
          </div>
          
          <div className="space-y-4 pt-6">
            <p>
              The information provided on each listing is common for all products
              and is there to assist you but may be inaccurate please contact us
              if you have any doubts or queries as we will not take
              responsibility for wash-care, feel or any other information
              provided. Please buy a swatch to make sure it is what you are
              looking for.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}