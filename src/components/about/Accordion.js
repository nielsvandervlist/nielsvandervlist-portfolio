import AccordionItem from '@components/about/AccordionItem'

export default function Accordion(){
    return (
        <div className="mx-auto -ml-4">
            <AccordionItem title="Hosting">
                {/* Hosting content goes here */}
                <p className={'text-light-text font-light leading-8'}>One of the main services we provide is hosting, which means we can take care of the technical aspects of getting your website or application up and running on the internet. We ensure that your site is accessible to your audience and performs smoothly.</p>
            </AccordionItem>
            <AccordionItem title="CMS Craft">
                {/* CMS Craft content goes here */}
                <p className={'text-light-text font-light leading-8'}>We also offer CMS Craft, a content management system that allows you to easily manage and update your website's content without any technical knowledge. With CMS Craft, you have full control over your website's text, images, and other media.</p>
            </AccordionItem>
            <AccordionItem title="Web Development and Design">
                {/* Web Development content goes here */}
                <p className={'text-light-text font-light leading-8'}>Our team is skilled in web design and web development, and we pride ourselves on creating unique and visually appealing websites and applications. We take your ideas and transform them into engaging online experiences that reflect your brand identity and captivate your audience.</p>
            </AccordionItem>
            <AccordionItem title="Concept Thinking">
                {/* Concept Thinking content goes here */}
                <p className={'text-light-text font-light leading-8'}>Concept thinking is another service we provide, where we help you brainstorm and develop innovative ideas for your website or application. We work closely with you to understand your goals and vision, and then translate them into practical and creative concepts that set you apart from the competition.</p>
            </AccordionItem>
            <AccordionItem title="Payment Options">
                {/* Payment Options content goes here */}
                <p className={'text-light-text font-light leading-8'}>When it comes to payment options, we can integrate secure and reliable payment gateways into your website or application. This enables you to accept online payments from your customers, making it convenient for them to purchase your products or services.</p>
            </AccordionItem>
        </div>
    );
}
