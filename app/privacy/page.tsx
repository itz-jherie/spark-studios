export const metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Spark Studios.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="pb-16 pt-36 md:pb-20 md:pt-40 lg:pb-24 lg:pt-44 flex-grow">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tight text-ink dark:text-white sm:text-5xl mb-8">
                    Privacy Policy
                </h1>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="mb-6 text-xl text-ink-3 dark:text-gray-300">
                        Last updated: March 2026
                    </p>
                    <p className="mb-6 text-ink-3 dark:text-gray-400">
                        At Spark Studios, we respect your privacy and are committed to protecting it through our compliance with this policy.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-ink dark:text-white">1. Cookies & Tracking Technologies</h2>
                    <p className="mb-6 text-ink-3 dark:text-gray-400">
                        We use cookies, tracking pixels, and other data technologies to improve your browsing experience on our website, to analyze our website traffic, and to understand where our visitors are coming from.
                    </p>

                    <h3 className="text-xl font-bold mt-8 mb-4 text-ink dark:text-white">Analytics & Advertising</h3>
                    <p className="mb-6 text-ink-3 dark:text-gray-400">
                        We use third-party analytics and advertising tools on our website to track user behavior, measure the effectiveness of our advertising campaigns, and deliver targeted advertisements. When you provide consent via our cookie banner, these tools collect data such as your IP address, device information, and browsing actions on our site.
                    </p>
                    <p className="mb-6 text-ink-3 dark:text-gray-400">
                        This data is shared with our analytics and advertising partners to help us optimize our marketing. You can revoke your consent at any time by clearing your browser cookies or declining tracking on our banner.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-ink dark:text-white">2. Contact Us</h2>
                    <p className="text-ink-3 dark:text-gray-400">
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@sparkstudios.qzz.io" className="text-primary hover:underline">hello@sparkstudios.qzz.io</a>.
                    </p>
                </div>
            </div>
        </main>
    );
}
