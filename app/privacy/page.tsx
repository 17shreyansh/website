import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | RSD Bharti Industries',
  description: 'Privacy Policy for RSD Bharti Industries Construction Material Ordering Platform',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy describes how RSD Bharti Industries Pvt. Ltd. ("we", "our", or "us") collects, uses, and protects your information when you use our services through:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Admin Web Portal</strong> - Administrative dashboard</li>
              <li><strong>Dealer Web Portal</strong> - Dealer management interface</li>
              <li><strong>Mobile Application</strong> - Customer ordering app</li>
            </ul>
            <p className="text-gray-700 mt-4">
              By using our platform, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">1. Personal Information</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium text-gray-800 mb-2">Customers (Mobile App)</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Name, email address, phone number</li>
                <li>Delivery addresses</li>
                <li>Payment information (UPI details)</li>
                <li>Order history and preferences</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium text-gray-800 mb-2">Dealers (Dealer Portal)</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Business name and registration details</li>
                <li>Contact information (name, email, phone)</li>
                <li>Business address</li>
                <li>Bank/UPI payment details</li>
                <li>Warehouse locations with GPS coordinates</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium text-gray-800 mb-2">Admins (Admin Portal)</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Name, email address, phone number</li>
                <li>Login credentials (encrypted)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2. Location Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Warehouse GPS Coordinates:</strong> Collected from dealers to enable nearest warehouse matching</li>
              <li><strong>Delivery Addresses:</strong> Collected from customers for order fulfillment</li>
              <li><strong>Device Location (Mobile App):</strong> May be requested to suggest nearby warehouses (optional)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3. Technical Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>IP addresses</li>
              <li>Device information (type, OS version)</li>
              <li>Browser type and version</li>
              <li>Usage data and analytics</li>
              <li>Session information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4. Communication Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Email correspondence</li>
              <li>OTP verification codes</li>
              <li>Order notifications</li>
              <li>Support messages</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Service Delivery</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Process and fulfill orders</li>
                  <li>Match orders to nearest warehouses</li>
                  <li>Facilitate payments via UPI</li>
                  <li>Send order confirmations and updates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Account Management</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Create and manage user accounts</li>
                  <li>Authenticate users (login/logout)</li>
                  <li>Password reset via OTP email</li>
                  <li>Verify business information (dealers)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Communication</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Send transactional emails (OTPs, order updates)</li>
                  <li>Respond to customer support inquiries</li>
                  <li>Notify dealers of new orders</li>
                  <li>Send important service announcements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Platform Optimization</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Improve warehouse matching algorithms</li>
                  <li>Analyze inventory trends</li>
                  <li>Enhance user experience</li>
                  <li>Monitor platform performance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Security & Compliance</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Prevent fraud and unauthorized access</li>
                  <li>Enforce terms of service</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing & Disclosure</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">We Share Information With:</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Service Providers</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><strong>Email Service (SMTP):</strong> For sending OTPs and notifications</li>
                  <li><strong>Payment Processors:</strong> For UPI payment processing</li>
                  <li><strong>Cloud Hosting:</strong> MongoDB Atlas for database storage</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Between Platform Users</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><strong>Dealers receive:</strong> Customer name, phone, delivery address, order details</li>
                  <li><strong>Customers receive:</strong> Dealer business name, warehouse location (general area)</li>
                  <li><strong>Admins access:</strong> All platform data for management purposes</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">We Do NOT:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Sell your personal information to third parties</li>
              <li>Share data for marketing purposes without consent</li>
              <li>Disclose information except as described in this policy</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Legal Requirements</h3>
            <p className="text-gray-700">
              We may disclose information if required by law, court order, or government request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage & Security</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Measures</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Passwords encrypted using bcrypt hashing</li>
              <li>Secure HTTPS connections</li>
              <li>MongoDB authentication and access controls</li>
              <li>Regular security updates</li>
              <li>Session management and token-based authentication</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Retention</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Active Accounts:</strong> Data retained while account is active</li>
              <li><strong>Inactive Accounts:</strong> May be deleted after 2 years of inactivity</li>
              <li><strong>Order History:</strong> Retained for 5 years for business records</li>
              <li><strong>Deleted Accounts:</strong> Personal data removed within 30 days (except legal requirements)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Location</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Data stored on MongoDB Atlas cloud servers</li>
              <li>Complies with applicable data protection regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights & Choices</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Access & Control</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>View Your Data:</strong> Request a copy of your personal information</li>
              <li><strong>Update Information:</strong> Modify your profile and business details</li>
              <li><strong>Delete Account:</strong> Request account deletion (subject to legal obligations)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from non-essential emails</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Location Permissions (Mobile App)</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Location access is optional</li>
              <li>Can be disabled in device settings</li>
              <li>Does not affect core ordering functionality</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Email Communications</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Transactional emails (OTPs, orders) cannot be disabled</li>
              <li>Marketing emails can be unsubscribed (if applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies & Tracking</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">We Use:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Session Cookies:</strong> For authentication and user sessions</li>
              <li><strong>Functional Cookies:</strong> To remember preferences</li>
              <li><strong>Analytics:</strong> To understand platform usage (anonymized)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">You Can:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Disable cookies in browser settings (may affect functionality)</li>
              <li>Clear cookies at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Service (SMTP)</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Used for OTP delivery and notifications</li>
                  <li>Subject to provider's privacy policy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Processors</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>UPI payments processed through third-party gateways</li>
                  <li>We do not store complete payment credentials</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Map Services</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>GPS coordinates collected for warehouse locations</li>
                  <li>May use mapping APIs for location selection</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our platform is not intended for users under 18 years of age. We do not knowingly collect information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this policy periodically. Changes will be posted with a new "Last Updated" date. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Breach Notification</h2>
            <p className="text-gray-700">
              In the event of a data breach affecting your personal information, we will notify affected users within 72 hours via email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">For privacy concerns, data requests, or questions:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> info@rsdbharti.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +91 98765 43210</p>
              <p className="text-gray-700"><strong>Address:</strong> Industrial Area, New Delhi, India</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Specific Portal Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Admin Web Portal</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Full access to platform data for management</li>
                  <li>Responsible for dealer verification and product assignment</li>
                  <li>Must maintain confidentiality of all user data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Dealer Web Portal</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Access to own warehouse and inventory data</li>
                  <li>View customer orders assigned to their warehouses</li>
                  <li>Responsible for protecting customer delivery information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Mobile Application</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Minimal data collection for ordering</li>
                  <li>Optional location permissions</li>
                  <li>Secure local storage of session data</li>
                  <li>Can clear app data anytime in device settings</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Basis for Processing (GDPR)</h2>
            <p className="text-gray-700 mb-4">If you are in the EU/EEA, we process your data based on:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Contract Performance:</strong> To fulfill orders and provide services</li>
              <li><strong>Legitimate Interest:</strong> Platform improvement and fraud prevention</li>
              <li><strong>Consent:</strong> Marketing communications (if applicable)</li>
              <li><strong>Legal Obligation:</strong> Compliance with laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your GDPR Rights (EU/EEA Users)</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Right to access your data</li>
              <li>Right to rectification</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, contact us using the information above.
            </p>
          </section>

          <div className="border-t pt-8 mt-12">
            <p className="text-gray-700 font-medium">
              <strong>Acknowledgment:</strong> By using our platform, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
