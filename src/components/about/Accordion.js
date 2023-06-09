import AccordionItem from '@components/about/AccordionItem'

export default function Accordion() {
    return (
        <div className="">
            <AccordionItem title="Web Development and Design">
                {/* Web Development content goes here */}
                <p className={'text-light-text font-light leading-8'}>
                    I am a skilled web developer and designer, and I take pride in creating unique and visually appealing websites and applications. With a keen eye for detail, I transform your ideas into engaging online experiences that reflect your brand identity and captivate your audience.</p>
            </AccordionItem>
            <AccordionItem title="Content Management Systems">
                {/* CMS Craft content goes here */}
                <p className={'text-light-text font-light leading-8'}>We also offer CMS Craft, Wordpress, or others CMS is a content management
                    system that allows you to easily manage and update your websites content without any technical
                    knowledge. With this, you have full control over your websites text, images, and other
                    media.</p>
            </AccordionItem>
            <AccordionItem title="Hosting">
                {/* Hosting content goes here */}
                <p className={'text-light-text font-light leading-8'}>One of the main services we provide is hosting,
                    which means we can take care of the technical aspects of getting your website or application up and
                    running on the internet. We ensure that your site is accessible to your audience and performs
                    smoothly.</p>
            </AccordionItem>
            <AccordionItem title="Concept Thinking">
                {/* Concept Thinking content goes here */}
                <p className={'text-light-text font-light leading-8'}>Concept thinking is another service we provide,
                    where we help you brainstorm and develop innovative ideas for your website or application. We work
                    closely with you to understand your goals and vision, and then translate them into practical and
                    creative concepts that set you apart from the competition.</p>
            </AccordionItem>
            <AccordionItem title="Payment Options">
                {/* Payment Options content goes here */}
                <p className={'text-light-text font-light leading-8'}>When it comes to payment options, we can integrate
                    secure and reliable payment gateways into your website or application. This enables you to accept
                    online payments from your customers, making it convenient for them to purchase your products or
                    services.</p>
            </AccordionItem>
            <AccordionItem title="Apps">
                {/* Payment Options content goes here */}
                <p className={'text-light-text font-light leading-8'}>With expertise in various programming languages and frameworks, I have developed a diverse range of applications that cater to different needs. From intuitive mobile apps to powerful web solutions, my creations combine elegant design, robust functionality, and seamless user experiences, making a tangible impact in the digital world.</p>
            </AccordionItem>
        </div>
    )
}
