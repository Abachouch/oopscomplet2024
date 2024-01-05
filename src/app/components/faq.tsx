'use client';
import { useState } from "react";

export default function Faq(){

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleFaqClick = (index: number) => {
        setOpenFaq((prevIndex : any) => (prevIndex === index ? null : index));
    };

    return (

<section className="faq">

<header className="faq-header">
    <h2 id="faq" className="faq-heading">Frequently Asked Questions </h2>
    <p className="faq-subheading">Check out our frequently asked questions below, or contact us for more information.</p>
</header>
<div className="faq-accordion">

    <div className={" faq-item " + (openFaq === 0 ? 'open' : '')} onClick={() => handleFaqClick(0)}>
        <div className="faq-item-header">
            <span className="faq-question">What is OopsBusted?</span>
            <button className="faq-toggle" aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">OopsBusted is a service that helps you find out if someone is active on various dating apps. Our platform provides discreet and accurate searches to uncover the truth about someone’s online dating presence.</span>
    </div>

    <div className={" faq-item " + (openFaq === 1 ? 'open' : '')} onClick={() => handleFaqClick(1)}>
        <div className="faq-item-header" >
            <span className="faq-question">How does OopsBusted work?</span>
            <button className="faq-toggle" aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">Simply enter the name and location of the person you’re curious about, choose your search plan, and our system will scan through multiple dating apps to provide you with detailed results.</span>
    </div>

    <div className={" faq-item " + (openFaq === 2 ? 'open' : '')} onClick={() => handleFaqClick(2)}>
        <div className="faq-item-header">
            <span className="faq-question">Is OopsBusted confidential?</span>
            <button className="faq-toggle" aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">Absolutely. We prioritize your privacy and confidentiality. All searches are conducted discreetly without alerting the person you are searching for.</span>
    </div>

    <div className={" faq-item " + (openFaq === 3 ? 'open' : '')} onClick={() => handleFaqClick(3)}>
        <div className="faq-item-header">
            <span className="faq-question">What kind of information do I need to start a search?</span>
            <button className="faq-toggle" aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">You’ll need the person's name and their location. Additional details can improve search accuracy but are not mandatory.
        </span>
    </div>

    <div className={" faq-item " + (openFaq === 4 ? 'open' : '')} onClick={() => handleFaqClick(4)}>
        <div className="faq-item-header">
            <span className="faq-question">How accurate are the search results?</span>
            <button className="faq-toggle" aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">Our searches are highly accurate, leveraging advanced technology to scan various dating platforms. However, the accuracy can depend on the specificity of the information provided.</span>
    </div>



    <div className={" faq-item " + (openFaq === 5 ? 'open' : '')} onClick={() => handleFaqClick(5)}>
        <div className="faq-item-header">
            <span className="faq-question">Can I use OopsBusted for free?</span>
            <button className="faq-toggle" aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">Currently, OopsBusted operates on a pay-per-search model with no free searches. This ensures we can maintain high-quality, accurate services.</span>
    </div>



    <div className={" faq-item " + (openFaq === 6 ? 'open' : '')} onClick={() => handleFaqClick(6)}>
        <div className="faq-item-header">
            <span className="faq-question">What happens if no profiles are found?</span>
            <button className="faq-toggle" aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">If no profiles are found, it means the person may not be active on the dating apps we cover. We provide results based on the information available to us.</span>
    </div>


    <div className={" faq-item " + (openFaq === 7 ? 'open' : '')} onClick={() => handleFaqClick(7)}>
        <div className="faq-item-header">
            <span className="faq-question">How do I pay for searches?</span>
            <button className="faq-toggle" aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">Payments can be made securely through our website using major credit/debit cards or other payment methods like PayPal.
        </span>
    </div>

    <div className={" faq-item " + (openFaq ===  8? 'open' : '')} onClick={() => handleFaqClick(8)}>
        <div className="faq-item-header">
            <span className="faq-question">Is OopsBusted legal?</span>
            <button className="faq-toggle" aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">Yes, OopsBusted operates within legal boundaries. However, we advise users to use our services responsibly and ethically.
        </span>
    </div>



    <div className={" faq-item " + (openFaq === 9 ? 'open' : '')} onClick={() => handleFaqClick(9)}>
        <div className="faq-item-header">
            <span className="faq-question">How do I get my results?</span>
            <button className="faq-toggle" aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">Results will be displayed on the website immediately after the search is processed. For comprehensive plans, detailed reports will be available for download.</span>
    </div>


    <div className={" faq-item " + (openFaq === 10 ? 'open' : '')} onClick={() => handleFaqClick(10)}>
        <div className="faq-item-header">
            <span className="faq-question">Can I get a refund if I’m not satisfied?</span>
            <button className="faq-toggle"  aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">We strive to provide accurate and useful results. Please review our refund policy for details on eligibility and the process for refund requests.</span>
    </div>

    <div className={" faq-item " + (openFaq === 11 ? 'open' : '')} onClick={() => handleFaqClick(11)}>
        <div className="faq-item-header">
            <span className="faq-question">What else can OopsBusted be used for?</span>
            <button className="faq-toggle" aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">
            Besides verifying partner loyalty and identifying potential cheating, OopsBusted can be a valuable tool for various other purposes. These include reconnecting with lost contacts, loves, or friends; detecting active profiles on dating platforms; and verifying someone’s single status. Our service provides insights that can aid in personal safety, relationship decisions, and reconnecting with people from your past.
        </span>
    </div>
    <div className={" faq-item " + (openFaq === 12 ? 'open' : '')} onClick={() => handleFaqClick(12)}>
        <div className="faq-item-header">
            <span className="faq-question">How can I contact customer support?</span>
            <button className="faq-toggle" aria-label="Toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <span className="faq-answer">For any inquiries or support, you can contact us through our 'Contact Us' page or email us directly at support@oopsbusted.com.</span>
    </div>
</div>
</section>
    )

}